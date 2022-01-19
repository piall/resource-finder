const UserModel = require('../model/user');

async function getUser(req, res) {
  try {
    const users = await UserModel.find();
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

module.exports = {
  getUser,
};
