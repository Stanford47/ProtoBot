#include "pbcl.hpp"
#include <iostream>

int main()
{
    pb::fs::write_file("test.txt", "Hello World!");

    std::cout << pb::fs::read_file("test.txt") << std::endl;

    return 0;
}