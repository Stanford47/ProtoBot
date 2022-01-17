#include <iostream>
#include <fstream>
#include <string>
#include <cmath>
#include <cstdlib>
#include <filesystem>

class easyFS {
    private:
        // simple "error handler" for debugging
        void eh() {
            std::cout << "there has been an error";
        }

    public:
        /**
         * @brief Get the path to current working file
         * 
         * @param file 
         * @return std::string 
         */
        std::string get_path() {
            std::filesystem::current_path();
        }
};