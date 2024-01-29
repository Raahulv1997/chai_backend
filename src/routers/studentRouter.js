import express from "express";
import { addStudent } from "../controller/StudentControllers.js";
let studentrouter = express.Router();
studentrouter.get("/", addStudent);
export default studentrouter;
