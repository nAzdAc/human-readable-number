module.exports = function toReadable (number) {
  const numberList = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'thirty',
    22: 'forty',
    23: 'fifty',
    24: 'sixty',
    25: 'seventy',
    26: 'eighty',
    27: 'ninety'
  }
  
  var decade = Math.trunc(number/10);
  var hundred = Math.trunc(number/100);
  var decade2 = (Math.trunc(number/10)) % 10;

  if(number <= 20) {
    return numberList[number]
  } else if(number < 100) {
    if(number % 10 === 0) {
    return numberList[number/10 + 18]
    }
    return numberList[decade+18] + ' ' + numberList[number % 10]
  } else {
    if(number % 100 === 0) {
      return numberList[hundred] + ' hundred'
    } else if(decade2 === 0) {
      return numberList[hundred] + ' hundred' + ' ' + numberList[number % 10];
    } else if(decade2 === 1) {
      return numberList[hundred] + ' hundred' + ' ' + numberList[number % 10 + 10]
    } else if(number % 10 === 0) {
      return numberList[hundred] + ' hundred' + ' ' + numberList[decade2 + 18];
    }

    return numberList[hundred] + ' hundred' + ' ' + numberList[decade2 + 18] + ' ' + numberList[number % 10]
  }

}
