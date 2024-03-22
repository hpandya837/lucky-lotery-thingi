//create a list to store names
const nameArray = [];

function addName() {
  const nameInput = document.querySelector("#nameInput");
  const name = nameInput.value.trim();
  nameArray.push(name);
  displayNames()
  nameInput.value = "";
}

function displayNames() {
    const nameList = document.querySelector("#nameList")// get UL element
    nameList.innerHTML = '';
    for (let i=0; i < nameArray.length; i++ ) {
        const name = nameArray[i]
        const li = document.createElement('li');
        li.className = 'list-group-item';

        const span = document.createElement('span')
        span.textContent = name;
        li.appendChild(span);

        nameList.appendChild(li)
    }
}

document.querySelector("#addNameBtn").addEventListener("click", addName);