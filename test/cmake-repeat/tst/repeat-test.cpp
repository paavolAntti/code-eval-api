#include "gtest/gtest.h"
#include "repeat.h"


TEST(RepeatTest, Test1) {
    EXPECT_EQ (Repeat("aaa"), 1);
}

TEST(RepeatTest, Test2) {
    EXPECT_EQ (Repeat("abcd"), 4);
}

TEST(RepeatTest, Test3) {
    EXPECT_EQ (Repeat("aybabtuaybabtu"), 7);
}
TEST(RepeatTest, Test4) {
    EXPECT_EQ (Repeat("abcabca"), 7);
}
TEST(RepeatTest, Results) {
    std::cout << "[----------] Test1 EXPECTED OUTPUT WITH INPUT aaa: 1\n";
    std::cout << "[----------] Test2 EXPECTED OUTPUT WITH INPUT abcd: 4\n";
    std::cout << "[----------] Test3 EXPECTED OUTPUT WITH INPUT aybabtuaybabtu: 7\n";
    std::cout << "[----------] Test4 EXPECTED OUTPUT WITH INPUT abcabca: 7\n";

}
