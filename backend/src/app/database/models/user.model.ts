import { Schema,model } from 'mongoose';
import { i_user_model } from '@interfaces/user.interface';
import { hashSync,genSaltSync } from 'bcryptjs';


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

userSchema.pre('save', function() {
    const user:any = this;
    const salt = genSaltSync();
    user.password = hashSync(user.password, salt);
})


export default model<i_user_model>('User',userSchema);