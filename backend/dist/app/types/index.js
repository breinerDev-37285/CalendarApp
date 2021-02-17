"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventTypes = exports.userTypes = void 0;
exports.userTypes = {
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
};
exports.eventTypes = {
    title: {
        field: 'title',
        msg: 'El titulo es necesario'
    },
    start: {
        field: 'start',
        msg: 'La fecha de inicio es obligatoria'
    },
    end: {
        field: 'end',
        msg: 'La fecha de finalizacion es obligatoria'
    }
};
