import  admin from 'firebase-admin'
import { buffer } from 'micro'
import { Permission } from './Permissions.js';
import dotenv from 'dotenv'
import express from 'express';

dotenv.config();


const app=express()
const endpointSecret = process.env.VITE_Stripe_T_key

const db_app= !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(Permission[0])

}) : admin.app()

const FulFillOrders = async (data) => {
     return db_app.firestore()
     .collection('users')
     .doc(data.metadata.user)
     .collection('orders')
     .doc(data.id)
     .set(data.metadata.Cart)
     .then(res=>res)
     .catch(err=>console.log(err.message,'faild'))
}












export default async (req, res) => {
    if (req.method === 'POST') {
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers["stripe-signature"]

        let event;

        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)

        } catch (err) {
            console.log('Error', err.message)
            return res.status(400).send(`Webhook error ${err.message}`)
        }

        if (event.type == 'checkout.session.completed') {

            const session = event.data.object
            console.log(session, 'Checkoutsession')
            return FulFillOrders(session)
                .then(() => res.status(200).send(session))
                .catch(err => {
                    res.status(400).send(`Webhook Error: ${err.message}`)
                })
        }



    }


}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,

    }
}
