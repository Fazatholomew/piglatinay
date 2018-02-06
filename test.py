inputData = input("owHay Arenay Atemay?")

splittedData = inputData.split(" ")

result = []

def clusterfinder(word):
    vowel = [a, i, u, e, o]
    _word = list(word.lower())
    for i in range(len(_word)):
        for j in range(len(vowel)):
            if _word[i] == vowel[j]:
                return i

def translator (inputList):
    _input = inputList
    for i in range(len(_input)):
        cluster = clusterfinder(splittedData[i])
        if cluster == 0:
