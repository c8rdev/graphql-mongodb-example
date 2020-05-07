import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        minlength: 5,
        maxlength: 254,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 512,
        select: false,
        required: true
    },
    photo: {
        type: String
    },
}, { timestamps: true })

const UserModel = model('user', UserSchema)

export default UserModel