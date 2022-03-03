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

