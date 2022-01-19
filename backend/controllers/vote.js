const UserModel = require('../model/user');
const ResourceModel = require('../model/resource');

async function voteResource(req, res) {
  const { resourceID, userID, type } = req.body;

  try {
    const resource = await ResourceModel.findOne({ _id: resourceID });
    const user = await UserModel.findOne({ _id: userID });

    user.votedResources.push({ resourceID, vote: type });

    if (type === 'Beginner') {
      resource.vote.beginner = resource.vote.beginner + 1;
    } else if (type === 'Intermediate') {
      resource.vote.intermediate = resource.vote.intermediate + 1;
    } else {
      resource.vote.advance = resource.vote.advance + 1;
    }
    await user.save();
    await resource.save();

    res.send({
      success: true,
      vote: resource.vote,
      resource: user.votedResources,
    });
  } catch (err) {
    res.status(500);
    res.send({
      success: false,
      error: err,
    });
  }
}

module.exports = {
  voteResource,
};
