sentence = input("Please write a sentence in here:\n")

sentenceNoRandomSpaces = sentence.strip()
sentenceWords = sentence.split(" ")

letters = 0
words = 0

for letter in sentenceNoRandomSpaces:
    if letter == " ":
        continue
    letters += 1

for word in sentenceWords:
    words += 1

print(f"The amount of words in your given sentence is {words}, and the amount of letters (and/or special characters) is {letters}")