// import { createNote } from "./create";
import { genarateId } from "./utils/helper";
import { deleteNote, addNote } from "./utils/api";

export const notes = [
  {
    id: 1,
    title: "First",
    body: "1111111",
    inProgress: false,
    complted: false,
    favorit: true
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

export default class App {
  constructor() {
    this._notes = [];
    this.refs = {};
    this.refs.noteList = document.querySelector(".main__card-todo");
    this.refs.start = document.querySelector(`.main__card__start`);
    this.refs.inprogress = document.querySelector(`.main__card__progress`);
    this.refs.completed = document.querySelector(`.main__card__completed`);

    this.renderNodesList = this.renderNodesList.bind(this);
  }

  get notes() {
    return this._notes;
  }
  set notes(notes) {
    this._notes = notes;
  }

  addTodo(obj) {
    this._notes.push(obj);
    addNote(this._notes);
  }

  deleteTodo(id) {
    deleteNote(id);
    this.renderNodesList();
  }

  editTodo() {}

  createNoteContent({ title, body, favorit }) {
    // console.log(document);

    const div = document.createElement("DIV");
    const fav = document.createElement("DIV");
    const h2 = document.createElement("H2");
    const p = document.createElement("P");
    div.className = "main__card-todo";
    div.setAttribute("draggable", "true");
    h2.textContent = title;
    h2.className = "main__card-title";
    p.className = "main__card-body";
    p.textContent = body;
    div.appendChild(h2);
    div.appendChild(p);
    if (favorit) {
      // console.log(favorit);
      fav.className = "main__card-fav";
      div.appendChild(fav);
    }

    return div;
  }

  renderNodesList() {
    this.refs.start.innerHTML = null;
    this._notes.forEach(el => {
      if (el.inProgress) {
        this.refs.inprogress.append(this.createNoteContent(el));
      } else if (el.complted) {
        this.refs.completed.append(this.createNoteContent(el));
      } else {
        this.refs.start.append(this.createNoteContent(el));
      }
    });
  }
}
// const app = new App();
// app.renderNodesList();

// genarateId(notes);

const a = new App();
a.addTodo(notes[0]);
a.addTodo(notes[1]);
console.log(a._notes);
a.renderNodesList();

const add = document.querySelector(`.btn2`);
const modalWrapper = document.querySelector(`.modal_wrapper`);
const modal = document.querySelector(`.modal_window`);
const checkbox = document.querySelector(`.favCheckbox`);
const btnAdd = document.querySelector(`.btn`);
const body = document.querySelector(`body`);
const h2 = document.querySelector(`.main_title_input`);
const p = document.querySelector(`.main_content_text`);

const showModal = el => {
  console.log(el.target);
  if (el.target === modalWrapper) {
    modalWrapper.classList.toggle(`show`);
  } else if (el.target.closest(".btn2") === add || el.target === add) {
    modalWrapper.classList.toggle(`show`);
  } else if (el.target === btnAdd) {
    if (h2.value === "" || p.value === "") {
      alert(`Заполните все поля`);
    } else {
      modalWrapper.classList.toggle(`show`);
      h2.value = null;
      p.value = null;
    }
  }
};
const createNote = () => {
  const obj = {
    title: h2.value,
    body: p.value,
    inProgress: false,
    complted: false,
    favorit: checkbox.checked
  };

  if (h2.value !== `` && p.value !== ``) {
    console.log(obj);
    a.addTodo(notes[1]);
    a.renderNodesList();

    a.addToDo(obj);
  }
};

body.addEventListener(`click`, showModal);
btnAdd.addEventListener(`click`, createNote);
