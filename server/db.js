const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dc_react_redux');
const { STRING, TEXT, DATE } = Sequelize;
const faker = require('faker');

const Blog = conn.define('blog', {
  title: {
    type: STRING,
    allowNull: false
  },
  text: {
    type : TEXT,
    allowNull: false
  },
  date: {
    type: DATE
  },
  category: {
    type: STRING,
    allowNull: false
  },
  img: {
    type: STRING
  },
  author: {
    type: STRING
  }
});

const syncAndSeed = async() => {
  try {
    await conn.sync({force: true});

    let blogs = [];
    for (let i = 0; i < 5; i++) {
      blogs.push(await Blog.create({
        title: faker.lorem.words(9),
        text: faker.lorem.paragraphs(3),
        date: faker.datatype.datetime(),
        category: faker.lorem.word(),
        img: faker.image.image(),
        author: faker.name.findName()
      }))
    }
  }
  catch(ex) {
    console.log(ex);
  }
};

module.exports = {
  syncAndSeed,
  models: {
    Blog
  }
}