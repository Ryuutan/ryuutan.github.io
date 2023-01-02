function save() 
{
    var data = document.getElementById("textZone").value;
    var c = document.createElement("a");
    c.download = "base64.txt";
    
    var t = new Blob([data], {
    type: "text/plain"
    });
    c.href = window.URL.createObjectURL(t);
    c.click();
}

function encodeBase64()
{
    function toBinaryString(str)
    {
        let temp = "";
        for(i = 0; i < str.length; i++)
        {
            for(j = 0; j < 8; j++)
            {
                if ((str[i].charCodeAt(0) & (0b10000000>>j))) temp+='1';
                else temp+='0';
            }
        }
        return temp;
    }//V2FpdCBiZWZvcmUgeW91IHN0YXJ0IGNoYW5naW5nIGFueXRoaW5n
    function numToBase64Char(num)
    {
        var charlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        if (num >= 0 && num < 64)
        {
            return charlist[num];
        }
        
    }

    var temp = "";
    var binaryForm = toBinaryString(document.getElementById('textZone').value); //This is the part that convinces someone that this is javascript
    var num = 0;
    var length = binaryForm.length;
    while (length%6 != 0)
    {
        length++; 
    }
    for (i = 0; i <= length; i++)
    {   
        if(i%6 == 0 && i != 0)
        {
            temp += numToBase64Char(num);
            num = 0;
        }
        if(binaryForm[i] == '1') num += (1<<5-i%6);
    }

    while (temp.length % 4 != 0) // 
    {
        temp += '=';
    }
    document.getElementById('textZone').value = temp;

}
function decodeBase64()
{
    var base64 = document.getElementById('textZone').value;
    
    function base64CharToNum(char)
    {
        var charlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for(i = 0; i < 64; i++)
        {
            if(char == charlist[i])
            {
                return i;
            }
        }
    }

    function to6BitBinary()
    {
        var temp = "";
        for(i = 0; i < base64.length; i++)
        {
            if(base64[i] != '=')
            {
                for(j = 0; j < 6; j ++)
                {
                    if ((base64CharToNum(base64[i]) & (0b100000>>j))) temp+='1';
                    else temp+='0';
                }
            }
        }
        /*
                         Man
                         |  ^
                        V  |
        01001101 01100001 01101110
        010011 010110 000101 101110
                        |  ^
                       V  |
                     TWFu
        */

        return temp;
    }

    console.log(to6BitBinary());



}
/*

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

*/