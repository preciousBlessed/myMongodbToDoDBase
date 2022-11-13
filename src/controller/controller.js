const Items = require("../models/items");

// GET/RETRIEVE ALL ITEMS
exports.retrieveAllTasks = async (req, res) => {
  try {
    let items = await Items.find();
    // To check if the items list containing all the todo-task is empty...
    if (items.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No items found.",
      });
    } //Else
    res.status(200).json({
      isFound: true,
      message: "All items found.",
      numberOfTasks: items.length,
      items,
    });
  } catch (error) {
    res.status(500).json({
      isFound: false,
      message: error.message,
    });
  }
};

// GET SINGLE ITEM(TASK)
exports.getOneTodoTask = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let task = await Items.findOne(id);
    //If the task is not found...
    if (!task) {
      return res.status(404).json({
        isFound: false,
        message: "Sorry this todo task does not exist.",
      });
    } //Else...
    res.status(200).json({
      isFound: true,
      message: "This task has been found",
      task,
    });
  } catch (error) {
    res.status(404).json({
      isFound: false,
      message: "Not Found",
      error: error.message,
    });
  }
};

//ADD A TODO TASK OR COLLECTION
exports.addATodoTask = async (req, res) => {
  try {
    let newTask = await req.body;
    let createdTask = await Items.create(newTask); //Pattern the new task according to the predefined Schema (Aliased as Items)...
    // If the there is no valid input from the user...
    if (!createdTask)
      return res.status(400).json({
        isCreated: false,
        message: "Task Creation Failed",
      }); //Else
    return res.status(201).json({
      isCreated: true,
      message: "Todo TASK Created Successfully",
      createdTask,
    });
  } catch (error) {
    res.status(500).json({
      isCreated: false,
      message: "Failed to create task",
      error: error.message,
    });
  }
};

// UPDATE A PARTICULAR TODO TAST
exports.updateOneTodoTask = async (req, res) => {
  try {
    let newUpdates = await req.body;
    let updatedTask = await Items.findOneAndUpdate(
      { _id: req.params.id },
      newUpdates,
      { new: true }
    ); // The {new : true } will help to return an updated todo task after changes have been made...
    // If the user passes nothing to the body of the request,
    if (!newUpdates)
      return res.status(400).json({
        isUpdated: false,
        message: "Todo task was not updated!",
      }); // Else...
    res.status(200).json({
      isUpdated: true,
      message: `Task with _id : ${req.params.id} has been updated successfully!`,
      updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      updateStatus: false,
      message: error.message,
    });
  }
};

// DELETE A TODO TASK
exports.deleteOneTodoTask = async (req, res) => {
  try {
    let taskDeleted = await Items.findOneAndRemove({ _id: req.params.id });
    //iF THE task to delete is not found,
    if (!taskDeleted)
      return res.status(404).json({
        isDeleted: false,
        message: "This task does not exist!",
      }); // Else...
    return res.status(200).json({
      isDeleted: true,
      message: `The todoTask with _id : ${req.params.id} has been deleted successfully!`,
      taskDeleted,
    });
  } catch (error) {
    res.status(500).json({
      deleteStatus: false,
      message: error.message,
    });
  }
};
