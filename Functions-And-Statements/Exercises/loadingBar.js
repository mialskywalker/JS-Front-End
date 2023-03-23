function LoadingBar(num) {

    let bar = '[';

    for (let i = 0; i < num/10; i++) {
        bar += '%';   
    }
    for (let i = 0; i < 10 - num/10; i++) {
        bar += '.';
    }
    bar += ']';

    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(bar);
    }
    else {
        console.log(`${num}% ${bar}`);
        console.log('Still loading...');
    }

}

LoadingBar(30);
LoadingBar(50);
LoadingBar(100);