import express from 'express';
import { fetchCourses, getCourseCurriculum, fetchCourse, getCoursesimilar, CatsCourse } from '../udemy-clone/BackendData/CoursesApi.js';
import { fetchCategories, fetchSubCategories } from '../udemy-clone/BackendData/CategoriesApi.js';
import { fetchReviews } from './BackendData/reviewsApi.js';
import { db } from '../udemy-clone/src/firebase.config.js';
import { collection, getDocs } from "firebase/firestore";
import stripe from 'stripe';
import dotenv from 'dotenv'
import { Permission } from './Permissions.js'
import admin from 'firebase-admin'
import { doc, deleteDoc } from "firebase/firestore";
import axios from 'axios';


dotenv.config();

const stripeInstance = stripe(process.env.VITE_Stripe_Secret_Key);
const app = express();

app.use(express.json());





/****courses */
app.get('/api/courses', async (req, res) => {
     let courses = await fetchCourses();
     res.send(courses);
});

/*****course details */
app.get('/api/course/:courseid', async (req, res) => {
     let courseId = req.params.courseid
     let Course = await fetchCourse(courseId)
     res.send(Course)
})


/*****course Curriculum */
app.get('/api/course/:courseid/curriculum-items', async (req, res) => {
     let courseId = req.params.courseid
     let PublicCurriculum = await getCourseCurriculum(courseId)
     res.send(PublicCurriculum)
})


/****courses reviews */
app.get('/api/course/:id/review', async (req, res) => {
     let id = req.params.id;
     let review = await fetchReviews(id);
     res.send(review);
});

/***categories */
app.get('/api/categories', async (req, res) => {
     let categoriesData = await fetchCategories();
     res.send(categoriesData);
});

/*****subcategories api */
app.get('/api/Subcategories', async (req, res) => {
     let subcategoriesData = await fetchSubCategories();
     res.send(subcategoriesData);
});


/***** */
app.get('/api/courses/category/:primary_category/:page', async (req, res) => {
     let { primary_category, page } = req.params
     let SimilarCourses = await getCoursesimilar(primary_category, page)
     res.send(SimilarCourses)
})



/*****filter courses */
app.get('/api/filter-courses', async (req, res) => {
     const { primary_category, subCategory, duration, price, level, language, order, search } = req.query;
     try {
          const filteredCourses = await CatsCourse(primary_category, subCategory, duration, price, level, language, order, search);
          res.send(filteredCourses);
     } catch (error) {
          console.error('Error filtering courses:', error);
          res.status(500).send('Internal Server Error');
     }
});







////******getting courses from cart */
app.get('/api/Account/Cart/Courses', async (req, res) => {
     const { email } = req.query
     try {
          const collectionRef = await collection(db, 'users', `${email}`, 'courses')
          const UserCartCourses = await getDocs(collectionRef)
          const getUserCourses = await UserCartCourses.docs.map(doc => {
               return {
                    course: doc._document.data.value.mapValue.fields,
                    courseId: doc.id
               }
          })

          const CartCourses = await getUserCourses.map(({ course, courseId }) => {
               let { rating, discountprice, image_480x270, nameOftheTeacher, title, id, lectures, quizzes, sectionNumber, reviews } = course
               return {
                    teacher: nameOftheTeacher.arrayValue.values,
                    rating: rating.doubleValue,
                    price: discountprice.integerValue,
                    image: image_480x270.stringValue,
                    title: title.stringValue,
                    id: id.integerValue,
                    lectures: lectures.integerValue,
                    quizzes: quizzes.integerValue,
                    sectionNumber: sectionNumber.integerValue,
                    reviews: reviews.integerValue,
                    Db_id: courseId
               }
          })

          res.send(CartCourses)
     } catch (err) {
          res.send(err)
     }
})
/*******Learning courses */
app.get('/api/Profile/learning', async (req, res) => {
     const { email } = req.query
     const collectionRef = await collection(db, 'users', `${email}`, 'PaidCourses')
     const UserPaidCourses = await getDocs(collectionRef)
     const getPaidCourses = await UserPaidCourses.docs.map(doc => doc._document.data.value.mapValue.fields)
     const LearningCourses = getPaidCourses.map(({ id, image, price, title, teacher, lectures, quizzes, sectionNumber }) => {

          return {
               teacher: teacher.arrayValue.values,
               price: price.stringValue,
               image: image.stringValue,
               title: title.stringValue,
               id: id.stringValue,
               lectures: lectures.stringValue,
               quizzes: quizzes.stringValue,
               sectionNumber: sectionNumber.stringValue,
          }
     })

     res.send(LearningCourses)
})

const db_app = !admin.apps.length ? admin.initializeApp({
     credential: admin.credential.cert(Permission[0])

}) : admin.app()

const CheckoutCourses = (Courses, PaidCoursesList, user) => {
     Courses.map(Course => PaidCoursesList(Course, user))
}
const FulFillOrders = async (data, user) => {
     const userDocRef = doc(db, "users", user);
     const coursesCollectionRef = collection(userDocRef, "courses");
     const UserCartCourses = await getDocs(coursesCollectionRef)
     const getUserCourses = await UserCartCourses.docs.map(async db_doc => {
          await db_app.firestore().
               collection('users')
               .doc(user)
               .collection('courses')
               .doc(db_doc.id)
               .delete()
     })
     return await db_app.firestore()
          .collection('users')
          .doc(user)
          .collection('PaidCourses')
          .add(data)
          .then(res => res)
          .catch(err => console.log(err.message, 'faild'))
}



/********stripe */
app.post('/api/create-checkout-session', async (req, res) => {
     const { user, CartCourses } = req.body;
     const PaidCourses = CartCourses.map(({ id, image, price, title, teacher, lectures, quizzes, sectionNumber }) => {
          let CourseTutor = teacher.map(tut => tut.stringValue)
          return {
               id,
               image,
               price,
               title,
               teacher: CourseTutor.map(el => el),
               lectures,
               quizzes,
               sectionNumber
          }
     })

     try {
          CheckoutCourses(PaidCourses, FulFillOrders, user)
          const session = await stripeInstance.checkout.sessions.create({
               payment_method_types: ['card'],
               mode: 'payment',
               line_items: CartCourses.map(({ image, price, title, teacher }) => {
                    let CourseTutor = teacher.map(user => user.stringValue)
                    return {
                         price_data: {
                              currency: 'gbp',
                              product_data: {
                                   name: title,
                                   images: [image],
                                   description: `by ${CourseTutor.map(el => el)}`
                              },
                              unit_amount: price * 100
                         },
                         quantity: 1
                    }
               }),

               success_url: 'http://localhost:5173/sucess.html',

               cancel_url: 'http://localhost:5173/cancel.html',
               metadata: {
                    user,
                    Cart: `${PaidCourses}`
               }

          });

          res.status(200).json(session);

     } catch (e) {

          res.status(500).json({ error: e.message });

     }

});








































app.listen(8080, () => console.log('Listening on port ' + 8080));
