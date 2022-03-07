"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdinaryPerson = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(_name) {
        this._name = _name;
        Person.personCount++;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Person.personCount = 0;
    return Person;
}());
exports.Person = Person;
var OrdinaryPerson = /** @class */ (function (_super) {
    __extends(OrdinaryPerson, _super);
    function OrdinaryPerson(_cpf, name) {
        var _this = _super.call(this, name) || this;
        _this._cpf = _cpf;
        return _this;
    }
    Object.defineProperty(OrdinaryPerson.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        enumerable: false,
        configurable: true
    });
    return OrdinaryPerson;
}(Person));
exports.OrdinaryPerson = OrdinaryPerson;
