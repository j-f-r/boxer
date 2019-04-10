const mongoose = require('mongoose');

const File = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

File.virtual('urk').get(function () {
    const base_url = process.env.URL || 'http://localhost:3333';

    return `${base_url}/files/${encodeURIComponent(this.path)}`;
})

module.exports = mongoose.model("File", File);
