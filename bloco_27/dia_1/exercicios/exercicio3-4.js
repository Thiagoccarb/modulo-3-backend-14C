"use strict";
class Client {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3)
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        this._name = value;
    }
}
class OrderItem {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3)
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value < 0)
            throw new Error('O preço deve ser positivo.');
        this._price = value;
    }
}
class Order {
    constructor(client, items, paymentMethod, discount) {
        this._items = [];
        this._discount = 0;
        this._client = client;
        this._items = items;
        this._paymentMethod = paymentMethod;
        this._discount = discount;
    }
    get client() {
        return this._client;
    }
    set client(value) {
        this._client = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        if (value.length === 0) {
            throw new Error("O pedido deve ter pelo meno um item.");
        }
        this._items = value;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    set paymentMethod(value) {
        this._paymentMethod = value;
    }
    get discount() {
        return this._discount;
    }
    set discount(value) {
        if (value < 0) {
            throw new Error("O disconto não pode ser um valor negatívo.");
        }
        this._discount = value;
    }
    total() {
        return this.items.reduce((total, { price }) => total + price, 0);
    }
    totalWithDiscount() {
        const discount = this.discount;
        return this.total() * (1 - discount);
    }
}
const client = new Client('João');
const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);
const order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);
console.log(order);
console.log(client);
console.log(order.total());
console.log(order.totalWithDiscount());
