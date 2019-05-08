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
  }

  createNoteContent({ title, body }) {
    const div = document.createElement("DIV");
    const h2 = document.createElement("H2");
    const p = document.createElement("P");

    div.className = "note__content";
    h2.textContent = title;
    h2.className = "note__title";
    p.className = "note__body";
    p.textContent = body;
    div.appendChild(h2);
    div.appendChild(p);

    return div;
  }

  renderNodesList() {
    const start = document.querySelector(`main__card__start`);
    const inprogress = document.querySelector(`main__card__progress`);
    const completed = document.querySelector(`main__card__completed`);
    this._notes.forEach(el => {
      if (el.inProgress) {
        inprogress.append(createElement(el));
      } else if (el.complted) {
        completed.append(createElement(el));
      } else {
        start.append(createElement(el));
      }
    });
  }
}
