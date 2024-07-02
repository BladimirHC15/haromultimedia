import express from "express";
import { login } from "../controllers/loginController.js";
// import { verifyToken } from "../middelwares/verifyToken.js";
// import { getAllRegisters, getRegister, createRegister, updateRegister, deleteRegister, 
//     getUserbyUuid, upload, getFile, extractDocuments, getImage, 
//     extractDocumentImage} from "../controllers/registerController.js";
// import RegisterModel from "../models/registerModel.js";
// import { deleteInvestigator, getAllInvestigators, getInvestigator, updateInvestigator } from "../controllers/investigatorsController.js";

const router = express.Router();

//Login paths
router.post('/login', login);
// router.post('/register', createUser);


export default router;
