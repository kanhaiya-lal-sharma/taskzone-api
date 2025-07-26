const router = require('express').Router();
const { authenticate } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');
const taskController = require('../controllers/task.controller');

router.post('/',authenticate,authorizeRoles('Admin', 'Super-admin', 'Manager'),
  taskController.addTask
);

router.get( '/',authenticate,  authorizeRoles('Admin', 'Super-admin', 'Manager'),
  taskController.listTasks
);

module.exports = router;
