import { genarateId } from "./utils/helper";

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
    inProgress: true,
    complted: false
  },
  {
    id: 3,
    title: "Third",
    body: "333333333",
    inProgress: false,
    complted: true
  },
  {
    id: 4,
    title: "Fourth",
    body: "444444444444",
    inProgress: true,
    complted: false
  }
];

class App {
  constructor() {
    this._notes = notes;
    this.refs = {};
    this.refs.noteList = document.querySelector(".main__card-todo");
    this.refs.start = document.querySelector(`.main__card__start`);
    this.refs.inprogress = document.querySelector(`.main__card__progress`);
    this.refs.completed = document.querySelector(`.main__card__completed`);

    this.renderNodesList = this.renderNodesList.bind(this);
  }

  // genarateId() {}

  addTodo() {}

  deleteTodo() {}

  editTodo() {}

  createNoteContent({ title, body, favorit }) {
    // console.log(document);

    const div = document.createElement("DIV");
    const fav = document.createElement("DIV");
    const h2 = document.createElement("H2");
    const p = document.createElement("P");
    div.className = "main__card-todo";
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

const app = new App();
app.renderNodesList();

genarateId(notes);
