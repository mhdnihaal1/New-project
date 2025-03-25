import { Request, Response, NextFunction } from "express";
import MembersAndPalliativeUseCase from "../../UsecaseLayer/MembersAndPalliativeUseCase/MembersAndPalliativeUsecase";

class MembersAndPalliativeController {
  private MembersAndPalliativeUseCase: MembersAndPalliativeUseCase;

  constructor(MembersAndPalliativeUseCase: MembersAndPalliativeUseCase) {
    this.MembersAndPalliativeUseCase = MembersAndPalliativeUseCase;
  }

}


export default MembersAndPalliativeController;