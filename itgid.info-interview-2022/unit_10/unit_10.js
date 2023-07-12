let x = 660;

function bar(funArg) {
    let x = 30;
    funArg();
} 

function foo() {
    console.log(x);
}

foo.x = 20;
bar.x = 40;

bar(foo);