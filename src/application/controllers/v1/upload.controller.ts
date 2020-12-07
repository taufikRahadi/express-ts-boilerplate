import * as express from 'express'
import { ResponseHelper } from "../../../utils/response.helper";
import { TutorModel } from "../../models/v1/tutor.schema";
import { Post, Controller, Route, BodyProp, Get, Query, Example, Request, Response } from 'tsoa';

@Route('/v1/upload')
export class UploadController extends Controller {
  
  @Get()
  public async uploadHandsign(): Promise<any> {
    try {
      const data = await TutorModel.find();
      console.log(data);
      const response = data
      this.setStatus(200);
      return new ResponseHelper<any>(response, true);
    } catch (error) {
      this.setStatus(500);
      return new ResponseHelper<any>({
        message: error.message
      }, false);
    }
  }
}