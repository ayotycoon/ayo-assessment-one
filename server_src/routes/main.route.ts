
import express from "express";
import MainController from "../controllers/Main.controller";
import expressAdapter from "../adapters/express.adapter";

const router = express.Router();

// for this post request, call the controller class with the desired key
router.post("/",expressAdapter(MainController, 'solver'))

export default router;
