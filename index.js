var count=0;
var myVar;
var inputBox=document.getElementById('result')
var buttonArray=document.getElementsByTagName('button')
var numberTimer
var mousePressedLong=false

function startTimer(index){
  myVar=setTimeout(()=>{
    var buttonStringArray=buttonArray[index].getElementsByTagName('span')[0].innerText.split(' ')
    console.log(buttonStringArray)
    var tempCount=(count-1)%(buttonStringArray.length)
    var tempString=inputBox.value
    tempString=tempString.split('')
    tempString[tempString.length-1]=buttonStringArray[tempCount]
    inputBox.value=tempString.join('')
    count=0;
  },300)
}
function clickHandler(index){
  console.log(index);
  if(index>8){
    var tempString=inputBox.value
    console.log(buttonArray[index].innerText)
    tempString+=buttonArray[index].innerText
    inputBox.value=tempString
  }else{
    if(count===0){
      count++;
      var tempString=inputBox.value
      var buttonStringArray=buttonArray[index].getElementsByTagName('span')[0].innerText.split(' ')
      var tempCount=(count-1)%(buttonStringArray.length)
      tempString+=buttonStringArray[tempCount]
      inputBox.value=tempString
      startTimer(index)

    }else{
      clearTimeout(myVar)
      count++;
      var tempString=inputBox.value
      var buttonStringArray=buttonArray[index].getElementsByTagName('span')[0].innerText.split(' ')
      var tempCount=(count-1)%(buttonStringArray.length)
      tempString=tempString.split('')
      tempString[tempString.length-1]=buttonStringArray[tempCount]
      console.log("TEMP STRING IN ELSE",tempString);
      tempString=tempString.join('')
      inputBox.value=tempString
      startTimer(index)
    }
  }

}

function addNumberToInputBox(index){
  clearTimeout(numberTimer)
  if(mousePressedLong){
    console.log("CONFIRMED")
    mousePressedLong=false
  }else{
    clickHandler(index)
  }
}

function insertNumberHandler(event,index){
  console.log(event);
  numberTimer=setTimeout(()=>{
    mousePressedLong=true
    var tempString=inputBox.value
    console.log(buttonArray[index].getAttribute('data-value'));
    tempString+=buttonArray[index].getAttribute('data-value');
    inputBox.value=tempString
    console.log(tempString)
  },500)
}
