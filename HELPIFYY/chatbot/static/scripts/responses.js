function getBotResponse(input) {
    //rock paper 
    if (input == "hello") {
        return "Hello!";
    } else if (input == "I don't have a medical report.What to do?") {
        return "Hey User!Don't worry if you don't have a medical report.You have an option of symptom detector while signing up.For further queries,Please share your details.";
    } else if (input == "don't have medical report") {
        return "Hey User!Don't worry if you don't have a medical report.You have an option of symptom detector while signing up.For further queries,Please share your details.";
    } else if(input=="no medical report"){
        return  "Hey User!Don't worry if you don't have a medical report.You have an option of symptom detector while signing up.For further queries,Please share your details.";   
    }  else if(input=="no report"){
        return  "Hey User!Don't worry if you don't have a medical report.You have an option of symptom detector while signing up.For further queries,Please share your details.";
    }

    // Simple responses
    if (input == "What if a doctor isn't available?") {
        return "Firstly,it would be made sure that a doctor is available for you all the time,and even if there's a very low chance that doctor isn't available,a professional mentor will be always available for you.Just ping on the website.";
    } else if (input == "Thank You") {
        return "I hope that we helped you.For futher assistance,mail us on helpify.org";
    } else {
        return "Try something else";
    }
}