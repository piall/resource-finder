const TopicModel = require('../model/topic');
const parseURL = require('../helpers/parseURL');

async function addTopic(req, res) {
  const url = await parseURL(req.body.icon);
  if (url === null || !url.image) {
    res.status(406);
    res.send({
      success: false,
      error: 'Inavlid Link',
    });
    return;
  }
  const topic = new TopicModel({
    ...req.body,
  });

  try {
    await topic.save();
    res.send({
      success: true,
      data: topic,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      error: error,
    });
  }
}

async function getTopic(req, res) {
  try {
    const topics = await TopicModel.find();
    res.send({
      success: true,
      data: topics,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      error: error,
    });
  }
}

async function deleteTopic(req, res) {
  try {
    await TopicModel.remove({ _id: req.params.id });
    res.status(200);
    res.send({
      success: true,
      message: 'Deleted',
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
  addTopic,
  getTopic,
  deleteTopic,
};
