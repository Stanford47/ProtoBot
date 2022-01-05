#include <iostream>
#include <fstream>
#include <string>
#include <vector>

class fileManip {
    private:
        void errMabe() {
            std::cout << "Unable to open file";
        }

    public:
        std::string getLine(std::string file) {
            std::string line;
            std::ifstream da_file(file);
            std::string retStr;

            if(da_file.is_open()) {
                std::getline(da_file, line);

                retStr = line;

                da_file.close();

                return retStr;
            } else {
                errMabe();
            }
        }
};