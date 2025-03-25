import express, { Request, Response, NextFunction } from "express";

//controller import
import NewsAndBlogsController from "../../ControllerLayer/NewsAndBlogsController/NewsAndBlogsController";

//usecase import
import NewsAndBlogsUsecase from "../../UsecaseLayer/NewsAndBlogsUsecase/NewsAndBlogsUsecase";

// error handle
// import errorHandle from '../middleware/ErrorHandlingMiddleware';
// import userAuth  from '../middleware/UserMiddleware';


//repository import
import NewsAndBlogsRepository from "../repository/NewsAndBlogsRepository/NewsAndBlogsRepository";

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
const newsAndBlogsRepository = new NewsAndBlogsRepository();

//useCases
const newsAndBlogsUsecase = new NewsAndBlogsUsecase(
    newsAndBlogsRepository,
  generateOtp,
  encryptPassword,
  jwtToken,
  appWriteOtp,
//   generateEmail
);

//controllers
const newsAndBlogsController = new NewsAndBlogsController(newsAndBlogsUsecase);

const route = express.Router();

// Implement CRUD APIs for news and blogs. 
// Add admin approval system before publishing. 
// Enable commenting and likes/dislikes on blogs.  

route.post("/FetchNewsAndBlogs", (req, res, next) => {
  // threadController.Register(req, res, next);
});
route.post("/AddNewsAndBlogs", (req, res, next) => {
  // threadController.Register(req, res, next);
});
route.post("/EditNewsAndBlogs", (req, res, next) => {
  // threadController.Register(req, res, next);
});
route.post("/DeleteNewsAndBlogs", (req, res, next) => {
  // threadController.Register(req, res, next);
});

// route.use(errorHandle);
 

export default route;
