// source file for example calculator

window.Calculator = {
    curVal: 0,
    varAfterEachExample: 0,

    add: function (num1) {
        this.curVal += num1;
        return this.curVal;
    },

    addAny: function () {
        var sum = this.curVal;

        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }

        this.curVal = sum;
        Return this.curVal;
    },

};