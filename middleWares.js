import routes from "./routes";
import multer from "multer";

const multerVideo = multer({dest: "uploads/videos/"});

export const localMiddleware = (req, res, next) =>{
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
        isAuthenticated: true
    };
    next();
}

export const uploadVideo = multerVideo.single("videoFile");