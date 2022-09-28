#include <iostream>

using namespace std;

    int string_l(char* str){
          int i = 0;

           while(*str != '\0') {
            i++;
            str++;
       		 }
    	return i;
    }

	int main(){

    	char k[]="hello";
   		 cout<<string_l(k)<<endl;
    return 0;
}	
