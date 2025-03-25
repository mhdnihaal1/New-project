import mongoose, { Schema, Document, Model, Types } from "mongoose";
import ResourceRepository from "../../InfrastructureLayer/repository/ResourceRepository/ResourceRepository";
import IUser from "../../DomainLayer/UserDomain";
import generateOtp from "../../InfrastructureLayer/services/GenerateOtp";
import EncryptPassword from "../../InfrastructureLayer/services/BcryptPassword";
// import sendOtp from "../../infrastructureLayer/services/send-email";
import {AppWriteOtp} from "../../InfrastructureLayer/services/AppWriteOtp";
import {account} from "../../InfrastructureLayer/services/AppWriteOtp";
import JWTToken from "../../InfrastructureLayer/services/GenerateToken";


import { Client, Account, ID } from "appwrite";
import OtpSession from "../../DomainLayer/OtpSession";

// import IUser from "../../domainLayer/userDomain";
// import UserModel from "../../infrastructureLayer/database/UserModel";

class ResourceUsecase {
  private ResourceRepository: ResourceRepository;
  private generateOtp: generateOtp;
  private EncryptPassword: EncryptPassword;
  private JwtToken: JWTToken;
  private AppWriteOtp: AppWriteOtp;
//   private generateEmail: sendOtp;

  constructor(
    ResourceRepository: ResourceRepository,
    generateOtp: generateOtp,
    EncryptPassword: EncryptPassword,
    jwtToken: JWTToken,
    AppWriteOtp:AppWriteOtp,
    // generateEmail: sendOtp
  ) {
    this.ResourceRepository = ResourceRepository;
    this.generateOtp = generateOtp;
    this.EncryptPassword = EncryptPassword;
    this.JwtToken = jwtToken;
    this.AppWriteOtp = AppWriteOtp;
    // this.generateEmail = generateEmail;
  }

}


export default ResourceUsecase;