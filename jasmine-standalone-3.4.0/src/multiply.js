function multiply(){

        let sum = 1;

        for(let i=0; i<arguments.length; i++){
                sum *= arguments[i];
        }
        return sum;
}

module.exports = multiply;