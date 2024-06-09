const { Poster } = require('../models');

const posterData = [
  {
    username: 'testname1',
    password: 'password123'
  },
  {
    username: 'testname2',
    password: 'password123'
  },
  {
    username: 'testname3',
    password: 'password123'
  },
  {
    username: 'testname4',
    password: 'password123'
  },
  {
    username: 'testname5',
    password: 'password123'
  },
];

const seedPoster = async () => {
  for (let i = 0; index < posterData.length; i++) {
    const result = await Poster.create(posterData[i]);
  }
};

module.exports = seedCategories;
