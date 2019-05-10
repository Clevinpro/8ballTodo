import "./sass/main.scss";
import app from "./js/app";
import { loadNotes } from './js/utils/api';


const todo = new app();

loadNotes().then(data => {
  if(data && data.length > 0) {
    todo.notes = data;
    todo.renderNodesList();
  };
  
});

