#include <stdio.h>

void check_for_checker_ignore() {
    FILE *cINIT;

    if(cINIT = fopen("checker.ignore.toaster", "r")) {
        fclose(cINIT);

        printf("ignore file exists.\n reading files...\n");
    } else {
        printf("no ignore file found.\ncreating file...\n");

        for(short i = 0; i < 4; i++) {
            FILE *new_init_file = fopen("checker.ignore.toaster", "w");

            if(new_init_file = NULL) {
                printf("error creating file.\ntrying again...\n");

                if(i == 3) {
                    printf("stopping execution.\n");
                    exit(1);
                }
            } else {
                printf("file created.\n");
                check_for_checker_ignore();
            }
        }
    }
}

