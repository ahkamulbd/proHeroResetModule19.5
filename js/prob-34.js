/*
    ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
*/

var phones = ['Nokia', 'Symphony', 'Oppo', 'Redmi', 'Apple', 'Tecno'];

var i = 0;

while (i < phones.length) {
    var phone = phones[i];
    console.log(i, phone);
    i++;
}