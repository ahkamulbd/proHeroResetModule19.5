/*
    ৩৩. তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
*/

var learntTopics = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript', 'git', 'React'];

for (var i = 0; i < learntTopics.length; i++) {
    var learntTopic = learntTopics[i];
    console.log(i, learntTopic);
}