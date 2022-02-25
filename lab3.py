
m = 4096
def Gamma():
    gamma_list = [0] * 8
    gamma_list[0] = 565;
    gamma_list[1] = 580;
    
    for i in range(1,8):
        gamma_list[i] = (gamma_list[i-1] + gamma_list[i-2]) % m
    return gamma_list


def encrypt( str ):

    encript_str = ""
    gamma = Gamma()
    cnt = 0;
    for letter in str:
        encript_str += chr( ord(letter) ^ gamma[cnt]  )
        cnt+=1
        
    return  encript_str    

strg = "kek"
key  = 8
print( "Сообщение:\t", strg )
encr_strg = encrypt( strg ) 
print( "Зашифрованное:\t", encr_strg )
print( "Расшифрованное:\t", encrypt( encr_strg ) )
