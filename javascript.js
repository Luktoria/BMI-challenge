
/*Change to Imperial*/

document.getElementById("imperial-measure").addEventListener('click', changeToImperial);

function changeToImperial(){
    document.getElementsByClassName('calculator')[0].style.height = "500px";
    document.getElementsByClassName('BMI-Imperial-version')[0].style.display = "block";
    document.getElementsByClassName('BMI-Metric-version')[0].style.display = "none"; 
}


/*Change to Metric*/

document.getElementById("metric-measure").addEventListener('click', changeToMetric);

function changeToMetric(){
    document.getElementsByClassName('BMI-Imperial-version')[0].style.display = "none";
    document.getElementsByClassName('BMI-Metric-version')[0].style.display = "block"; 
    document.getElementsByClassName('calculator')[0].style.height = "400px";
}



//Metric BMI calculations
function getBMI () {


    let height = document.getElementById('height').value;
    let one = parseInt(height);
    let weight = document.getElementById('weight').value;
    let two = parseInt(weight);

    let result = (two/((one/100)*(one/100)));

    let finalResult = result.toFixed(1);

    document.getElementsByClassName('welcome')[0].style.display = 'none';
    document.getElementsByClassName('result')[0].style.display = 'inline-block';
    document.getElementById("result-number").innerHTML  = finalResult; 

    if (finalResult <= 24.9 && finalResult >= 18.5){
        document.getElementById('health-range').innerHTML = "healthy weight.";
    } else if (finalResult < 18.5) {
        document.getElementById('health-range').innerHTML = "too thin.";
    } else if (finalResult <= 29.9 && finalResult >= 25) {
        document.getElementById('health-range').innerHTML = "overweight.";
    } else {
        document.getElementById('health-range').innerHTML = "obese.";
    }


   let min = 18.5 * (height/100) * (height/100);
   let finalMin = min.toFixed(1);
   let max = 24.9 * (height/100) * (height/100);
   let finalMax = max.toFixed(1);

   document.getElementById('ideal-weight-range').innerHTML = finalMin + "kgs - " + finalMax +"kgs" 
};


document.getElementsByName("weight")[0].addEventListener('change', getBMI); 
document.getElementsByName("height")[0].addEventListener('change', getBMI); 





//Imperial BMI calculations

 function getImperialBMI () {

  let feetvalue = document.getElementById('feet').value;
    let inchvalue = document.getElementById('inch').value;
    let stonevalue = document.getElementById('stone').value;
    let lbsvalue = document.getElementById('lbs').value;


    let heightToInch = feetvalue * 12;
    let weightToLbs = stonevalue * 14; 

    let heightvalue = heightToInch + parseInt(inchvalue);
    let weightvalue = weightToLbs + parseInt(lbsvalue);

    let heightvalueall = heightvalue * heightvalue;

    console.log(heightvalueall);

    let bmiImperial = (weightvalue / heightvalueall) * 703;
    let finalbmiImperial = bmiImperial.toFixed(1);

    document.getElementsByClassName('welcome')[0].style.display = 'none';
    document.getElementsByClassName('result')[0].style.display = 'inline-block';
    document.getElementById("result-number").innerHTML  = finalbmiImperial;

    if (finalbmiImperial <= 24.9 && finalbmiImperial >= 18.5){
        document.getElementById('health-range').innerHTML = "healthy weight.";
    } else if (finalbmiImperial < 18.5) {
        document.getElementById('health-range').innerHTML = "too thin.";
    } else if (finalbmiImperial <= 29.9 && finalbmiImperial >= 25) {
        document.getElementById('health-range').innerHTML = "overweight.";
    } else {
        document.getElementById('health-range').innerHTML = "obese.";
    } 

    let minImperial = ((heightvalueall)/ 703) * 18.5 ;
    let minStoneValue = minImperial / 14;
    let minLbsValue = minImperial % 14;

    let minStoneResult = minStoneValue.toFixed(0);
    let minLbsResult = minLbsValue.toFixed(0);

    let maxImperial = ((heightvalueall)/ 703) * 24.9 ;
    let maxStoneValue = maxImperial / 14;
    let maxLbsValue = maxImperial % 14;

    let maxStoneResult = maxStoneValue.toFixed(0);
    let maxLbsResult = maxLbsValue.toFixed(0);

    document.getElementById('ideal-weight-range').innerHTML = minStoneResult + "st " + minLbsResult +"lbs - " + maxStoneResult + "st " + maxLbsResult + "lbs"  

   } 

   document.getElementsByName('feet')[0].addEventListener('change', getImperialBMI);
   document.getElementsByName('inch')[0].addEventListener('change', getImperialBMI);
   document.getElementsByName('stone')[0].addEventListener('change', getImperialBMI);
   document.getElementsByName('lbs')[0].addEventListener('change', getImperialBMI);
   








