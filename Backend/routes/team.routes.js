import express from "express";
import { saveTeam, updateTeam, deleteTeam, getAllTeam } from '../controller/team.controller.js' 
const router = express.Router()

router.post('/save',saveTeam),
router.put('/update/:id',updateTeam),
router.delete('/delete/:id',deleteTeam),
router.get('/getall',getAllTeam)


export default router