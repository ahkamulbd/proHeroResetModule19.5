/*
    ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
*/

function choosingLaptop(money) {
    if (money > 80000) {
        console.log('I will buy Mac');
    }
    else if (money > 60000) {
        console.log('I will buy Gaming Laptop');
    }
    else if (money > 40000) {
        console.log('I will buy Lenovo Yoga');
    }
    else if (money > 20000) {
        console.log('I will buy old laptop');
    }
    else {
        console.log('I will work with mobile');
    }
}

choosingLaptop(97000);