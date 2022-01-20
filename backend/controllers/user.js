const UserModel = require('../model/user');

async function getUser(req, res) {
  try {
    const users = await UserModel.find({ isAdmin: false });
    res.send({
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      error: error,
    });
  }
}

async function getCurrentUser(req, res) {
  try {
    const user = await UserModel.findOne({ _id: req.params.id });
    res.send({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      error: error,
    });
  }
}

async function disableUser(req, res) {
  try {
    const user = await UserModel.findOne({ id: req.body.id });
    console.log(user);
    user.accountDisabled = true;
    await user.save();
    res.send({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      error: error,
    });
  }
}

module.exports = {
  getUser,
  disableUser,
  getCurrentUser,
};
