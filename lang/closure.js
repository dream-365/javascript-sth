var output = console.log;

function makeAdder(x) {
    // parameter `x` is an inner variable

    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y) {
        return y + x;
    };

    return add;
}

var plusOne = makeAdder( 1 );
var plusTen = makeAdder( 10 );

output(plusOne( 3 ));
output(plusOne( 41 ));
output(plusTen( 13 ));