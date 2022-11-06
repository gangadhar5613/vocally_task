import { Schema, model, models } from "mongoose";




const UserSchema = new Schema({
    fullName: { type:String, required: true },
    email:{type:String, required:true,unique:true}
})


const UserModel = models.UserModel || model('UserModel', UserSchema);

export default UserModel;