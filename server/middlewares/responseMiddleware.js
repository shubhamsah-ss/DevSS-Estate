const responseMiddleware = (req, res, next) => {
    res.sendSuccess = (statusCode, data) => {
      res.status(statusCode).json({
        success: true,
        data,
      });
    };
  
    res.sendError = (statusCode, message) => {
      res.status(statusCode).json({
        success: false,
        error: message,
      });
    };
  
    next();
  };
  
  module.exports = responseMiddleware;