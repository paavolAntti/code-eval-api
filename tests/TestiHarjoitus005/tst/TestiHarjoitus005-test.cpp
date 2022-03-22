#include "gtest/gtest.h"
#include "TestiFunktio.h"

TEST(Testipatteri1, Testi1) {
	EXPECT_EQ (TestiFunktio(14), false);
}
TEST(Testipatteri1, Testi2) {
	EXPECT_EQ (TestiFunktio(9), false);
}
TEST(Testipatteri1, Testi2) {
	EXPECT_EQ (TestiFunktio(12), true);
}
