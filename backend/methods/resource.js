const ResourceModel = require('../model/resource');
const parseURL = require('../helpers/parseURL');

async function addResource(req, res) {
  const url = await parseURL(req.body.link);
  const resource = new ResourceModel({
    ...req.body,
    title: url.title,
    description: url.description,
    vote: {
      beginner: 0,
      intermediate: 0,
      advance: 0,
    },
  });

  try {
    await resource.save();
    res.send({
      success: true,
      data: resource,
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
  addResource,
};
