import { Request, Response } from "express"

export const getUsers = (req: Request, res: Response) => {

    res.status(200).json({
        ok: true,
        msg: 'getUsers'
    })

}

export const getUser = (req: Request, res: Response) => {

    const { id } = req.params

    res.status(200).json({
        ok: true,
        msg: 'getUser'
    })

}

export const postUser = (req: Request, res: Response) => {

    const { body } = req.body

    res.status(200).json({
        ok: true,
        msg: 'postUser',
        body
    })

}

export const putUser = (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req.body

    res.status(200).json({
        ok: true,
        msg: 'putUsers'
    })

}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params


    res.status(200).json({
        ok: true,
        msg: 'deletetUser'
    })

}