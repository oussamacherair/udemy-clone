import React from "react";
import EmptyCart from "../assets/empty-shopping.jpg";
import { Button } from "@material-tailwind/react";

import { useQuery } from "@tanstack/react-query";
import { auth, db } from "../firebase.config";
import CourseCart from "./CourseCart";
import { doc, deleteDoc } from "firebase/firestore";
import { getCartCourses } from "../../Data/CoursesFrontendApi";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Publick_Key);

function Cart() {
  const user = auth?.currentUser?.email;
  let { data: CartCourses, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["CartCourses", user],
    queryFn: async () => await getCartCourses(user).then(res => res.data)
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
  if (isError) return <h1>{JSON.stringify(error.massage)}</h1>;
  const TotalPrice = !!CartCourses.length
    ? CartCourses.map(Course => +Course.price + 0.99).reduce(
        (pre, nex) => pre + nex
      )
    : 0;

  const ProductRemove = async docId => {
    try {
      await deleteDoc(doc(db, "users", user, "courses", docId));
      refetch();
    } catch (error) {
      console.error("Error removing document:", error);
      
    }
  };
  const createCheckoutSession = async () => {
    
    const stripe = await stripePromise;
    const CheckoutSession = await axios.post("/api/create-checkout-session", {
      CartCourses,
      user
    });
    const result = await stripe.redirectToCheckout({
      sessionId: CheckoutSession.data.id
    });
    

    if(result.error) alert(result.error.message)
  };

  
  
  return (
    <div className="p-4 flex flex-col  lg:block min-h-dvh">
      <div className="px-4 order-2  lg:order-none">
        <h1 className="text-[2.8rem] font-bold py-5 hidden lg:block">
          Shopping Cart
        </h1>
        <h2 className="py-4">
          {!!CartCourses?.length ? CartCourses?.length : 0} Courses in Cart
        </h2>
      </div>
      <div className="order-3 lg:order-none lg:grid grid-cols-12 ">
        <div className="col-span-9">
          {!!CartCourses.length ? (
            CartCourses?.map(course => (
              <div
                className="lg:grid grid-cols-12 col-span-9 grid-flow-row-dense"
                key={course.Db_id}
              >
                <CourseCart
                  visible_instructors={course.teacher}
                  image_480x270={course?.image}
                  headline={course?.title}
                  price={course?.price}
                  rating={course?.rating}
                  id={course?.id}
                  lectures={course?.lectures}
                  quizzes={course?.quizzes}
                  sectionNumber={course?.sectionNumber}
                  reviews={course?.reviews}
                  RemoveFromCart={ProductRemove}
                  db_id={course?.Db_id}
                />
              </div>
            ))
          ) : (
            <div className="p-16">
              <div>
                <div className="border p-8 flex flex-col justify-center items-center">
                  <img src={EmptyCart} alt={EmptyCart} />
                  <p className="text-xl py-4">
                    Your cart is empty. Keep shopping to find a course!
                  </p>
                  <Button color="purple" className="rounded-none px-4">
                    Keep shopping
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className={
            !!CartCourses.length
              ? `order-1 hidden lg:block lg:order-none col-span-3 self-start`
              : "hidden"
          }
        >
          <div className="p-4">
            <h1 className="text-gray-600 font-bold py-4 text-2xl">Total:</h1>
            <h2 className="py-4 text-[3rem]">${TotalPrice.toFixed(2)}</h2>
            <Button
              color="purple"
              className="rounded-none px-4 w-full text-lg my-4"
              onClick={createCheckoutSession}
            >
              Checkout
            </Button>
            
          </div>
        </div>
      </div>

      <div
        className={
          !!CartCourses.length
            ? `order-1 black lg:hidden lg:order-none col-span-3`
            : "hidden"
        }
      >
        <div className="p-4">
          <h1 className="text-gray-600 font-bold py-4 text-2xl">Total:</h1>
          <h2 className="py-4 text-[2rem]">${TotalPrice}</h2>
          <Button
            color="purple"
            className="rounded-none px-4 w-full text-lg"
            onClick={createCheckoutSession}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
