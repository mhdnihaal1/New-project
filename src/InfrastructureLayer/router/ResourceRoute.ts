import express, { Request, Response, NextFunction } from "express";

//controller import
import ResourceController from "../../ControllerLayer/ResourceController/ResourceController";

//usecase import
import ResourceUsecase from "../../UsecaseLayer/ResourceUsecase/ResourceUsecase";

// error handle
// import errorHandle from '../middleware/ErrorHandlingMiddleware';
// import userAuth  from '../middleware/UserMiddleware';


//repository import
import ResourceRepository from "../repository/ResourceRepository/ResourceRepository";

//services import
import GenerateOtp from "../services/GenerateOtp";
import EncryptPassword from "../services/BcryptPassword";
import SendEmail from "../services/SendEmail";
import {AppWriteOtp} from "../services/AppWriteOtp";
import JWTToken from "../services/GenerateToken";
 
//services
const generateOtp = new GenerateOtp();
const encryptPassword = new EncryptPassword();
const sendEmail = new SendEmail();
const jwtToken = new JWTToken();
const appWriteOtp = new AppWriteOtp()

//repositories
const resourceRepository = new ResourceRepository();

//useCases
const resourceUsecase = new ResourceUsecase(
    resourceRepository,
  generateOtp,
  encryptPassword,
  jwtToken,
  appWriteOtp,
  sendEmail
);

//controllers
const resourceController = new ResourceController(resourceUsecase);

const route = express.Router();

// Develop APIs for file uploads & approvals. 
// Integrate AWS S3 or Firebase Storage for secure file handling. 
// Implement admin approval process before publishing resources. 

route.post("/Registers", (req, res, next) => {
  // threadController.Register(req, res, next);
});

// route.use(errorHandle);
 

export default route;
