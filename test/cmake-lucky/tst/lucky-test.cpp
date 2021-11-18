#include "gtest/gtest.h"
#include "lucky.h"


TEST(LuckyTest, Test1) {
    EXPECT_EQ (Lucky(14), false);
}

TEST(LuckyTest, Test2) {
    EXPECT_EQ (Lucky(16), true);
}

TEST(LuckyTest, Test3) {
    EXPECT_EQ (Lucky(123), false);
}
TEST(LuckyTest, Test4) {
    EXPECT_EQ (Lucky(777), true);
}
TEST(LuckyTest, Results) {
    std::cout << "[----------] Test1 EXPECTED OUTPUT WITH INPUT 14: false\n";
    std::cout << "[----------] Test2 EXPECTED OUTPUT WITH INPUT 16: true\n";
    std::cout << "[----------] Test3 EXPECTED OUTPUT WITH INPUT 123: false\n";
    std::cout << "[----------] Test4 EXPECTED OUTPUT WITH INPUT 777: true\n";
}
