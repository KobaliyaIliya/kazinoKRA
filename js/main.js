 ;(function () {
    jQuery ('document').ready(function() {
        jQuery ('button').on("click",function() {


    var rate;
            rate = jQuery("#rate").val();

    var min1 = 3,
        max1 = 9,
        min2 = 3,
        max2 = 9,
        min3 = 3,
        max3 = 9,
        min4 = 3,
        max4 = 9;


    function getRandomInt1(min1, max1) {

        return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    }

    function getRandomInt2(min2, max2) {

        return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    }


    function getRandomInt3(min3, max3) {

        return Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
    }

    function getRandomInt4(min4, max4) {

        return Math.floor(Math.random() * (max4 - min4 + 1)) + min4;
    }

    var value1 = parseInt(getRandomInt1(min1, max1)),
        value2 = parseInt(getRandomInt2(min2, max2)),
        value3 = parseInt(getRandomInt3(min3, max3)),
        value4 = parseInt(getRandomInt4(min4, max4));

    var value01 = parseInt(value1)  ,
        value02 = parseInt(value2)  ,
        value03 = parseInt(value3)  ,
        value04 = parseInt(value4) ;

    console.log(value1);
    console.log(value2);
    console.log(value3);
    console.log(value4);

    if ((value1 === value2) && (value2 === value3) && (value3 === value4)) {
    alert ('Woooow!У Вас Джекпот!\n\r' + 'Ваша выигрышная комбинация :' + ' ' + value01 + ' ' + value02 + ' ' + value03 + ' ' + value04 + ' \n\r' + 'Сумма вашего выигрыша состовляет :' + ' ')
    }
    else if ((value1 === value2 && value2 === value3) || (value2 === value3 && value3 === value4)) {
        alert ('Woooow!У Вас тройка!\n\r' + 'Ваша выигрышная комбинация :' + ' ' + value01 + ' ' + value02 + ' ' + value03 + ' ' + value04 + ' \n\r' + 'Сумма вашего выигрыша состовляет :' + ' ')
    }
    else if ((value1 === value2 || value2 === value3) || (value3 === value4 )) {
        alert ('У вас пара!\n\r' + 'Ваша выигрышная комбинация :' + ' ' + value01 + ' ' + value02 + ' ' + value03 + ' ' + value04 + ' \n\r' + 'Сумма вашего выигрыша состовляет :' + ' ')
    }
})
})
 })();












