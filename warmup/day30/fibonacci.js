var sumFib = function(limilt) {
    var fibs = [0, 1];
    for(var i=1; i<limit; i++) {
        fibs.push(fibs[i-1] + fibs[i]);
    }
    var sum = 0;
    for(var i=0; i<fibs.length; i++) {
        sum+= fibs[i];
    }
    return(fibs);
}