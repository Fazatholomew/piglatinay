"""
	piggy.py
"""
"""
def ValidChars():
	letters = []
	for i in range(65,91): #caps
		letters.append(chr(i))
	for i in range(97,123): #lowercase
		letters.append(chr(i))
	for i in range(192,384): #extra letters
		if i in [215,247,329]:
			pass
		else:
			letters.append(chr(i))

	vowels = 	[	65,69,73,79,85,
					97,101,105,111,117,

					192,193,194,195,196,197,198,
					200,201,202,203,
					204,205,206,207,
					210,211,212,213,214,216,
					217,218,219,220,

					224,225,226,227,228,229,230,
					232,233,234,235,
					236,237,238,239,
					242,243,244,245,246,248,
					249,250,251,252,

					256,257,258,259,260,261,
					274,275,276,277,278,279,280,281,282,283,
					296,297,298,299,300,301,302,303,304,305,306,307,
					332,333,334,335,336,337,338,339,
					360,361,361,362,363,364,365,366,367,368,369,370,371
				]

	for i in range(len(vowels)):
		vowels[i] = chr(vowels[i])

	return letters, vowels

#global constants
g_letters, g_vowels = ValidChars()
infile = open("pigin.txt",encoding="utf-8")
outfile = open("pigout.txt","w",encoding="utf-8")
"""

class Word(object):
	def __init__(self,word=""):
		self.word = word
		self.cases = self.case_list(self.word)
		self.classes = self.class_list(self.word)
		self.latin = self.check_latin()
		self.list = list(self.word)
		self.pigword = self.translate(self.word)
	def __str__(self):
		return self.word

	def case_list(self,word):
		list = []
		for letter in self.word:
			if letter.isupper() == True: list.append(1)
			elif letter not in g_letters: list.append(2)
			else: list.append(0)

		return list

	def class_list(self,word):
		list = []
		for letter in word:
			if letter in g_vowels: list.append(1)
			else: list.append(0)
		return list

	def translate(self,word,start='',srcend='',end=''): #convert text to Pig Latin
		if not self.latin:
			return word

		if not word:
			return word

		if word[-1] not in g_letters: #check for leading punctuation
			newword = word[:-1]
			self.cases.pop(-1)
			return self.translate(newword,start,srcend,end + word[-1]) #check for trailing punctuation
		if word[0] not in g_letters:
			newword = word[1:]
			self.cases.pop(0)
			return self.translate(newword,start + word[0],srcend,end)


		if word[0] not in g_vowels: #check for leading consonants and separate them from the list
			newword = word[1:]

			self.classes.append(self.classes[0])
			self.classes.pop(-2)
			return self.translate(newword,start,word[0] + srcend,end)
		elif self.classes[-1] == 0:
			pl_list = list(word)
			appendage = "ay"

		elif self.classes[-1] == 1:
			pl_list = list(word)
			appendage = "way"

		pl_list.append(appendage)
		pl_list.insert(-1,srcend[::-1])

		if 0 not in self.cases and len(self.cases) > 1: #match the case pattern to the original word
			for i in range(len(pl_list)):
				pl_list[i] = pl_list[i].upper()
		else:
			for u in range(len(pl_list)):
				if u < len(self.cases):
					if self.cases[u] == 1:
						pl_list[u] = pl_list[u].upper()
					else: pl_list[u] = pl_list[u].lower()
				else:
					pl_list[u] = pl_list[u].lower()




		pl_list.insert(0,start)
		pl_list.append(end[::-1])
		pigword = "".join(pl_list)
		return pigword


	def check_latin(self):
		latin = False
		list = []
		for letter in self.word:
			if letter in g_letters: list.append(1)
			else: list.append(0)
		if 1 in list:
			latin = True
		return latin

def GetText():
	"""Get text from user."""

	result = infile.read()
	return str(result)

def ToWords(text):
	"""Break text into words."""
	words = text.split()
	return words

def Translate():
	"""Return Pig Latin transltion of word."""
	text = GetText()
	words = ToWords(text)
	pl_words = []
	for w in words:
		pl_words.append(Word(w).pigword)
	pl_text = " ".join(pl_words)
	return pl_text


def main():
	print ("~ Pig Latin ~")
	pl_text = Translate()
	outfile.write(pl_text)
