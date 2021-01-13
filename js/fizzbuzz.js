//Traditional Solve for Fizz Buzz using a loop
function FizzBuzzA(value1, value2){
    let returnValue = "";
    for(let loop = 1;loop<=100;loop++){
        if(loop%value1==0 && loop%value2==0){
            returnValue += 'FizzBuzz ';
        }
        else if (loop%value1 ==0){
            returnValue += 'Fizz ';
        }
        else if (loop%value2 ==0){
            returnValue += 'Buzz '
        }
        else{
            returnValue += loop + ' ';
        }
    }
    return returnValue;
}
//2nd Method
function FizzBuzzB(value1,value2){
    let returnValue = "";
    let Fizz = false;
    let Buzz = false;
    for(let loop = 1;loop<=100;loop++){
        Fizz = loop%value1 == 0;
        Buzz = loop%value2 == 0;
        switch(true){
            case Fizz && Buzz :{
                returnValue += 'FizzBuzz ';
                break;
            }
            case Fizz :{
                returnValue += 'Fizz ';
                break;
            }
            case Buzz :{
                returnValue += 'Buzz ';
                break;
            }
            default : {
                returnValue += loop + ' ';
                break;
            }
        }
    }
    return returnValue
}
//3rd Method "Non Traditional Approach"
function FizzBuzzC(value1,value2){
    let returnValue = "";
    for (let loop =1;loop<=100;loop++){
        returnValue += ((loop%value1==0 ? 'Fizz' : '') + (loop%value2==0 ? 'Buzz' : '') || loop ) + ' ';
    }
    return returnValue;
}

//The FizzBuzz Meta Strategy
function FizzBuzzD(value1, value2){
    let returnArray= [];
    for(let loop = 1; loop<=100;loop++){
        returnArray[loop] = ((loop%value1==0 ? 'Fizz' : '') + (loop%value2==0 ? 'Buzz' : '') || loop );
    }
    return returnArray;
}


//Call and use our FizzBuzz
function buzzIt(){
    let output="";
    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value;
    output = FizzBuzzD(val1,val2);
    document.getElementById('results').innerHTML = output;
}

//Call and use our Template
function buzzItTemplate(){
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');

    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = headTemplate.innerHTML;

    //get the values the user entered
    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value;
    //call out FizzBuzz function
    output = FizzBuzzD(val1,val2);
    for(loop=1; loop<output.length; loop+=5){
        resultsHTML += templateHTML.replace('{{val1}}', output[loop])
                                    .replace('{{val2}}', output[loop+1])
                                    .replace('{{val3}}', output[loop+2])
                                    .replace('{{val4}}', output[loop+3])
                                    .replace('{{val5}}', output[loop+4]);
    }
    document.getElementById('results').innerHTML = resultsHTML;


}