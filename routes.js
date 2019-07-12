const controller = require("./controllers");
module.exports = function(app){
    app.get('/home',controller.allAuthors)
    app.get('/edit/:id',controller.editOne)
    app.post('/add',controller.addAuthor)
    app.put('/updateOne/:_id',controller.updateOne)
    app.delete('/deleteOne/:_id',controller.deleteOne)
    app.post('/addQuote/:_id',controller.addQuote)

}