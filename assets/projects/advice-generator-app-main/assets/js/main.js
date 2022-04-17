let response = "Click the button below to get your Advice!";
let responseId = 0;
function getAdvice(){
    w3.getHttpObject("https://api.adviceslip.com/advice", function(data){
        advice = data.slip.advice;
        advice_no = data.slip.id;
        response = advice;
        responseId = advice_no;

        console.log(responseId);
    });

    document.getElementById("advice").innerHTML = response;
    document.getElementById("advice-num").innerHTML = responseId;
}

