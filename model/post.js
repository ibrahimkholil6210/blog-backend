const {nanoid} = require("nanoid");
const { db } = require("./index");

const findOne = (filter) => {
  return db.get("pet").find(filter).value();
}

const create = (post) => {
  const newPost = { id: nanoid(), createdAt: Date.now(), ...post, comments: [] };
  db.get("posts").push(newPost).write();

  return newPost;
}

module.exports = {
  create,
  findOne,
};
