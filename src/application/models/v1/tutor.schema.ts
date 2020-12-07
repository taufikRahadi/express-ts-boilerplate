import * as mongoose from 'mongoose';
import { HandsignModel } from './handsign.schema';

// class TandaTangan {
//     nama_file: string
//     nama_folder: string;
//     tanggal_upload: string;
// }

export const TutorSchema = new mongoose.Schema({
    nama: {
        type: String,
    },
    kode_tutor: String,
    tanda_tangan: String
}, {
    timestamps: true,
    collection: 'm_tutor'
});
// TutorSchema.virtual('handsign', {
//     ref: 'Handsign',
//     localField: 'kode_tutor',
//     foreignField: 'kode_tutor',
//     justOne: true
// });

export const TutorModel = mongoose.model('tutor', TutorSchema);
