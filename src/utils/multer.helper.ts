import * as multer from 'multer';

export class MulterHelper {
  
  static multerConfig() {
    const storage = multer.diskStorage({
      destination: './public/file-upload',
      filename: (req, file, cb) => cb(null, file.filename)
    });

    return storage;
  }

  public static upload() {
    const multerUpload = multer({
      storage: multer.diskStorage({
        destination: './public/file-upload',
      }),
      limits: {
        fileSize: 10000000
      } 
    });

    return multerUpload;
  }

}
