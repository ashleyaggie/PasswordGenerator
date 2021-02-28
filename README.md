# PasswordGenerator

## Description

We were tasked with editing the JavaScript code we were given in order to create a website where the user could click a button and select some criteria to get a randomly generated password that followed the selected criteria.

It is important for a website to have user interactivity in order to dynamically update depending on user needs and also to help further promote whatever the website is providing. Not every person is the same, so each user is going to have different criteria for what they are needing from a website. This also helped us learn more about randomly selecting something using code, which can be important for a variety of things including games and providing information.

[Deployed Website] (https://ashleyaggie.github.io/PasswordGenerator/)

![Picture of the website default](/assets/images/website.png)

![Picture of the website during a confirm](/assets/images/website2.png)

## Changes Made

GIVEN I need a new, secure password

WHEN I click the button to generate a password

THEN I am presented with a series of prompts for password criteria

    * Created prompts using confirm to provide a pop-up on the window

WHEN prompted for password criteria

THEN I select which criteria to include in the password

    * User clicks OK or Cancel on confirm to select criteria

WHEN prompted for the length of the password

THEN I choose a length of at least 8 characters and no more than 128 characters

    * An if statement was used to check the password length was not too short or too long.

WHEN prompted for character types to include in the password

THEN I choose lowercase, uppercase, numeric, and/or special characters

    * Each confirm pop-up asked whether the user wanted one of these criteria until all were confirmed.

WHEN I answer each prompt

THEN my input should be validated and at least one character type should be selected

    * Used an if statement to confirm there was at least one type selected.

    * Depending on user choice, the program added the selected options to the array to pull from.

WHEN all prompts are answered

THEN a password is generated that matches the selected criteria

    * Using math.random, random characters are chosen from an array with the selected criteria.

WHEN the password is generated

THEN the password is either displayed in an alert or written to the page

    * Using join with no spaces to make a single phrase and return, the password is shown onscreen.\

## Credits

Website code was created as part of the SMU Coding Boot Camp

## License

Copyright (c) 2021 Ashley Wright

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.