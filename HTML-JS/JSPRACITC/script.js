

function sayHello(name) {
    return 'Hello,' + name;
}


console.log(sayHello('Shiro!'));


const arr = [0,1,2,3,4,5,6];

function returnNeighboringNumbers(arr) {
    return [arr - 1, arr, arr + 1];
}

console.log(returnNeighboringNumbers(5));


function getMathResult(paid, currency) {
    if (typeof(currency) !== 'number' || currency <= 0) {
        return paid;
    }

    let answer = '';

    for (let i = 1; i <= currency; i++) {
        if (i === currency) {
            answer = answer + paid * i;
        } else {
            answer = answer + paid * i + '---';
        }
    }

    return answer;
}

console.log(getMathResult(6, 3));



function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number') {
        return "Error";
    }

    amount = Math.pow(length, 3);
    square = Math.pow(length, 2) * 6;

    return `Amount: ${amount}, cube square: ${square}`;
}

console.log(calculateVolumeAndArea(8));

function getCoupeNumber(seatNum) {
    if (typeof(seatNum) !== 'number' || !Number.isInteger(seatNum) || seatNum < 0) {
        return "Error";
    }

    if (seatNum === 0 || seatNum >= 36) {
        return "These seat's don't exist";
    }

    return Math.ceil(seatNum / 4);

}

console.log(getCoupeNumber(23));


function getTimeFromMinutes(timeTotal) {
    if (typeof(timeTotal) !== 'number' || !Number.isInteger(timeTotal) || timeTotal < 0) {
        return "Error. Incorrect data.";
    } else {
    let hour = Math.floor(timeTotal / 60);
    let min = timeTotal % 60;

    return `Current time - ${hour} hour ${min} minutes.`;

    }

}

console.log(getTimeFromMinutes(220));


function findMaxNumber(firstNum, secondNum, thirdNum, forthNum) {
    if (typeof(firstNum, secondNum, thirdNum, forthNum) !== 'number' || findMaxNumber.length < 4){
        return "Error";
    } else {
        return Math.max(firstNum, secondNum, thirdNum, forthNum);
    }
}

console.log(findMaxNumber(4, 5, 11, 14 ));



function fib(num) {
    if (typeof(num) !== "number" || !Number.isInteger(num) || num <= 0) {
        return "Error";
    } 

    let first = 0,
        second = 1,
        result = ' ';

    for ( let i = 0; i < num; i++) {

        if (i + 1 === num){
            result = result + first;
        } else {
            result = result + first + ' ';
        }
        
        let third = first + second;
        first = second;
        second = third;
    }

    return result;
    
}



console.log(fib(12));






function fib(num) {
    if (typeof(num) !== "number" || !Number.isInteger(num) || num <= 0) {
    return "Error";
} 

let first = 0,
    second = 1,
    result = ' ';

for (let i = 0; i < num; i++) {

    if (i + 1 === num){
        result = result + first;
    } else {
        result = result + first + ' ';
    }
    
    let third = first + second;
    first = second;
    second = third;
}

return result;
}


console.log(fib(20));


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

// function showExperience(plan) {
//     const exp = plan.skills.exp;
//     console.log(exp);
//     return exp;
// }

// showExperience(personalPlanPeter);



// function showProgrammingLangs(plan) {
//     let str = '';
//     const programmingLangs = plan.skills.programmingLangs;

//     for (let key in programmingLangs) {
//         str = str + `Language ${key} learned on ${programmingLangs[key]}\n`;
//     }

//     console.log(str);
// }

// showProgrammingLangs(personalPlanPeter);


function showAgeAndLangs(plan) {
    const age = plan.age;
    const languages = plan.skills.languages.map(lang => lang.toUpperCase());
    let str = `Me ${age} and i know ${languages.join(', ')} language\n`;

    console.log(str);
}

showAgeAndLangs(personalPlanPeter);


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Massive are empty.' : str = 'A family consists of: ';
    
    arr.forEach(member => {
        str = str + `${member} `
    });

    return str;

}

showFamily(family);
console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    return str.split('').reverse().join('');
}

reverse(someString)
console.log(reverse(someString));


function reverse(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str.charAt(i);
    }
    return reversedString;
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

    let str = '';

    arr.length === 0 ? str = 'Not aviable wallute in this moment/' : str = 'Aviable wallutes:\n';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr){
            continue;
        }
        str = str + `${arr[i]}\n`;
    }
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));