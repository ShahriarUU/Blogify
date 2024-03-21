import { v2 as cloudinary } from 'cloudinary';
import customError from './customError.js';

cloudinary.config({
    cloud_name: 'dvmz8cldb',
    api_key: '166386268286345',
    api_secret: 'of4uRvt7jCsPvD_2pDWEVRKMlmM'
});

const uploadCloud = async (localFilePath) => {
    try {

        if (!localFilePath) {
            return null;
        }

        const response = await cloudinary.uploader.upload(localFilePath);

        return response;
    }
    catch (error) {
        return error;
    }
}

export default uploadCloud;