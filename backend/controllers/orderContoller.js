import { response } from "express"
import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import razorpay from 'razorpay'

//global variable
const currency = 'INR'
const deliveryCharge = 10

//Gateway initialize
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

// Placing orders using COD Method 
const placeOrder = async (req,res)=>{
    try {
        const {userId, items, amount, address} = req.body

        const orderData = {
            userId,
            items,
            address,
            amount, 
            paymentMethod: "COD",
            payment: false,
            date : Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message: "Order Placed"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}
// Placing orders using Stripe Method 
const placeOrderStripe = async (req,res)=>{

}
// Placing orders using Razorpay Method 
const placeOrderRazorpay = async (req,res)=>{
    try {
        const {userId, items, amount, address} = req.body

        const orderData = {
            userId,
            items,
            address,
            amount, 
            paymentMethod: "Razorpay",
            payment: false,
            date : Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const options = {
            amount: amount * 100,
            currency : currency,
            receipt : newOrder._id.toString()
        }
       await razorpayInstance.orders.create(options,(error,order)=>{
        if (error) {
            console.log(error);
            return res.json({success:fals, message: error})
            
        }
        res.json({success: true, order})
       })
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}

const verifyRazorpay = async (req,res) => {
    try {
      const {userId, razorpay_order_id } = req.body

      const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
      if(orderInfo.status === 'paid'){
        await orderModel.findByIdAndUpdate(orderInfo.receipt,{payment:true})
        await userModel.findByIdAndUpdate(userId, {cartData: {}})
        res.json({success: true, message: "Payment Successful"})
      }
      else{
        res.json({success: false, message: 'Payment Failed'})
      }
        
    } catch (error) {
      console.log(error);
      res.json({success:false, message:error.message})
    }
  }

//All Orders data for Admin Panel
const allOrders = async (req,res) =>{
    
    try {
        
        const orders = await orderModel.find({})
        res.json({success:true, orders})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}
//User Order data for frontend
const userOrders = async (req,res) =>{
    try {
        
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true, orders})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

//update order status from Admin Panel
const updateStatus = async (req,res) =>{
     try {
        const {orderId, status} = req.body

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message:'Status Updated'})
     } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
     }
}

export {verifyRazorpay ,placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}
