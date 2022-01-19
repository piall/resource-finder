const ResourceModel = require('../model/resource');
const parseURL = require('../helpers/parseURL');

async function addResource(req, res) {
  const url = await parseURL(req.body.link);
  console.log('/////', url);
  const resource = new ResourceModel({
    ...req.body,
    title: url.title,
    description: url.description,
    image: url.image,
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

async function getResoure(req, res) {
  try {
    const resources = await ResourceModel.find();
    res.status(200);
    res.send({
      success: true,
      data: resources,
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
  addResource,
  getResoure,
};
