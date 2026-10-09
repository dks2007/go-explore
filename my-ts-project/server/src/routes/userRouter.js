import {Router} from 'express';
import {createUser, getAllUsers, getUserById, updateUser, deleteUser} from '../controllers/user.js';


const router = Router();

router.post('/register', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;