import { Request, Response, NextFunction } from "express";
import ResourceUsecase from "../../UsecaseLayer/ResourceUsecase/ResourceUsecase";

class ResourceController {
  private ResourceUsecase: ResourceUsecase;

  constructor(ResourceUsecase: ResourceUsecase) {
    this.ResourceUsecase = ResourceUsecase;
  }

}

export default ResourceController;