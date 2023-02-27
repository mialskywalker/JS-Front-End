function solve(number, p1, p2, p3, p4, p5) {

    let result = parseInt(number);
    let arr = [p1, p2, p3, p4, p5];

    arr.forEach(element => {
        switch (element) {
            case 'chop':
                result = result / 2;
                break;
            case 'dice':
                result = Math.sqrt(result);
                break;
            case 'spice':
                result += 1;
                break;
            case 'bake':
                result = result * 3;
                break;
            case 'fillet':
                result -= result * 0.2;
                break;
        }
        console.log(result);
    });

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');