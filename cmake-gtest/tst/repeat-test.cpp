#include "gtest/gtest.h"
#include "repeat.h"


TEST(WeirdTest, Test1) {
    EXPECT_EQ (Repeat("aaa"), 1);
}

TEST(WeirdTest, Test2) {
    EXPECT_EQ (Repeat("abcd"), 4);
}

TEST(WeirdTest, Test3) {
    EXPECT_EQ (Repeat("aybabtuaybabtu"), 7);
}
TEST(WeirdTest, Test4) {
    EXPECT_EQ (Repeat("abcabca"), 7);
}
TEST(WeirdTest, Results) {
    std::cout << "[----------] Test1 EXPECTED OUTPUT WITH INPUT aaa: 1\n";
    std::cout << "[----------] Test2 EXPECTED OUTPUT WITH INPUT abcd: 4\n";
    std::cout << "[----------] Test3 EXPECTED OUTPUT WITH INPUT aybabtuaybabtu: 7 1\n";
}
