import "./sass/main.scss";
import app from "./js/app";

const notes = [
  {
    id: 1,
    title: "First",
    body: "1111111",
    inProgress: false,
    complted: false
  },
  {
    id: 2,
    title: "Second",
    body: "2222222",
    inProgress: false,
    complted: false
  },
  {
    id: 3,
    title: "Third",
    body: "333333333",
    inProgress: true,
    complted: false
  },
  {
    id: 4,
    title: "Fourth",
    body: "444444444444",
    inProgress: true,
    complted: false
  }
];

const todo = new app();
todo.addTodo(notes[0]);
todo.addTodo(notes[1]);
todo.renderNodesList();



