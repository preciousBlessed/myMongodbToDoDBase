const { Schema, model } = require("mongoose"); //Destructuring the Schema and Model Objects from the Mongoose Library

const todoItemsSchema = new Schema(
  {
    //   _id: {
    //     required: true,
    //     type: String,
    //     default: tobesIDGenerator(),
    //   },

    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const todoItemsModel = model("Items", todoItemsSchema);
// exporting the Model
module.exports = todoItemsModel;

// I Personally attempted to Implemented this pseudo-Random _id generator.
// It can uniquely generate upto [(20P5 * 10^17)-20P5] different id(s).
// However, I couldn't implement it in my Schema Model for some reasons.
// I encountered some unexpected errors.
// I hope to fix that later!

function tobesIDGenerator() {
  const alphaNumArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let randomFive = "";
  for (let i = 0; i <= 4; i++) {
    randomFive +=
      alphaNumArray[Math.floor(Math.random() * alphaNumArray.length)];
  }
  //   console.log("_0x" + randomFive + Math.random() * 1e17);
  return "_0x" + randomFive + "-" + Math.floor(Math.random() * 1e17);
}
// console.log(tobesIDGenerator());
