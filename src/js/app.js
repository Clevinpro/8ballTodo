import { genarateId } from "./utils/helper";
import {deleteNote ,addNote} from "./utils/api";

class App {
  constructor() {
    this._notes = [];
    this.refs = {};
    this.refs.noteList = document.querySelector(".main__card-todo");
    this.refs.start = document.querySelector(`.main__card__start`);
    this.refs.inprogress = document.querySelector(`.main__card__progress`);
    this.refs.completed = document.querySelector(`.main__card__completed`);
    
    this.renderNodesList = this.renderNodesList.bind(this);
  }
  
  get notes(){
  return this._notes;
  }
  set notes(notes){
  return (this._notes = notes);
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

  createNoteContent({ title, body }) {
    // console.log(document);
    const div = document.createElement("DIV");
    const h2 = document.createElement("H2");
    const p = document.createElement("P");
    div.className = "main__card-todo";
    h2.textContent = title;
    h2.className = "main__card-title";
    p.className = "main__card-body";
    p.textContent = body;
    div.appendChild(h2);
    div.appendChild(p);

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


