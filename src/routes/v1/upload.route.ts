import { Router } from 'express';
import { UploadHandsignController } from '../../application/controllers/v1/upload-handsign.controller';
import { UploadController } from '../../application/controllers/v1/upload.controller';
import { MulterHelper } from '../../utils/multer.helper';

export const uploadRouter = Router()
  .post('/upload', MulterHelper.upload().single('handsign'), UploadHandsignController.uploadHandsign);
