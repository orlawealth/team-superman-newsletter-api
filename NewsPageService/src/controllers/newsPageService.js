/* eslint-disable class-methods-use-this */
import Response from '../utils/response';
import newsPageService from '../services/newsPageService';

exports.showOneNews = async (req, res, next) => {
    try {
      const { emailId } = req.params.emailId;
      // Action to be performed. Result is stored in 'data'
      const data = await newsPageService.getOneNews(emailId);

       if (!data) {
         return Response.notFoundError(res, `Oooopss!!! This email news can't be found.`)
      }

      res.render('newspage', {data})
      return Response.customResponse(res, 200, 'Subscribed successfully', data);
    } catch (error) {
      next(error);
    }
  }

exports.showAllUserNews = async (req, res, next) => {

    try {

      const { userId } = req.params.userId;
      const data = await newsPageService.getAllUserNews(id);

      if (!data) {
         return Response.notFoundError(res, `Oooopss!!! This user can't be found.`)
      }

      return Response.customResponse(res, 200, 'Subscribed successfully', data);
    }
    catch(err) {
      next(err);
    }
  }

