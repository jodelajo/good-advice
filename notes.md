Css:
nice grid
```css
#form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    margin-bottom: 30px;
    align-items: center;
}
```

JAVASCRIPT
for loop
```javascript
function totalAdvices (slipArray){
    let myAdvice = [];
    for (let i = 0; i < slipArray.length; i++) {
        myAdvice = slipArray[i];
        const adviceList = document.getElementById('lijst');
        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'tegel');
        listItem.textContent = `"${myAdvice.advice}"`;
        adviceList.appendChild(listItem);
    }
}
```

function enter event
```javascript
// let query = '';
function adviceInput(event) {
    // query = event.target.value;
    // console.log(query)
    if (event.code === "Enter") {
        gimmySomeAdvice()
    }
}
```
function "remove children" -> clear output database
```javascript
function removeChilderen(node) {
    while (node.firstChild) {
        node.removeChild(node.lastChild)
    }
}

const adviceContainer = document.getElementById('lijst');

removeChilderen(adviceContainer);
```

Clear inputfield:
```javascript
const searchAdvice = document.getElementById("input");
searchAdvice.addEventListener('keypress', adviceInput);


searchAdvice.value= "";
```

