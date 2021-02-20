async function gimmySomeAdvice (){
    try {
        const inputElement = document.getElementById('input');
        let searchSubject = inputElement.value;
        const url = (`https://api.adviceslip.com/advice/search/${searchSubject}`);
        const response = await axios.get(url);
        console.log(response);
        const slips = response.data.slips;
        const listOfAdvices = totalAdvices(slips)
    } catch(e){

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
function adviceInput(event) {
    if (event.code === "Enter") {
        gimmySomeAdvice()
    }
}

const pushbutton = document.getElementById("button");
pushbutton.addEventListener('click', gimmySomeAdvice);
const searchAdvice = document.getElementById("input");
searchAdvice.addEventListener('keypress', adviceInput);