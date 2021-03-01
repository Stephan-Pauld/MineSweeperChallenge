# Installation

(if you dont care about adding score to the leaderboard and just want to play minesweeper skip step 1,3,4,5 and for step 6 run 'npm start' in the react folder)

1. MySql Server

     - [Install MySql - Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)

2. open the react folder and run `npm install`

3. open the server folder and run `npm install`

4. open the server>dbv>schema folder run mysql `sudo mysql` or however you have setup my sql.

5. with my sql open run `mysql> source high_score.sql`

6. Now to run the application! head to the server folder and run `npm start` this will load the react app and server.

7. HAVE FUN!


### Front-End
    - Material UI
    - React
    - Redux
    - Axios

### Back-end
    - MySql
    - NodeJS
    - Express


# About this project

This project was a coding challenge from a company I have been in conversationg with.

All the basic requirements of the challenge have been completed.
I was to use React with Redux, this was the first time I have used Redux.. Ive honestly been avoiding it until now and glad I push out because I LOVED IT. I can see many uses where I could have used Redux in other projects.

# Features

1. A set board currently 16X16 with 40 bombs

2. basic minesweeper mechanics such as showing how many bombs are adjacent to a specific tile.

3. Users can "Flag" tiles which blocks a tile from accidentally being clicked to "Flag" a bomb.

4. The amount of "Safe Tiles" are tracked when a user reveals ALL safe tiles the game is over and win condition met.

5. If a bomb is clicked... 💥💥💥 all bombs will be revealed and tiles can no longer be clicked.

6. If a user wins or blows up the win component will ask a user if they would like to submit their highscore which is stored in a mySQL database. Duplicate names are not allowed for spam reasons. It would be similar to an arcade game you get one shot at the name you like.

7. A simple REST API using Express. We have one get and one post request. The post checks first if that user is stored in the database. If so a user needs to pick a different name for their highscore.

# Goals

1. Code cleanup. Some of the functions checking for tiles are quite hard to read and a nightmare to debug..

2. Styling I would like to take some more time to make this look a bit nicer. I really was more concerned about functionality as of now. I want to theme this as a nuclear wasteland as the tiles to be sand and the bombs to be nukes.

3. Learn industry standard Redux. I really enjoyed Redux and absoloutely see its value. I will work with it more to see better ways of storing state.

4. Unit testing. I will probaly work on unit testing asap I just need to decide which testing framework leaning towards Mocha & Chai.


5. adding different board sizes/difficulties. This should not be a problem

6. Flag limiter - only allowing a certain amount of flags. As well add to the score for successfully flagged bombs.


# Screen Shots

![MineSweeperGif](https://raw.githubusercontent.com/Stephan-Pauld/MineSweeperChallenge/master/screenshots/Github.gif)

Empty Game
![Blank Board](https://github.com/Stephan-Pauld/MineSweeperChallenge/blob/master/screenshots/blankBoard.png?raw=true)

Used Field
![Playing](https://github.com/Stephan-Pauld/MineSweeperChallenge/blob/master/screenshots/field.png?raw=true)

GameOver
![game over](https://github.com/Stephan-Pauld/MineSweeperChallenge/blob/master/screenshots/gameover.png?raw=true)


staying organized
![trello](https://github.com/Stephan-Pauld/MineSweeperChallenge/blob/master/screenshots/trello.png?raw=true)



