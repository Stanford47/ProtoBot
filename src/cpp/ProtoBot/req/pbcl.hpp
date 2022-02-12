#include <bits/stdc++.h>

namespace pb 
{
    namespace fs 
    {
        // Write file 
        void write_file(const char *path, const char *data)
        {
            FILE *file = fopen(path, "w");
            fprintf(file, "%s", data);
            fclose(file);
        }

        // Append File
        void append_file(const char *path, const char *data)
        {
            FILE *file = fopen(path, "a");
            fprintf(file, "%s", data);
            fclose(file);
        }

        // Unlink/Delete File
        void unlink(const char *path)
        {
            #ifdef _WIN32
                _unlink(path);
            #else
                unlink(path);
            #endif
        }

        // Read File
        std::string read_file(const char *path)
        {
            std::string data;
            FILE *file = fopen(path, "r");

            if (file)
            {
                fseek(file, 0, SEEK_END);

                unsigned long long size = ftell(file);

                fseek(file, 0, SEEK_SET);

                char *buffer = new char[size + 1];

                fread(buffer, 1, size, file);
                buffer[size] = '\0';

                data = buffer;

                delete[] buffer;

                fclose(file);
            }

            return data;
        }

        // Get File Size
        unsigned long long get_file_size(const char *path)
        {
            unsigned long long size = 0;
            FILE *file = fopen(path, "r");

            if (file)
            {
                fseek(file, 0, SEEK_END);

                size = ftell(file);

                fclose(file);
            }

            return size;
        }
    }

    namespace security
    {
        std::string encrypt(const char *key)
        {

        }
    }
}