# Pseudocode

## Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password

THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria

THEN I select which criteria to include in the password
WHEN prompted for the length of the password

THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password

THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt

THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered

THEN a password is generated that matches the selected criteria
WHEN the password is generated

THEN the password is either displayed in an alert or written to the page

## Click Event

User clicks 'Generate Password'

## Password Length Prompt

Prompt Text -> 'How many characters would you like your password to have? Please choose a range of 8 to 128 characters.'

Make sure to confirm that the value entered by the user is 8 to 128 characters and alert the user to try again if it isn't.

Alert Text -> 'Character ranges must be withing 8-128 characters. Please try again.'

Store the user's answer as a numeric variable so that it can be used later in 'for loop' that generates the password.

## Password Criteria

Create arrays for lowercase, numeric, & special character types (use toUpper() on lowercase for upper case array.)

_confirm: you will need to chose at least one character type for your password_
if: yes -

- confirm for lowercase
- store answer as boolean variable
- confirm for uppercase
- store answer as boolean variable
- confirm numeric
- store answer as boolean
- confirm special
- store answer as boolean

_at end of confirms, validate at least 1 true_
_if all false, return message you must select at least one special character type_

## using if, elseif evaluate returned booleans to concatenate selected arrays.

## using for loop with Math.floor(Math.random) for entered length. use push() to store result of each loop to new array.

## convert password array to string using .join();

## place password into html element with getElementById & .textContent
