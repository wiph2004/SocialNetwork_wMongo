const connection = require("../config/connection");
const { Thoughts, User } = require("../models");
const { getRandomName, getRandomEmails, getRandomThought } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  // Delete the collections if they exist
  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  let usersCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (usersCheck.length) {
    await connection.dropCollection("users");
  }

  const users = [];

  for (let i = 0; i < 5; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const email = getRandomEmails();
    const username = getRandomName();

    users.push({
      username,
      email,
      thoughts: []
    });
  }

  const thoughts = [];

  for (let p = 0; p < 15; p++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const thought = getRandomThought();

    thoughts.push({
      thoughtText: thought,
      username: randomUser.username,
    });
  }

  await Thoughts.insertMany(thoughts);

  Thoughts.find({})
    .then((thoughts) => {
      thoughts.forEach(async (thought) => {
        try {
          users.forEach((user) => {
            if (user.username === thought.username) {
              user.thoughts.push(thought._id);
            }
          });
        } catch (error) {
          console.error("Error processing thought:", error);
        }
      });
    })
    .catch((error) => {
      console.error("Error finding thoughts:", error);
    });
  const userData = await User.insertMany(users);

  // Log out the seed data to indicate what should appear in the database

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
