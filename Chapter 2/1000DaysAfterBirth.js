function add1000Days([arg1]) {
    let dateStr = arg1.split('-');
    let resultDate = new Date(dateStr[2], dateStr[1] - 1, dateStr[0]);

    resultDate.setDate(resultDate.getDate() + 1000);

    let day = resultDate.getDate();
    let resDay = (day < 10? "0" + day:day);

    let month = resultDate.getMonth() + 1;
    let resMonth = (month < 10? "0" + month:month);

    let resYear = resultDate.getFullYear();

    console.log( resDay+ "-" + resMonth + "-" + resYear);
}

add1000Days(['25-02-1995']);
add1000Days(['07-11-2003']);
add1000Days(['01-01-2012']);
add1000Days(['14-06-1980']);
add1000Days(['30-12-2002']);
