let area = prompt('Введіть радіус круга.');
if(area == ''){
    console.log('Будь-ласка, введіть радіус!')
}
else if (isFinite(area) == true){
    getArea(area);
    function getArea(number){
        let res = (Math.PI*(Math.pow(number,2)));
        console.log(`Площа дорівнює ${res} квадратних одиниць.`);
    }
}
else if (isFinite(area == false)){
    console.log('Повинно бути числове значення.');
}