import express from 'express';
import routes from '../routes';
import { videoDetail, deleteVideo, getUpload, postUpload, getEditVideo, postEditVideo } from '../controller/videoController';
import { uploadVideo } from '../middleWares';

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;