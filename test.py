inputData = input("owHay Arenay Atemay?")

splittedData = inputData.split(" ")

result = []

def clusterfinder(word):
    """Takes an a word from a sentence as input, returns the position of first vowel"""
    vowel = ['a', 'i', 'u', 'e', 'o']
    _word = list(word.lower())
    for i in range(len(_word)):
        for j in range(len(vowel)):
            if _word[i] == vowel[j]:
                return i

def translator (inputList):
    """takes input, returns pig latinized version"""
    _input = inputList
    for i in range(len(_input)):
        cluster = clusterfinder(splittedData[i])
        if cluster == 0:
            result.append(splittedData[i] + "way") #sticks "way" on end of word if it begins with vowel, and puts it in result list
        else:
            newword = list(splittedData[i].lower()) #makes item from input list into a list of its own
            newerword = newword[cluster : ] +newword[0: cluster] + ["a","y"]#slices off letters until first vowel, sticks them on the end, and adds "ay"
            newestword = ''.join(newerword)# makes string from wordlist
            result.append(newestword)# adds the 'newestword' string to result
    print(' '.join(result))# turn result from list to string and print
translator(splittedData)
