import express, { Request, Response, NextFunction } from "express";

//controller import
import AdminController from "../../ControllerLayer/AdminController/AdminController";

//usecase import
import AdminUsecase from "../../UsecaseLayer/AdminUsecase/AdminUsecase";

// error handle
// import errorHandle from '../middleware/ErrorHandlingMiddleware';
// import userAuth  from '../middleware/UserMiddleware';


//repository import
import AdminRepository from "../repository/AdminRepository/AdminRepository";

//services import
import GenerateOtp from "../services/GenerateOtp";
import EncryptPassword from "../services/BcryptPassword";
// import GenerateEmail from "../services/send-email";
import {AppWriteOtp} from "../services/AppWriteOtp";
import JWTToken from "../services/GenerateToken";
 
//services
const generateOtp = new GenerateOtp();
const encryptPassword = new EncryptPassword();
// const generateEmail = new GenerateEmail();
const jwtToken = new JWTToken();
const appWriteOtp = new AppWriteOtp()

//repositories
const adminRepository = new AdminRepository();

//useCases
const adminUsecase = new AdminUsecase(
  adminRepository,
  generateOtp,
  encryptPassword,
  jwtToken,
  appWriteOtp,
//   generateEmail
);

//controllers
const userController = new AdminController(adminUsecase);

const route = express.Router();

// User Management: Manage users, roles, and permissions. 
// Forum Moderation: Approve, edit, or delete discussions. 
// Content Moderation: Approve/decline blogs and resources. 
// Palliative Care Units Management: Add, edit, remove listings. 
// Analytics Dashboard: Provide user activity insights and KPIs. 


// ------------------ User Management
route.post("/Registers", (req, res, next) => {
  // threadController.Register(req, res, next);
});



// route.use(errorHandle);
 

export default route;
