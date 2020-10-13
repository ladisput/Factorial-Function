//Given a number, function calculates the factorial
const factorial = num => {
    if (Number.isInteger(num) && num > 0) {
        const getArray = num => {               //turns num into an array of all integers between 1 through num
            let factoArray = new Array(num);
            for (let i = 0; i < num; i++) {
                factoArray[i] = num - i;
            }
            return factoArray;
        }
        
        let factoArray = getArray(num);         //calls getArray()

        const myFunc = (total, num) => {        //assists the reduce method, multiplies all numbers in the array together
            return total * num;
        }

        return console.log(factoArray.reduce(myFunc)); //returns array using reduce method

    }
    else {
        return console.log('Please enter an a non-negative integer'); //control for invalid inputs
    }
}

//tests
factorial(5);
factorial(3);
factorial('hello');
factorial(8);
factorial(4.2);
factorial(0);
factorial(-1);
factorial(100);
factorial(true);
factorial(1);
