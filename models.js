const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors', { useNewUrlParser: true });

const AuthorSchema = new mongoose.Schema({
    author: {type: String, required: [true, "Author name is required"], minlength: 3}
})

module.exports = mongoose.model('Authors',AuthorSchema);
const Author = mongoose.model('Authors');