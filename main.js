async function gimmySomeAdvice (){
    const inputElement = document.getElementById('input');
    let searchSubject = inputElement.value;
    const url = (`https://api.adviceslip.com/advice/search/${searchSubject}`);
    const response = await axios.get(url);
    const slips = response.data.slips;

    console.log(slips[0].advice)
    console.log(response);
    console.log(response.data)
    // console.log(response.data.message)
    // console.log(response.data.message.text)
    searchAdvice.value= "";

    removeChilderen(adviceContainer);

    try {
        console.log('HI', response)
        // const errorMessage = response.data.message.text;
        // console.log(response.data.message.text)
       totalAdvices(slips);
    } catch(e){
            console.log('ERRORMESSAGE')
        }
    }

function totalAdvices (slipArray){
    let myAdvice = [];
    for (let i = 0; i < slipArray.length; i++) {
        myAdvice = slipArray[i];
        console.log('Here is some good advice:', myAdvice);
        const adviceList = document.getElementById('lijst');
        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'tegel');
        listItem.textContent = `"${myAdvice.advice}"`;
        console.log('wat is dit?', listItem);
        adviceList.appendChild(listItem);
    }
}


// let query = '';
function adviceInput(event) {
    // query = event.target.value;
    // console.log(query)
    if (event.code === "Enter") {
        gimmySomeAdvice()
    }
}

function removeChilderen(node) {
    while (node.firstChild) {
        node.removeChild(node.lastChild)
    }
}
const pushbutton = document.getElementById("button");
pushbutton.addEventListener('click', gimmySomeAdvice);
const searchAdvice = document.getElementById("input");
searchAdvice.addEventListener('keypress', adviceInput);
const adviceContainer = document.getElementById('lijst')
const adviceItem = document.getElementsByClassName('tegel');

