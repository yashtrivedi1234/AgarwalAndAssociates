import express from "express";
import {
  addVisitor,
  deleteVisitor,
  getAllVisitors,
} from "../controller/visiter.controller.js";

const router = express.Router();

router.post("/add", addVisitor); 
router.get("/get/all", getAllVisitors);
router.delete("/delete/:id", deleteVisitor);

export default router;
