const router = require("express").Router();
const controller = require("../controller/controller");


// Chaining the various routes!
router
  .get("/", controller.retrieveAllTasks)
  .get("/:id", controller.getOneTodoTask)
  .post("/", controller.addATodoTask)
  .put("/:id", controller.updateOneTodoTask)
  .delete("/:id", controller.deleteOneTodoTask);

module.exports = router;
