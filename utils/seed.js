const connection = require('../config/connection');
const { Thoughts, User } = require('../models');
const { getRandomName, getRandomEmails, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }

  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 5; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const email = getRandomEmails();
    const username = getRandomName();
  
    users.push({
      username,
      email,
    });
  }

  // Add users to the collection and await the results
  const userData = await User.insertMany(users);

  // Add thoughts to the collection and await the results

  const thoughts = [];

  for (let p = 0; p < 15; p++) {
    const thought = getRandomThought();

    thoughts.push(thought);
    
  };

  await Thoughts.insertMany({
    thoughts,
    users: [...userData.map(({_id}) => _id)],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
