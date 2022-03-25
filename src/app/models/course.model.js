const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        name: { type: String, maxlength: 255 },
        desc: { type: String, maxlength: 600 },
        img: { type: String, maxlength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, maxlength: 255 },
    },
    {
        timestamps: true,
    },
);

//Add Plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);
