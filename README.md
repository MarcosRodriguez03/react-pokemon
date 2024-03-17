Marcos Rodriguez
03/16/2024
react pokedex
I recreated the pokedex assignment in react using typescript. Everything matches whats needed in lms.


Peer review, Sebastian Breve-Sanchez: The website populates relavent data when a pokemon is called. However there are a couple issues. For the design, the favorites tab, search bar, and images aren't the same as the figma. Code-wise, there are many type: anys. Some variables don't need to be given types as they are inferred, but the rest should. Another problem is that the pokemon that first loads is rowlet. Good taste, but that is past generation 5, which ends at the ID number of 649, rowlet is 722. If you write out something that prevents a pokemon from loading if it's id is greater than 649, you won't have that issue. Same thing with the randomise function, its number is 151 when it should be 649.


-fixed suggested styling 
-went back and replaced type anys with the correct typescript
-maxes out at gen v
-fixed randomize