time = input("Please enter a 6-digit number to be converted into HH:MM:SS format: ")

hours = time[0:2] #grabs index 0 and 1
minutes = time[2:4] #grabs index 2 and 3
seconds = time[4:6] #grabs index 4 and 5

print(f"{hours}:{minutes}:{seconds}")