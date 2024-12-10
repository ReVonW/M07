const Blog = require('./models/blog');
const blogController = require('../controllers/blogCpntroller');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAd: -1 })
    .then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_details = (req, res) => {
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        Blog.findbyId(id)
            .then(result => {
                render('details', { blog: result, title: 'Blog Details' })
            })
            .catch(err => {
                console.log(err);
            });
    })
}

const blog_create_get = (req, res) => {
    console.blog = new Blog(req.body);

    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect:'/blogs'});
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}