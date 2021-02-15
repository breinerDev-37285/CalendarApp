import { i_types,i_user_types } from '@interfaces/user.interface';

export const userTypes:i_user_types<i_types> = {
    email: {
        field: 'email',
        msg: 'El email es necesario'
    },
    password: {
        field: 'password',
        msg: 'El password es necesario'
    },
    username: {
        field: 'username',
        msg: 'El nombre de usuario es obligatorio'
    }
}