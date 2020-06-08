import Users from '../models/Users';

/** Class representing UserService */
class subscribeService {
  /**
   * Updates a user
   * @param {object} param - param to update
   * @param {object} data - new user details
   * @returns {object} user
   */
  static async updateUser(param, data) {
    try {
      return await Users.update(data, {
        returning: true,
        where: param
      });
    } catch (error) {
      throw error;
    }
  }
}

export default subscribeService;
