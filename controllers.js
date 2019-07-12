const Author = require("./models");

module.exports = {
    addAuthor: function(req,res){
        var new_author = new Author(req.body)
        new_author.save(function(err,authors){
            if(err){
                res.json({ message: err} )
            }else{
                res.json({ message: "Success", authors: authors})
            }
        })
    },
    allAuthors: function(req,res){
        Author.find({},function(err,authors){
            if(err){
                res.json(err)
            }else{
                res.json(authors)
            }
        })
    },
    updateOne: function(req,res){
        Author.findOne({_id: req.params._id},function(err,authors){
            authors.author = req.body.author;
            authors.save(function(err){
                if(err){
                    res.json({message: err })
            }else{
                res.json({ message: "Success",id: authors._id })
            }
        })
    })
},

    deleteOne: function(req,res){
        Author.remove({_id: req.params._id},function(err,authors){
            if(err){
                res.json(err)
            }else{
                res.json(authors)
            }
        })
    },
    editOne: function(req,res){
        Author.findOne({_id: req.params.id},function(err,author){
            if(err){
                res.json(err)
            }else{
                res.json(author);
            }
        })
    },
    addQuote: function(req,res){
        Author.findById({_id: req.params._id}, function(err,author){
            author.author =req.body.author;
            author.quote = req.body.quote;
            author.save(function(err){
                if(err){
                    res.json(err)
                }else{
                    author.quote.push(req.body);
                    author.save(res.json(author))
                }
            })
            
        })
    },
}