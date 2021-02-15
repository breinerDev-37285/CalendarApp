import { Schema,model } from 'mongoose';
import { i_user_model } from '@interfaces/user.interface';


const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
},{
    collection: 'usuarios',
    timestamps: true
});


export default model<i_user_model>('User',userSchema);