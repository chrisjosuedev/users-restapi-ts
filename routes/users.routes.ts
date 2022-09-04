import { Router } from 'express';
import {
    getUsers,
    getUser,
    putUser,
    deleteUser,
    postUser,
} from '../controllers/users.controller';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

export default router;
