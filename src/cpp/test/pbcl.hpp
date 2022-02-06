#include <bits/stdc++.h>

#ifndef std
#include <stdio.h>
#include <stdlib.h>
#endif

namespace PBR
{
    namespace FS
    {
        struct fileManip
        {
        private:
            void errMabe()
            {
                std::cout << "Unable to open file";
            }

            int getFileLineLength(std::string file)
            {
                std::string line;
                std::ifstream da_file(file);
                int retInt;

                if (da_file.is_open())
                {
                    while (std::getline(da_file, line))
                    {
                        retInt = retInt++;
                    }

                    da_file.close();

                    return retInt;
                }
                else
                {
                    errMabe();
                }
            }

        public:
            std::string getLine(std::string file)
            {
                std::string line;
                std::ifstream da_file(file);
                std::string retStr;

                if (da_file.is_open())
                {
                    std::getline(da_file, line);

                    retStr = line;

                    da_file.close();

                    return retStr;
                }
                else
                {
                    errMabe();
                }
            }

            int fileLength(std::string file)
            {
                getFileLineLength(file);
            }

            std::vector<std::string> fileContent(std::string file)
            {
                std::string line;
                std::ifstream da_file(file);
                std::vector<std::string> retVect;

                if (da_file.is_open())
                {
                    while (std::getline(da_file, line))
                    {
                        retVect.push_back(line);
                    }

                    da_file.close();

                    return retVect;
                }
                else
                {
                    errMabe();
                }
            }
        };
    }
    namespace SEC
    {
        struct security
        {
        public:
            void encrypt(const char *key)
            {
                // convert string to bitset
                std::vector<std::bitset<8>> key_bits;

                for (unsigned long long i = 0; i < strlen(key); i++)
                {
                    key_bits.push_back(std::bitset<8>(key[i]));
                }

                //print bitset
                for (unsigned long long i = 0; i < key_bits.size(); i++)
                {
                    std::cout << key_bits[i] << " " << std::endl;
                }

                // split bitset elements into two parts
                std::vector<std::string> key_bits_str;
                std::vector<std::string> key_bits_str_spl;

                /* converting bitset to string */
                for (unsigned long long i = 0; i < key_bits.size(); i++)
                {
                    key_bits_str.push_back(key_bits[i].to_string());
                }


                for (unsigned long long i = 0; i < key_bits_str.size(); i++)
                {
                    key_bits_str_spl.push_back(key_bits_str[i].substr(0, 4));
                    key_bits_str_spl.push_back(key_bits_str[i].substr(4, 4));
                }

                //convert string to int
                std::vector<int> key_bits_int;

                for(unsigned long long i = 0; i < key_bits_str_spl.size(); i++) 
                {
                    key_bits_int.push_back(std::stoi(key_bits_str_spl[i]));
                }

                for (unsigned long long j = 0; j < key_bits.size(); j++)
                {
                    std::cout << key_bits_int[j] << " ";
                }
            }
        };
    }
}
