var Developer = /** @class */ (function () {
    function Developer(fname, lname, mInit) {
        this.fname = fname;
        this.lname = lname;
        this.mInit = mInit;
        this.fullName = fname + " " + mInit + " " + lname;
    }
    return Developer;
}());
function greeting(person) {
    return "hello " + person.fname + " " + person.lname;
}
var user = new Developer('siemah', 'lsidem', 'M.');
console.log(greeting(user));
