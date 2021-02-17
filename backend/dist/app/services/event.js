"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.updateEvent = exports.getEvents = exports.createEvent = void 0;
const events_1 = __importDefault(require("@database/models/events"));
const createEvent = (req, res) => {
    res.header('X-Service', 'createEvent');
    const event = new events_1.default(req.body);
    return event.save((err) => {
        if (err)
            return res.status(500).json({
                ok: false,
                err: err.message
            });
        return res.status(201).json({ ok: true });
    });
};
exports.createEvent = createEvent;
const getEvents = (req, res) => {
    res.header('X-Service', 'getEvents');
    const event = events_1.default.find();
    event.exec((err, events) => {
        if (err)
            return res.status(500).json({
                ok: false,
                msg: err.message
            });
        if (!events)
            return res.status(404).json({
                ok: false,
                msg: 'No existen eventos'
            });
        return res.json({
            ok: true,
            events
        });
    });
};
exports.getEvents = getEvents;
const updateEvent = (req, res) => {
    res.header('X-Service', 'updateEvent');
    const id = req.params.id;
    return events_1.default.findById(id)
        .exec(async (err, event) => {
        if (err)
            return res.status(500).json({
                ok: false,
                msg: err.message
            });
        if (!event)
            return res.status(404).json({
                ok: false,
                msg: 'No existe el evento'
            });
        if (event.user != req.body.user)
            return res.status(403).json({
                ok: false,
                msg: 'No cuentas con permisos para modificar este evento'
            });
        const { title, start, end, notes } = req.body;
        event.title = title;
        event.start = start;
        event.end = end;
        event.notes = notes;
        await event.save();
        return res.json({
            ok: true,
            event
        });
    });
};
exports.updateEvent = updateEvent;
const deleteEvent = (req, res) => {
    res.header('X-Service', 'deleteEvent');
    const id = req.params.id;
    return events_1.default.findById(id)
        .exec(async (err, event) => {
        if (err)
            return res.status(500).json({
                ok: false,
                msg: err.message
            });
        if (!event)
            return res.status(404).json({
                ok: false,
                msg: 'No existe el evento'
            });
        if (event.user != req.body.user)
            return res.status(403).json({
                ok: false,
                msg: 'No cuentas con permisos para eliminar este evento'
            });
        await event.delete();
        return res.json({ ok: true });
    });
};
exports.deleteEvent = deleteEvent;
