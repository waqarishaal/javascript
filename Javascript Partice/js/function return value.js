function sum(math, eng , sc, urdu){
    var s = math + eng + sc + urdu;

    return s;
}

function percentage(total){
    var per = total/400 *100;
    document.write(per);
}
var total = sum (80,80,80,75);
percentage(total);