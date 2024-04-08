const router = require('express').Router();
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  addThought,
  removeThoughts,
  makeFriend,
  removeFriend,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(removeThoughts);

router.route('/:userId/friends/:friendId').post(makeFriend)

router.route('userId/friends/:friendId').delete(removeFriend);
module.exports = router;
