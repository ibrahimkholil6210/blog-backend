const {nanoid} = require("nanoid");
const { db } = require("./index");

const findOne = (filter) => {
  return db.get("posts").find(filter).value();
}

const findAll = (filter) => {
  return db.get("posts").value();
}

const create = (post) => {
  const newPost = { id: nanoid(), createdAt: Date.now(), ...post, comments: [] };
  db.get("posts").push(newPost).write();

  return newPost;
}

module.exports = {
  create,
  findOne,
  findAll
};
