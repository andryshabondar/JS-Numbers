let c = 40075; // екватор землі (довжина кола)
let d = 12742; // діаметр землі

let myMathPI1 = (+(c / d).toFixed(15));
console.log(`${myMathPI1} <= Школа 6 клас`)


//---------------------------------MyMath.PI--------------------------------------------

function myMathPI(n) {
    let a = 0;
    for (i = 1; i <= n; i += 4) {
        a += 1 / i - 1 / (i + 2);
    }
    return 4 * a;
}
console.log(`уви число Пі не вірне після 7 цифри(((((`)
console.log(`${+(myMathPI(1e+9).toFixed(15))} <= Виведене за допомогою ряду Лейбніца`);

let pi = 3.141592653589793;
console.log(`${pi} <= Задане в ручну число Пі`);


//---------------------------------MyMath.pow--------------------------------------------

function myMathPow () {
    let n1 = 2;
    let n2 = 4;
    const res = n1**n2;
    console.log(`POW ${res}`);
}
myMathPow ();

//---------------------------------MyMath.abs--------------------------------------------


function myMathAbs(){
    let abs = '-10';
    if (abs.charAt(0) == '-'){
        console.log((`ABS `)+(abs.slice(1)));
    }
    else if (abs.charAt(0) != '-'){
        console.log((`ABS `)+(abs.slice(0)));
    }
}
myMathAbs();

//---------------------------------MyMath.max--------------------------------------------

function myMathMax(...num){
    let min=num[0];
    let max=min;
    for (let i=1; i<num.length; i++){
        if(num[i]>max){
            max=num[i];
        }
    }
    console.log(`Максимальне число ${max}`);
}

myMathMax(55,10,80,30);

//---------------------------------MyMath.min--------------------------------------------

function myMathMin(...num){
    let max=num[0];
    let min=max;
    for (let i=1; i<num.length; i++){
        if(num[i]<min){
            min=num[i];
        }
    }
    console.log(`Мінімальне число ${min}`);
}

myMathMin(55,10,80,30);