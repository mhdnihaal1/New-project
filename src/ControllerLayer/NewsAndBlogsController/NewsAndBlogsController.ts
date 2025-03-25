import { Request, Response, NextFunction } from "express";
import NewsAndBlogsUsecase from "../../UsecaseLayer/NewsAndBlogsUsecase/NewsAndBlogsUsecase";

class NewsAndBlogsController {
  private NewsAndBlogsUsecase: NewsAndBlogsUsecase;

  constructor(NewsAndBlogsUsecase: NewsAndBlogsUsecase) {
    this.NewsAndBlogsUsecase = NewsAndBlogsUsecase;
  }

}

export default NewsAndBlogsController;