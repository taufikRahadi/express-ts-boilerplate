import * as mongoose from 'mongoose';

export const HandsignSchema = new mongoose.Schema({
  kode_tutor: String,
  nama: String  
});

export const HandsignModel = mongoose.model('Handsign', HandsignSchema);
