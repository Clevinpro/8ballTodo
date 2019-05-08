const add = document.querySelector(`.btn2`);
const modalWrapper = document.querySelector(`.modal_wrapper`);
const modal = document.querySelector(`.modal_window`);
const btnAdd = document.querySelector(`.btn`);
const body = document.querySelector(`body`);
const h2 = document.querySelector(`.main_title_input`);
const p = document.querySelector(`.main_content_text`);

export const showModal = el => {
  if (el.target === modalWrapper) {
    modalWrapper.classList.toggle(`show`);
  } else if (el.target === add) {
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

export const addNote = () => {
  const checkbox = document.querySelector(`.favCheckbox`);
  const obj = {
    title: h2.value,
    body: p.value,
    inProgress: false,
    complted: false,
    favorit: checkbox.checked
  };

  if (h2.value !== `` && p.value !== ``) {
    console.log(obj);

    addToDo(obj);
  }
};

body.addEventListener(`click`, showModal);
btnAdd.addEventListener(`click`, addNote);
