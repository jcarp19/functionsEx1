"use strict";

function getAreaOfCircle(radius) {

    return Math.PI * Math.pow(radius,2);
}
console.log("Area of a Circle " + getAreaOfCircle(16))

function getCircumferenceOfCircle(radius) {

    return (2 * Math.PI) * radius;

}
console.log("Circumference of a Circle " + getCircumferenceOfCircle(95));

function getAreaOfSquare(side) {

    return Math.pow(side,2);

}
console.log("Area of a Square " + getAreaOfSquare(32))

function getAreaOfTriangle(base, height) {

    return (base * height) /2;

}
console.log("Area if a Triangle " + getAreaOfTriangle(19, 5))