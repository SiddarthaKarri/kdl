import { Router } from 'express';
import {
  getUsers, 
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = Router();

router.get('/', getUsers);       
router.get('/:id', getUserById);     
router.post('/', upload.single('profilePic'), createUser);        
router.put('/:id', upload.single('profilePic'), updateUser);      
router.delete('/:id', deleteUser);   

export default router;
