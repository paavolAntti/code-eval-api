#include <iostream>
#include <math.h>
 
using namespace std;
// Forward declarations
void search(long k, long n, long sum, long total, long choice[], long t[]);
// Global variables
long result = 0;
long m = 1000000007;
int main() {
    long n = 100;
    long total = (n*(n+1))/2;
    if (total % 2 != 0) {
        cout << 0 << "\n";
    } else {
        total /= 2;
        long t[n];
        long choice[n];
        for (long i = 0; i < n; i++){
            t[i] = i+1;
        }
        search(0, n, 0, total, choice, t);
        cout << result/2 << "\n";
    }
}
 
// Function implementations
void search(long k, long n, long sum, long total, long choice[], long t[]) {
    if (k == n) {
        //cout << "summa: " << sum << "\n";
        if (sum == total) {
            result++;
        }
    } else {
        choice[k] = 0;
        search(k+1, n, sum, total, choice, t);
        choice[k] = 1;
        sum += t[k];
        sum %= m;
        search(k+1, n, sum, total, choice, t);
    }
}
