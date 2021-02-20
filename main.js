async function gimmySomeAdvice (){
    try {
        const searchSubject = "sun";
        const url = (`https://api.adviceslip.com/advice/search/${searchSubject}`);
        const response = await axios.get(url);
        console.log(response);
        const slips = response.data.slips;
        const listOfAdvices = totalAdvices(slips)
    } catch(e){

    }
}
gimmySomeAdvice()

function totalAdvices (slipArray){
    let myAdvice = [];
    for (let i = 0; i < slipArray.length; i++) {
        myAdvice = slipArray[i];
        console.log('Here is some good advice:', myAdvice);
        const adviceList = document.getElementById('lijst');
        const listItem = document.createElement('li');
        listItem.textContent = `${myAdvice.advice}`;
        console.log('wat is dit?', listItem);
        adviceList.appendChild(listItem);

    }
}
