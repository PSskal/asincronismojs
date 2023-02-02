function sum(num1, num2) {
    return num1 + num2;
}

function cal(a, b, callback) {    
    return callback(a, b);
};

console.log(cal(2,7,sum));

setTimeout(() => {
    console.log("nuevoit");
}, 2000);

function gretting(name, apellidos) {
    console.log(`Hola ${name} ${apellidos}`);
}

setTimeout(gretting, 2000, "Richard|", "Pascual");