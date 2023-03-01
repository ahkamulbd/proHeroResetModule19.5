/*
    ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
*/

var arrayElements = [23, 45, 3, 21, 45, 67];

arrayElements.shift();          // To eliminate the first element from array
arrayElements.unshift(100);     // To add 100 as an last element in an array

console.log(arrayElements);     // output - [ 100, 45, 3, 21, 45, 67 ]