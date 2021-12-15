const express = require('express');
const app = express();
const path = require('path');
const { models: {Blog}, syncAndSeed} = require('./db');
const faker = require('faker')

app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res)=>  res.sendFile(path.join(__dirname, '..', 'src', 'index.html')));

app.get('/api/blogs', async(req, res, next) => {
  try {
    const blogs = await Blog.findAll();
    res.send(blogs);
  }
  catch(ex) {
    next(ex);
  }
});

app.get('/api/blogs/:id', async(req, res, next) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    res.send(blog);
  }
  catch(ex) {
    next(ex);
  }
});

app.post('/api/blogs', async(req, res, next) => {
  try {
    res.send(await Blog.create({
      title: faker.lorem.words(9),
      text: faker.lorem.paragraphs(3),
      date: faker.datatype.datetime(),
      category: faker.lorem.word(),
      img: faker.image.image(),
      author: faker.name.findName()
    }));
  }
  catch(ex) {
    next(ex);
  }
});

app.delete('/api/blogs/:id', async(req, res, next) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    await blog.destroy();
    res.sendStatus(204);
  }
  catch(ex) {
    next(ex);
  }
});

const init = async() => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex) {
    console.log(ex);
  }
};

init();