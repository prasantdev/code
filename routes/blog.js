const express = require('express');
const path = require('path');
const blogs = require('../data/blogs')

const router = express.Router();

router.get('/',  (req, res) => {
    // res.sendFile(path.join(__dirname,'../templates/index.html'));
    res.render('../home');
})
router.get('/blogs',  (req, res) => {
    // blogs.forEach(e => {
    //     console.log(e.title);
    // })
    // res.sendFile(path.join(__dirname,'../templates/bloghome.html'));
    res.render('bloghome', {
        blogs: blogs
    });
})
router.get('/blogpost/:slug',  (req, res) => {
    // console.log(req.params.slug);
    myBlog = blogs.filter(x => x.slug === req.params.slug);
    // console.log(myBlog)
    // res.sendFile(path.join(__dirname,'../templates/blogpage.html'));
    res.render('blogpage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    });
})

module.exports = router;