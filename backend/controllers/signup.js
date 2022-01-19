const bcrypt = require('bcrypt');

const UserModel = require('../model/user');

async function signUp(req, res) {
  const { email, password } = req.body;
  const exists = await UserModel.findOne({ email });

  if (exists) {
    res.status(406);
    res.send({
      success: false,
      error: 'Email exists',
    });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  console.log(password, salt);
  req.body.password = await bcrypt.hash(password, salt);
  const user = new UserModel({
    ...req.body,
    isAdmin: false,
    isUser: true,
    accountDisabled: false,
  });

  try {
    await user.save();
    res.status(200);
    res.send({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({
      success: false,
      error: error,
    });
  }
}

module.exports = signUp;
