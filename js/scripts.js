var numbers = [15, 16, 100, 500, 1, 85, 2, 9, 89];

biggNumber = numbers[0];

for (var i = 1; i < numbers.length; i++) {

  if(biggNumber < numbers[i]) {

    biggNumber = numbers[i];

  }

}
console.log(biggNumber);



