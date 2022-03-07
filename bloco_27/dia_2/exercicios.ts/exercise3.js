"use strict";
const testInterfaceEmployee = {
    registration: 'FNC1234567891011',
    salary: 1200.00,
    admissionDate: new Date(),
    generateRegistration() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `FNC${randomStr}`;
    }
};