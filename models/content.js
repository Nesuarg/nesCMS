var mongoose = require('mongoose');

var ContentSchema = {
  title: String,
  text: String,
  author: String
};

var Content = mongoose.model("Content", ContentSchema, "content");


Content.remove({}, function(err, data) {
  Content.create(
    {
      title: "Hello World",
      text: "From the other side",
      author: "niha"
    },
    {
      title: "Hello Cruel World",
      text: "From the inside",
      author: "ahin"
    }    
  )
})


module.exports = Content;