const toggle_list = document.querySelector('.toggle_list');
const listDiv = document.querySelector('.listDiv');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul')
const addNewInput = document.querySelector('input.addNewInput');
const addNewButton = document.querySelector('button.addNewButton');
const lis = listUl.children;
const firsListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;


firsListItem.style.backgroundColor = '#f6f9fc';
firsListItem.style.border = '1px solid #e8e8e8';
firsListItem.style.borderRadius = '6px';
firsListItem.style.paddingLeft = '5px';
lastListItem.style.backgroundColor = '#f6f9fc';

function attachedListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}


for (let i = 0; i < lis.length; i += 1) {
  attachedListItemButtons(lis[i]);
}
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove' ) {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up' ) {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'down' ) {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});


descriptionButton.addEventListener('click', ()=> {
  descriptionP.innerHTML = descriptionInput.value + ':';  // textContent == innerHTML
  descriptionInput.value = '';
});


toggle_list.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    listDiv.style.display = 'block';
    toggle_list.textContent = "Hide List";
  } else {
    toggle_list.textContent = "Show list";
     listDiv.style.display = 'none';
  }
})


addNewButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addNewInput.value;
  attachedListItemButtons(li);
  ul.appendChild(li);
  addNewInput.value = '';
});
