const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {diplayList(chapter)});

button.addEventListener('click', () => {
    if (input.value !== '') {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
       let li = document.createElement('li');
       let deleteButton = document.createElement('button');
        //const link = `https://www.churchofjesuschrist.org/search?facet=scriptures&lang=eng&query=${input.value}&page=1`
       // li.innerHTML = `<a href=${link}>${input.value}</a>`;
       li.textContent = item;
       deleteButton.textContent = "❌";
       // li.append(deleteButton);
       // list.append(li);
       // deleteButton.addEventListener('click', () => {
        //    list.removeChild(li)
      //  })
       // input.focus();
       // input.value = "";
   // } else {
   //     input.focus()
 //   }
//})