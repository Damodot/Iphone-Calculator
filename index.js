let inputer = document.getElementById('value')
let database = []

// Division Function
let division = () => {
    database.push(Number(inputer.value.trim()))
    database.push("/")
    console.log(database);
    inputer.value = ""
}

//Multiply Function
let multiply = () =>{
    database.push(Number(inputer.value.trim()))
    database.push("X")
    console.log(database);
    inputer.value = ""
}

// Modulus Function
let modulus = () => {
    database.push(Number(inputer.value.trim()))
    database.push("%")
    console.log(database);
    inputer.value = ""
}

//Percentage Function
let percentage = () => {
    database.push(Number(inputer.value.trim()))
    database.push("perc")
    console.log(database);
    inputer.value = ""
}

// Minus Function
let minus = () => {
    database.push(Number(inputer.value.trim()))
    database.push("-")
    console.log(database);
    inputer.value = ""
}

// Addition Function
let addition = () => {
    database.push(Number(inputer.value.trim()))
    database.push("+")
    console.log(database);
    inputer.value = ""
}

// Power Function
let power = () => {
    database.push(Number(inputer.value.trim()))
    database.push("pow")
    console.log(database);
    inputer.value = ""
}

//Equals Function
let equals = () => {
    database.push(Number(inputer.value.trim()))
    console.log(database);
    
    if (database[1] === '/') {
        inputer.value = ""
        inputer.value = database[0] / database[2]
    } else if(database[1] === 'X') {
        inputer.value = ""
        inputer.value = database[0] * database[2]
    } else if (database[1] === "%") {
        inputer.value = ""
        inputer.value = database[0] % database[2]
    } else if(database[1] === 'perc') {
        inputer.value = ""
        inputer.value = (database[0] / 100) * database[2]
    } else if(database[1] === '-') {
        inputer.value = ""
        inputer.value = database[0] - database[2]
    } else if(database[1] === '+') {
        inputer.value = ""
        inputer.value = database[0] + database[2]
    } else if(database[1] === 'pow') {
        inputer.value = ""
        inputer.value = Math.pow(database[0] , database[2])
    }
    database = []
}

// Clear Function
let clearFunction = () => {
    inputer.value = ""
    database = []
}

// Numbers functions
let numbOne = ()  => {
    inputer.value += '1';
}
let numbTwo = ()  => {
    inputer.value += '2';
}
let numbThree = ()  => {
    inputer.value += '3';
}
let numbFour = ()  => {
    inputer.value += '4';
}
let numbFive = ()  => {
    inputer.value += '5';
}
let numbSix = ()  => {
    inputer.value += '6';
}
let numbSeven = ()  => {
    inputer.value += '7';
}
let numbEight = ()  => {
    inputer.value += '8';
}
let numbNine = ()  => {
    inputer.value += '9';
}
let numbZero = ()  => {
    inputer.value += '0';
}
let numbDot = ()  => {
    inputer.value += '.';
}
