import { Request, Response } from 'express';
import { ResponseHelper } from '../../../utils/response.helper';
export class UploadHandsignController {
  
  public static async uploadHandsign(request: Request, response: Response): Promise<any> {
    
    const res = request.file;
    return response.json(request.file);
    
  }

}
