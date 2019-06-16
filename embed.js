var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


//POST- title, content
var postSchema=new mongoose.Schema({
    title:String,
    content:String
});
var Post=mongoose.model("Post",postSchema);

//USER-email, name
var userSchema=new mongoose.Schema({
    email:String,
    name:String,
    posts:[postSchema]
});
var User=mongoose.model("User",userSchema);



// var newUser=new User({
//     email:"hater@reno.unr.edu",
//     name:"Hater lama"
// });

// newUser.posts.push({
//   title:"how to brew polyjuice potions",
//   content:"Just kidding, go to cpotions class"
// });

// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

// var newPost=new Post({
//     title:"Reflections on Apple",
//     content:"They are delicious"
// });

// newPost.save(function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });


User.findOne({name:"Hater lama"},function(err,user){
    if(err){
        console.log(err);
    }else{
        user.posts.push({
            title:"Three things I really hate!!",
            content:"Voldemort. VOldemort. Voldemort!"
        });
        user.save(function(err,user){
            if(err){
                console.log(err);
            }else{
                console.log(user);
            }
        })
    }
});