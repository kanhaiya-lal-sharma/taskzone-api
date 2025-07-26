const router = require('express').Router();
const upload = require('../middlewares/uploadMiddleware');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');
const userController = require('../controllers/user.controller');


router.post('/',authenticate,authorizeRoles('Admin', 'Super-admin'),
  upload.single('image'),
  userController.addUser
);


router.get( '/', authenticate,authorizeRoles('Admin', 'Super-admin', 'Manager'),
  userController.listUsers
);

module.exports = router;

