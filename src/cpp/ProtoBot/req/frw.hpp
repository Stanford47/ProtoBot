#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <any>

class fileManip {
    private:
        void errMabe() {
            std::cout << "Unable to open file";
        }

        int getFileLineLength(std::string file) {
            std::string line;
            std::ifstream da_file(file);
            int retInt;

            if (da_file.is_open()) {
                while (std::getline(da_file, line)) {
                    retInt = retInt++;
                }

                da_file.close();

                return retInt;
            } else {
                errMabe();
            }
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

        int fileLength(std::string file) {
            getFileLineLength(file);
        }

        std::vector<std::string> fileContent(std::string file) {
            std::string line;
            std::ifstream da_file(file);
            std::vector<std::string> retVect;

            if(da_file.is_open()) {
                while(std::getline(da_file, line)) {
                    retVect.push_back(line);
                }

                da_file.close();

                return retVect;
            } else {
                errMabe();
            }
        }
};