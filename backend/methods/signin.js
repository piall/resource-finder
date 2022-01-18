const bcrypt = require('bcrypt');

const UserModel = require('../model/user');

async function signIn(req, res) {
  const { email } = req.body;
  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    passwordExists = await bcrypt.compare(
      req.body.password,
      userExists.password
    );

    if (passwordExists) {
      const user = JSON.parse(JSON.stringify(userExists));
      delete user.password;
      res.send({
        success: true,
        data: user,
      });
    } else {
      res.status(400);
      res.send({
        success: false,
        error: 'User doesnot exists',
      });
    }
  }
}

module.exports = signIn;
