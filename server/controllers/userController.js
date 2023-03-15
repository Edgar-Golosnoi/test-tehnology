/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const ApiError = require('../error/ApiError');
class UserController {
  async registration(req,res) {
 
  }
  async login(req,res) {
    
  }
  async chek(req, res, next) {
    const {id} = req.query
    if(!id) {
      return next(ApiError.bsdRequest('Не задан ID'))
    }
    res.json(id);
  }
}

module.exports = new UserController()