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

const createComment = (inputComment,pId) => {
  const newComment = { id: nanoid(), createdAt: Date.now(), userName: inputComment.userName, comment: inputComment.comment, parentId: inputComment.parentId }
  let comments = db.get('posts').find({ id: pId }).get('comments').value()
  console.log({inputComment,pId,comments})
  comments.push(newComment)
  db.get('posts').find({ id: pId }).set('comments', comments).write()
  return newComment
}

module.exports = {
  create,
  findOne,
  findAll,
  createComment
};
