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

