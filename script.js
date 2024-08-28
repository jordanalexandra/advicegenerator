async function getAdvice(){
    try{
        const response = await fetch("https://api.adviceslip.com/advice");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const message = data.slip.advice;
        const quoteSection = document.getElementById("quote");

        quoteSection.innerHTML = '&#8220;' + message + '&#8221;';

        const quoteNumber = data.slip.id;
        const header = document.getElementById("header");

        header.innerText = "Advice #" + quoteNumber;
    }
    catch(error) {
        console.log(error);
    }
}


    










