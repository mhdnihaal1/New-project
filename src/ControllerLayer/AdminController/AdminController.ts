import { Request, Response, NextFunction } from "express";
import AdminUsecase from "../../UsecaseLayer/AdminUsecase/AdminUsecase";

class AdminController {
  private AdminUsecase: AdminUsecase;

  constructor(AdminUsecase: AdminUsecase) {
    this.AdminUsecase = AdminUsecase;
  }

}

export default AdminController;
