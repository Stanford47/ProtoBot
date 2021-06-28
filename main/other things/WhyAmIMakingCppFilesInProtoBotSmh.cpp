#include "includes/mainHead.h"


int rng() {
    srand(time(NULL));
    int RNG = rand()%10;
    std::cout << RNG;
    return RNG;
}

int main() {
    int RNG = rng();
    std::string answer;
    double num1, num2, calcanswer;
    std::cout << "I see that you have found this executable. \n this is basically a thing i made in c++. \n I still don\'t know why I am putting this stuff in ProtoBot... \n Anyways, what would you like to do: \n calculator     quiz?     rng     exit \n";
    std::cin >> answer;
    if(answer == "calculator") {
        std::string addorsub;
        std::cout << "would you like to add or subtract: \n";
        std::cin >> addorsub;
        if(addorsub == "add") {
            std::cout << "first number: \n";
            std::cin >> num1;
            std::cout << "second number: \n";
            std::cin >> num2;

            calcanswer = num1 + num2;

            std::cout << "the answer is: \n" << calcanswer;
        } else if (addorsub == "subtract") {
            std::cout << "first number: \n";
            std::cin >> num1;
            std::cout << "second number: \n";
            std::cin >> num2;

            calcanswer = num1 - num2;

            std::cout << "the answer is: \n " << calcanswer;
        }
    } else if (answer == "quiz" || answer == "quiz?") {
        std::string whichquiz;
        std::cout << "which quiz do you want to try \n      misc    math    gd    protobot    programming \n";
        std::cin >> whichquiz;

        if(whichquiz == "misc") {
            int miscCorrect;
            std::string correctAnswer;

            std::cout << "ok get ready... \n";

            std::cout << "question 1: \n what is the name of this executable? \n";
            std::string exename;
            std::cin >> exename;
            correctAnswer = "WhyAmIMakingCppFilesInProtoBotSmh or WhyAmIMakingCppFilesInProtoBotSmh.exe";

            if(exename == "WhyAmIMakingCppFilesInProtoBotSmh" || exename == "WhyAmIMakingCppFilesInProtoBotSmh.exe") {
                std::cout << "correct! \n";
                miscCorrect ++;
            } else {
                std::cout << "your answer is incorrect! \n the correct answer is: \n" << correctAnswer;
            }

            std::cout << "next question! \n";
            double years;
            correctAnswer = "9";
            std::cout << "question 2: \n how many years ago was 2012? \n";
            std::cin >> years;

            if(years == 9) {
                std::cout << "good job! \n";
                miscCorrect++;
            } else {
                std::cout << "your answer is incorrect! \n the correct answer is: \n" << correctAnswer;
            }

            std::cout << "next question! \n";
            std::cout << "question 3: \n ";
        }
    } else if (answer == "rng") {
        std::cout << "your random number is: " << RNG << std::endl;
    }
    return 0;
}
