# Everyday Fun - Hacktoberfest 2020

<b>A simple NPM package which can return everyday quotes, jokes, riddles and interesting facts.<br></b>
<b>Click</b> [here](https://www.npmjs.com/package/everyday-fun) to view this package on <b>NPM</b> registry.

Everyone is encouraged to participate, regardless of your skill level as it is especially for first timers and beginners.
Use this project as a motivation to enter the world of Open Source Softwares.

## Installation
Make sure to [download and install Node.js](https://nodejs.org/en/download/).<br>
Now, install the node js module using the following command:<br>
```json
npm i everyday-fun
```

## Usage

```json
const all = require("everyday-fun");

console.log(all.getRandomQuote());

console.log(all.getRandomJoke());

console.log(all.getRandomRiddle());
```

- [ ] <b><i>getRandomQuote()</i></b> returns an object containing quote and author -<br>
```json
{
      "quote":"Don't cry because it's over, smile because it happened.",
      "author":"Dr. Seuss"
}
```
- [ ] <b><i>getRandomJoke()</i></b> returns an object containing body and category -<br>
```json
{
      "body":"Paddy and Mick were standing at a road junction,they spotted a truck carrying aload of rolled up lawn turfPaddy says to Mick \"aye thats what i,m going to do when I win the lottery\"Mick says \"whats that then Paddy?\"Paddy replies \"send my grass away forcutting\".",
      "category":"Men"
}
```
- [ ] <b><i>getRandomRiddle()</i></b> returns an object containing riddle and answer -<br>
```json
{
    "riddle": "Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still. ",
    "answer": "Teeth"
}
```

## Want to contribute?

>  Please find issues [here](https://github.com/NITJSR-OSS/EverydayFun/issues).

Expectation from you:

- [ ] Some basic Git knowledge.  

System requirements:

- [ ] Make sure node version 10 or higher is installed on your system.

- [ ] Make sure npm version 6.14.4 or higher is installed on your system.



## How to Contribute

  

>  *Note 1:* If you've never made a pull request before, or participated in an open-source project, we recommend taking a look at this [wonderful video tutorial](https://youtu.be/ZI2D0CI4TXs). And if you want a more complete tutorial on using github, creating branches etc. , [here's a detailed video series](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR).Once you've got your feet wet, you're ready to come back and dive into Hacktoberfest fun!

  

>  *Note 2:*  *Super Important* Only the pull requests created between October 1st, 2020 and October 31st, 2020 will be counted!

  
1. Star this repository. :stuck_out_tongue:

2. And then you have to fork (make a copy) of this repo to your Github account.

3. Clone (download) your fork to your computer.

4. Set your streams so you can sync your clone with the original repo (get the latest updates)

	- [ ] <code>git remote add upstream https://github.com/NITJSR-OSS/EverydayFun</code>

	- [ ] <code>git pull upstream master</code>

	- [ ] The above 2 commands will synchronize your forked version of the project with the actual repository.

5. Create a branch with your name (for e.g: if your name is Bruce Wayne, create a branch named `Bruce_Wayne`).

6. Make the changes in your branch.

7. Commit and push the code to YOUR fork.

8. Create a pull request to have the changes merged into the origin.
