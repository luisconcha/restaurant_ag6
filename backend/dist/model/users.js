"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'luis@gmail.com': new User('luis@gmail.com', 'Luis Alberto', '123456'),
    'meg@gmail.com': new User('meg@gmail.com', 'Meguita', '123456'),
    'apolo@gmail.com': new User('apolo@gmail.com', 'Apolo', '123456')
};
