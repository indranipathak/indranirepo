const { Router } = require('express');
const express=require('express');
const router=express.Router();
const fs=require("fs");
const Post=require('../models/Post');
router.get('/',async (req,res)=>
{
    try{
        const posts=await Post.find();
        return res.json(posts);
      
    }
    catch(err)
    {
        res.json({message:err});
    }
});
router.get('/:postName',async (req,res)=>
{
    try{
    console.log(req.params.postId);
    const post=await Post.find({firstname:req.params.postName});
    return res.json(post);
    }
    catch(err)
    {
        return res.json({message:err});
    }
    
});
router.get('/:postId',async (req,res)=>
{
    try{
    console.log(req.params.postId);
    const post=await Post.find({id:req.params.postId});
    return res.json(post);
    }
    catch(err)
    {
        return res.json({message:err});
    }
    
});

router.patch('/user/update/:postId',async(req,res)=>
{
try{
    const post=await Post.updateOne({id:req.params.postId},{$set:{firstname:req.body.firstName}});
   res.json(post);
  console.log('updated');
}
catch(err)
{
    res.json({message:err});
}
});
router.delete('/user/delete/:postId',async(req,res)=>
{
try{
    const post=await Post.remove({id:req.params.postId});
    console.log('deleted');
    alert('deleted succesfully');
  return res.json(post);
 
}
catch(err)
{
    res.json({message:err});
}
});
router.post('/',async (req,res)=>
{
     console.log(req.body);
     try{
    const post=new Post(
        {
            id:req.body.id,
            email:req.body.email,
            age:req.body.age,
            firstname:req.body.firstname,
            lastname:req.body.lastname
        }
        
    );
        
            await post.save()
            return res.json(post)
    }
    catch(err)
        {
            console.log("error:",err);
        }
    });
module.exports=router;
