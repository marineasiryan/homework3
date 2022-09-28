#include <iostream>
using namespace std;

  int string_l(char* str) {
           int i = 0;
           
		   while(*str != '\0') {
             i++;
             str++;
           }
        	 return i;
  }
	char* reverse (char* str) {
		for( int i = 0; i < string_l(str) / 2; ++i) {
			str[i] = str[i] ^ str[string_l(str) - 1 - i];
			str[string_l(str) - 1 - i] = str[i] ^ str[string_l(str) - 1 - i];
			str[i] = str[i] ^ str[string_l(str) -1 -i];
	}
		return str;

	}

	int main()
	{
		char k[] = "hello";
			cout<<reverse(k)<<endl;
      	return 0;
	}
