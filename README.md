# Password Generator

## Description

Users can utilize this tool to quickly generate secure passwords for various online accounts, enhancing the security of their accounts.


The JavaScript code handles the logic behind generating random passwords and updating the password display areas.

## Functionality

Character variable: A character set containing uppercase letters, lowercase letters, digits, and special characters is defined.

Password Length: The length of the password is set to 12 characters.

Functions:

	getcharacters(): This function randomly selects a character from the predefined character set

    generateRandomPassword (): This function generates a random password by repeatedly calling getCharacters() to build a string of characters with the desired length
    
    create(): This function is triggered when the "Generate passwords" button is clicked. It generates two random passwords and updates the display areas with the generated passwords.
