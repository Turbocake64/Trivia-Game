# Trivia-Game

##Overview:

This web page is a ten question trivia game about Japan. 

![](trivia-start.gif)

There are a number of boxes that are hidden or shown as you start, finish, and reset the game. each of the ten questions is composed of a card with a picture, a question, and four multiple choice answer buttons that will deactivate when any of the four have been chosen and a point will be recorded for a correct guess. 

![](trivia-score.gif)

The score display will have a different message depending on if you scored high, average, or low.


##components used:
    html
    css
    bootstrap
    javascript
    jquery


Reflection:

Because I was underwhelmed with the look of my previous game, I focused a lot on the wireframe of this game to start. While I love how it looks in a medium sized screen, it is not ver responsive. I feel like I have the game working the way I want it to if you only play it once. Once you try to go back and play the game again without resetting it, we run into problems. The button in the modal doesn't work the way I want it to unless I coppied the code for the score button and made an entirely separate but identical block of code for it. I also couldn't get the buttons that toggled their color class to revert back to red to avoid signaling to the player which answers are right and which are wrong. Additionally, I did not get the timer to reset properly.


link: https://turbocake64.github.io/Trivia-Game/