function combinations(){
    let hasToEnd = false;

    for (let i = 1; i <= 3; i++) {
        if (!hasToEnd) {
            for (let j = 3; j >= 1; j--) {
                if (i+j === 2) {
                    hasToEnd = true;
                    break;
                }                

                console.log(i + " " + j);
            }
        }
        
    }
}

combinations();