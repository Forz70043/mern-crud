const db = require("../models");
const Tutorial = db.tutorials;
const Comment = db.comments;
const Tag = db.tag;


exports.create = (tutorial) => {
  return Tutorial.create({
    title: tutorial.title,
    description: tutorial.description,
  })
    .then((tutorial) => {
      console.log(">> Created Tutorial: " + JSON.stringify(tutorial, null, 4));
      return tutorial;
    })
    .catch((err) => {
      console.log(">> Error while creating Tutorial: ", err);
    });
};



exports.createComment = (tutorialId, comment) => {
    return Comment.create({
      name: comment.name,
      text: comment.text,
      tutorialId: tutorialId,
    })
    .then((comment) => {
        console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
        return comment;
    })
    .catch((err) => {
        console.log(">> Error while creating comment: ", err);
    });
};


exports.findTutorialById = (tutorialId) => {
    return Tutorial.findByPk(tutorialId, { include: ["comments"] })
    .then((tutorial) => {
        return tutorial;
    })
    .catch((err) => {
        console.log(">> Error while finding tutorial: ", err);
    });
};


exports.findCommentById = (id) => {
    return Comment.findByPk(id, { include: ["tutorial"] })
      .then((comment) => {
        return comment;
      })
      .catch((err) => {
        console.log(">> Error while finding comment: ", err);
      });
};

exports.findAll = () => {
  return Tutorial.findAll({
    include: [
      {
        model: Tag,
        as: "tags",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["tag_id", "tutorial_id"],
        // },
      },
    ],
  })
    .then((tutorials) => {
      return tutorials;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Tutorials: ", err);
    });
};