var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post=require("./models/post");
var User=require("./models/user");



Post.create({
    title:"How to cook the best burger Part 3?",
    content:"asdf asdfhasdf asdf"
},function(err,post){
    User.findOne({email:"bob@email.com"},function(err,foundUser){
        if(err){
            console.log(err);
        }else{
            foundUser.posts.push(post);
            foundUser.save(function(err, user){
              if(err){
                  console.log(err);
              } else{
                  console.log(user);
              }
            });
        }
    })
});

// User.create({
//     email:"bob@email.com",
//     name:"Bob Builder"
// });

//Find user and fine all post for that user
// User.findOne({email:"bob@email.com"}).populate("posts").exec(function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });