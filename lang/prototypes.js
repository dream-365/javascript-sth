var foo = {
    a: 42
};

var bar = Object.create( foo );

bar.b = "hello world";

console.log(bar.b);
console.log(bar.a);