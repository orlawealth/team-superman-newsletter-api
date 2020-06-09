import Emails from '../models/Emails';

/** Class representing getting the news from the email */
class newsPageService {
  /**
   * Gets a news(email) from the email id
   * @param {string} emailId - id to be used to get news from email
   * @returns {html documment} content(news)
   */

  static async getOneNews(emailId) {
    try {
      return await Emails.findById(emailId);
    } catch (error) {
      throw error;
    }
  }

    /**
   * Gets all news(email) for a particuler user
   * @param {string} userId - id to be used to get all news for a particular user
   * @returns {html documment} content(news)
   */
   static async getAllUserNews(userId) {
    try {
      return await Emails.find({ user: userId });
    } catch (error) {
      throw error;
    }
  }
}

export default newsPageService;