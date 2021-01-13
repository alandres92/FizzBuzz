function testFB() {
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');

   
    let returnValue = "";
    for(let loop =1;loop<=100;loop++){
        if(loop%input1==0 && loop%input2==0){
            returnValue += 'FizzBuzz ';
        }
        else if (loop%input1 == 0){
            returnValue += 'Fizz ';
        }
        else if (loop%input2 ==0) {
            returnValue += 'Buzz ';
        }
        else{
            returnValue += loop + ' ';
        }
    }
    return returnValue;
}

//Display results



//table results
function buzzItTemplate(){
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');
    
    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = headTemplate.innerHTML;

    //get the values the user entered
    let val1 = document.getElementById('input1').value;
    let val2 = document.getElementById('input2').value;

    output = testFB(val1,val2);
    for(loop=1;loop < output.length; loop+=5){
        resultsHTML += templateHTML.replace('{{val1}}', output[loop])
                                    .replace('{{val2}}', output[loop+1])
                                    .replace('{{val3}}', output[loop+2])
                                    .replace('{{val4}}', output[loop+3])
                                    .replace('{{val5}}', output[loop+4]);
    }
    document.getElementById('results').innerHTML = resultsHTML;

}