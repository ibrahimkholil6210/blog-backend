const {nanoid} = require('nanoid')
const { db } = require('./index')

const createComment = (inputComment) => {
    const newComment = { id: nanoid(), createdAt: Date.now(), userName: inputComment.userName, comment: inputComment.comment, parentId: inputComment.parentId }
    let comments = db.get('posts').find({ id: inputComment.pId }).get('comments').value()
    comments.push(newComment)
    db.get('posts').find({ id: inputComment.postId }).set('comments', comments).write()
    return newComment
}

module.exports = {
    createComment
}