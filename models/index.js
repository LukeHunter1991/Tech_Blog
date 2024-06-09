const Post = require('./post');
const Poster = require('./poster');
const Comment = require('./comment');

Poster.hasMany(Post, {
    foreignKey: 'poster_id',
    onDelete: 'CASCADE',
});

Poster.hasMany(Comment, {
    foreignKey: 'poster_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(Poster, {
    foreignKey: 'poster_id'
});

Post.hasMany(Comment, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
    foreignKey: 'comment_id',
});

Comment.belongsTo(Poster, {
    foreignKey: 'poster_id',
});

module.exports = { Post, Poster, Comment };