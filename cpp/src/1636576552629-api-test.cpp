#include <iostream>
#include <algorithm>
#define long long long
 
int main(){
    long n = 4;

    long t[n] = {2, 1, 4, 3};
    
    std::sort(t, t+n);
    long min_sum = 1;
    for (long i = 0; i < n; i++){
        if(t[i] > min_sum){
            std::cout << min_sum;
            return 0;
        }
        min_sum += t[i];
    }
    std::cout << min_sum;
    return 0;
}