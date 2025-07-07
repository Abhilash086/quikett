import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    orderId: {
        type: String,
        required: [true, "Order ID is required"],
        unique: true
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product'
    },
    productDetails: {
        name: String,
        image: Array,
    },
    paymentId: {
        type: String,
        default: ""
    },
    paymentStatus: {
        type: String,
        default: ""
    },
    deliveryAddress: {
        type: mongoose.Schema.ObjectId,
        ref: 'address'
    },
    subTotalAmount: {
        type: Number,
        default: 0
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    invoiceReceipt: {
        type: String,
        default: ""
    },
},{
    timestamps: true
})

const OrderModel = mongoose.model("order", orderSchema);

export default OrderModel;