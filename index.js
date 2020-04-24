let ticketNum = 0;
function takeANumber(){
    ticketNum++;
  return `Order number: ` + ticketNum;
}



console.log(takeANumber());
console.log(takeANumber());
console.log(takeANumber());




function nowServing(katzDeliLine){
    if (!katzDeliLine.length){
        return ("There is nobody waiting to be served!")
    }
    else {
         return ("Currently serving " + katzDeliLine.shift() + ".");
    } 
}

function currentLine(katzDeliLine){
    let positionInLine = [];
    let i = 0;
    if (katzDeliLine.length > 0) {
      while (i < katzDeliLine.length){
        positionInLine.push(` ${i + 1}. ` + katzDeliLine[i]);
        i++;
      }
      return (`The line is currently:`+ positionInLine);
} else if (katzDeliLine.length <= 0){
  return ("The line is currently empty.");
}
}