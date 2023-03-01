/*
    ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।
*/

var booksPrice = [135, 356, 34, 654, 67, 89, 99, 102, 405, 23];

for (var i = 0; i <= booksPrice.length; i++) {
    var bookPrice = booksPrice[i];

    if (bookPrice > 100) {
        continue;
    }
    console.log(bookPrice);
}