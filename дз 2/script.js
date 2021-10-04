let sqrt = prompt('Введіть число для визначення звадратного кореня');
if(sqrt == ''){
    console.log('Будь-ласка, введіть число!')
}
else if(sqrt < 0){
    console.log('Введіть додатнє число.')
}
else if (isFinite(sqrt) == true){
    getSqrt(sqrt);
    function getSqrt(sqrt){
        const res = Math.sqrt(sqrt);
        console.log(` Квадратний корінь з ${sqrt} дорівнює ${res}`);
    }
}
else if (isFinite(sqrt == false)){
    console.log('Повинно бути числове значення.');
}