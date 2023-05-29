import { Component } from '../classes/Component';

describe('Component', () => {
let component: Component;

beforeEach(() => {
    component = new Component('Component 1', 10, 20, '123456');
});

it('should have correct properties set in the constructor', () => {
    expect(component.naz).toEqual('Component 1');
    expect(component.h).toEqual(10);
    expect(component.w).toEqual(20);
    expect(component.serialNumber).toEqual('123456');
});

it('should return a formatted string with showReturn method', () => {
    const expectedOutput = 'Component 1, висота = 10, ширина = 20, серійний номер = 123456';
    expect(component.showReturn()).toEqual(expectedOutput);
});


});


import { Mechanism } from '../classes/Mechanism';

describe('Mechanism', () => {
let mechanism: Mechanism;

beforeEach(() => {

    mechanism = new Mechanism('Mechanism 1', 10, 20, '123456');
});

it('should have correct properties set in the constructor', () => {
    expect(mechanism.naz).toEqual('Mechanism 1');
    expect(mechanism.h).toEqual(10);
    expect(mechanism.w).toEqual(20);
    expect(mechanism.serialNumber).toEqual('123456');
    expect(mechanism.type).toEqual('Mechanism');
});

it('should return a formatted string with showReturn method', () => {
    const expectedOutput = 'Mechanism 1, висота = 10, ширина = 20, серійний номер = 123456';
    expect(mechanism.showReturn()).toEqual(expectedOutput);
});


});
