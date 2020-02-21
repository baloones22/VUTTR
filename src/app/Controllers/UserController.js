const Yup = require('yup');
const User = require('../models/User');

class UserController {

async index(req, res){
  const users =await User.findAll();
  return res.json(users);
}
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password_hash: Yup.string().required().min(6),
    });
    if(!( await schema.isValid(req.body))) {
      return res.status(400).json({ error: "validation fails from yup" })
    }
    const userExist = await User.findOne({ where: { email: req.body.email }});
    if(userExist) {
      return res.status(400).json({ error: "User already exists."});
    }
    const user = await User.create(req.body);
    return res.json(user);
    }
}
module.exports = new UserController();