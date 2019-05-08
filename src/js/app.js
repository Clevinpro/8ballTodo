class App {
  constructor() {
    this._notes=[];
    this.refs = {};
    this.refs.noteList = document.querySelector(".main__card-todo");
  }

  createNoteContent(title, body) {
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
  get notes(){
return this._notes
  }
  set notes(notes){
return (this._notes = notes)
  }

}
