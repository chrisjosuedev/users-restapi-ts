import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();

        return res.status(200).json({
            ok: true,
            users,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Query Failed',
        });
    }
};

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: "User doesn't exists",
            });
        }

        return res.status(200).json({
            ok: true,
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: `Something wrong ${error}`,
        });
    }
};

export const postUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const existsEmail = await User.findOne({
            where: {
                email: body.email,
            },
        });

        if (existsEmail) {
            return res.status(400).json({
                ok: false,
                msg: `${body.email} Email is already registered`,
            });
        }

        const user = await User.create(body);

        return res.status(201).json({
            ok: true,
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: `Something wrong ${error}`,
        });
    }
};

export const putUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const user = await User.findByPk(id);

        /** Verify if users exists */
        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: "User doesn' exists",
            });
        }


        /** Verify if User sent an email */
        if (body.email) {
            const existsEmail = await User.findOne({
                where: {
                    email: body.email,
                },
            });

            if (existsEmail) {
                return res.status(400).json({
                    ok: false,
                    msg: `${body.email} Email is already registered`,
                });
            }
        }

        /** Update User */
        await user.update(body);

        return res.status(201).json({
            ok: true,
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: `Something wrong ${error}`,
        });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        /** Verify if users exists */
        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: "User doesn' exists",
            });
        }

        /** DELETED 
        await user.destroy()
        **/

        await user.update({ status: false })


        return res.status(201).json({
            ok: true,
            msg: 'User removed'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: `Something wrong ${error}`,
        });
    }
};
