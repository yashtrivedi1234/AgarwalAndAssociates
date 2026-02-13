import express from 'express';
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from '../controller/project.controller.js';
import { tokenVerify } from '../middleware/checkToken.js';

const router = express.Router();``
router.post('/save', createProject); 
// router.post('/bulk-save', BulkCreate); 
router.get('/getall', getAllProjects); 
router.get('/get/:id', getProjectById); 
router.put('/update/:id',  updateProject); 
router.delete('/delete/:id', deleteProject); 

export default router;
