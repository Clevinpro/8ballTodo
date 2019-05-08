'use strict';
export default class DragAndDrop {
    constructor() {
        this.refs = {};
        this.refs.todoElement = null;
        this.refs.notes = [...document.querySelectorAll('.main__card-todo')];
        this.refs.notesContainer = [...document.querySelectorAll('.main__card')];
        this.dragAndDrop = this.dragAndDrop.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragEnter = this.dragEnter.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.dragDrop = this.dragDrop.bind(this);
        this.refs.notesContainer.forEach(el => {
            el.addEventListener('mousedown', this.dragAndDrop);
            el.addEventListener('dragover', this.dragOver);
            el.addEventListener('dragenter', this.dragEnter);
            el.addEventListener('dragleave', this.dragLeave);
            el.addEventListener('drop', this.dragDrop);
        });

    }
    dragAndDrop(e) {
        if(e.target.classList.contains('main__card-todo')) {
        this.refs.todoElement = e.target;
        this.refs.notes.forEach(note => {
          note.addEventListener('dragstart', this.dragStart);
          note.addEventListener('dragend', this.dragEnd);
        });
    } else if(e.target.classList.contains('main__card-title')){
        this.refs.todoElement = e.target.parentNode;
    }
    
    }
    dragStart(e) {
        setTimeout(() => (e.target.classList.toggle('invisible'), 0));
    }

    dragEnd(e) {
        e.target.classList.remove('invisible');
    }

    dragOver(e) {
        e.preventDefault();
    }
    
    dragEnter(e) {
        e.preventDefault();
        e.target.classList.toggle('hovered');
    }
    
    dragLeave(e) {
        e.target.classList.remove('hovered');
    }
    
    dragDrop(e) {
        if(e.target.nodeName === 'H2') {
            e.target.parentNode.append(this.refs.todoElement);
        } else {
            e.target.append(this.refs.todoElement);
        }
        
        if(e.target.dataset.column === 'completed') {
            console.log('ok');
        }
    }
}

