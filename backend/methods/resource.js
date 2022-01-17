const ResourceModel = require('../model/resource');

async function addResource(req, res) {
  const link = req.body.link;
  const title = req.body.title;
  const description = req.body.description;
  const addedBy = req.body.addedBy;
  const vote = {
    beginner: 0,
    intermediate: 0,
    advance: 0,
  };

  console.log(req);

  const resource = new ResourceModel({
    link,
    title,
    description,
    vote,
    addedBy,
  });

  try {
    await resource.save();
    res.send('Success');
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

module.exports = {
  addResource,
};
