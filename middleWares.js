import routes from "./routes"

export const localMiddleware = (req, res, next) =>{
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
        isAuthenticated: true
    };
    next();
}