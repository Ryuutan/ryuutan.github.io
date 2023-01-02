#include <iostream>
#include <string.h>

using namespace std;
string toBinaryString(string s)
{
    string temp;
    for (int i = 0; i < s.length(); i++)
    {
        for (int j = 0; j < 8; j++)
        {
            if ((s[i] & (0b10000000>>j))) temp+='1';
            else temp+='0';
        }
    }
    return temp;
}

char numToBase64Char(int num)
{
    string charlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    if (num >= 0 && num < 64)
    {
        return charlist[num];
    }
    
}
string toBase64(string s)
{
    string temp;
    string binaryForm = toBinaryString(s);
    int num = 0;
    int length = binaryForm.length();
    while (length%6 != 0)
    {
        length++; 
    }
    
    for (int i = 0; i <= length; i++)
    {   
        if(i%6 == 0 && i != 0)
        {
            temp += numToBase64Char(num);
            num = 0;
        }
        if(binaryForm[i] == '1') num += (1<<5-i%6);
    }

    while (temp.length() % 4 != 0) // 
    {
        temp += '=';
    }
    return temp;
}

int main()
{
    string test = "pan";
    //cout << toBinaryString(a) << '\n';
    cout << toBase64(test);
    return 1;
}