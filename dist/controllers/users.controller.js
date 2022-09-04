"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'getUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        ok: true,
        msg: 'getUser'
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req.body;
    res.status(200).json({
        ok: true,
        msg: 'postUser',
        body
    });
};
exports.postUser = postUser;
const putUser = (req, res) => {
    const { id } = req.params;
    const { body } = req.body;
    res.status(200).json({
        ok: true,
        msg: 'putUsers'
    });
};
exports.putUser = putUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        ok: true,
        msg: 'deletetUser'
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map