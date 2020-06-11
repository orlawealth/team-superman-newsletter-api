import expressJWT from 'express-jwt';

const checkToken = expressJWT({
  secret: process.env.JWT || 'SomeJuicySecretSetOnEnv'
});

/** JWT Middleware class */
class JWT {
  /**
   * Decodes token with app secret
   * @returns {object} next with request
   */
  static decodeToken() {
    return (req, res, next) => {
      //  Checks if token was passed on url
      const query = { req };
      if (query && query.hasOwnProperty('bearerToken')) {
        req.headers.authorization = `Bearer ${query.bearerToken}`;
      }
      checkToken(req, res, next);
    };
  }
}

export default JWT;
