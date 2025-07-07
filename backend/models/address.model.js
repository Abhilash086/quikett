import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address_line: {
        type: String,
        default: "",
        required: [true, "Please enter your address"],
    },
    city: {
        type: String,
        required: [true, "City is required"],
    },
    state: {
        type: String,
        required: [true, "Please enter your state"],
    },
    pincode: {
        type: String,
        required: [true, "Pincode is required"],
    },
    country: {
        type: String,
        required: [true, "Country is required"],
    },
    status: {
        type: Boolean,
        default: true
    },
    phone: {
        type: Number,
        required: [true, "Please enter your phone number"],
    }
},{
    timestamps: true
})

const AddressModel = mongoose.model("address", addressSchema);

export default AddressModel;