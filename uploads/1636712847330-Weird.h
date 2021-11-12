#include <iostream>
#include <string.h>

std::string weirdAlgo(int n){
    std::string output = std::to_string(n);
    while (n != 1){
        if (n%2 != 0) {
            n = (n*3)+1;
 
        } else {
            n /= 2;
        }
        output += " " + std::to_string(n)
    }
    return output;
}