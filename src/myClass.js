class MyClass {
    constructor() {
        console.log("in constructor");
    }
    add(arg1, arg2) {
        var result;
        result = arg1 + arg2;
        return result;
    }
}

module.exports = MyClass;
