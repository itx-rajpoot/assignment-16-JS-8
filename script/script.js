function showOutput(output, text){
    let html = output + "<br>" + text;
    document.getElementById("outputBox").innerHTML=html;
}

let date = new Date();
let today = date.getDay();

// ifElse function
function ifElse(){
    if(today == 0){
        showOutput("Today is Sunday" , "Using if else statement");
    }
    else if(today == 1){
        showOutput("Today is Monday" , "Using if else statement");

    }
    else if(today == 2){
        showOutput("Today is Tuesday" , "Using if else statement");

    }
    else if(today == 3){
        showOutput("Today is Wednesday" , "Using if else statement");

    }
    else if(today == 4){
        showOutput("Today is Thurday" , "Using if else statement");

    }
    else if(today == 1){
        showOutput("Today is Friday" , "Using if else statement");

    }
    else {
        showOutput("Today is Saturday" , "Using if else statement");

    }
}

// switch function
function switchStructure(){

    switch (today){
        case 0:
            showOutput("Today is Sunday" , "Using switch statement");
            break;
        case 1:
            showOutput("Today is Monday" , "Using switch statement");
            break;
        case 2:
            showOutput("Today is Tuesday" , "Using switch statement");
            break;
        case 3:
            showOutput("Today is Wednesday" , "Using switch statement");
            break;
        case 4:
            showOutput("Today is Thursday" , "Using switch statement");
            break;
        case 5:
            showOutput("Today is Friday" , "Using switch statement");
            break;
        default:
            showOutput("Today is Saturday" , "Using switch statement");
            break;
    }
}

// keepAsking function
function keepAskingName() {
    
    do{
        var name = prompt("Enter Your Name: ");
        if(name){
            name = name.trim();
        }
        showOutput(name , "Using do while statement");
    } while(name === null || name.length < 3);
}