# InstagramFirstCommenter
This is a bot that will make a comment on a post as soon as it is posted on instagram. Just follow the setup instructions and replace the dummy data by a valid instagram account data for it to work.
I created this to win tickets for [Vodafone Paredes de Coura](https://www.paredesdecoura.com/). Vodafone had an contest where they posted a total of 8 posts on their instagram page at random times of the day during 2 weeks, this first 10 people to comment those posts won 200 euros worth of tickets for their music festival. This bot did its job and won those tickets.

# Requirements
1 - A Windows, Mac or Linux Computer
2 - Google Chrome installed

# Setup
This bot is based on [protractor](https://www.protractortest.org/#/) automated browser testing software.
### 1 - Open a terminal an make sure you are in the project directory
	cd InstagramFirstCommenter

### 2 - Make sure you have protractor installed
To check if you have protractor installed run:

	protractor --version
If the output is something like this:

	Version 5.4.0
This means protractor is already installed, otherwise run the command:

	npm install -g protractor

### 3 - Install Selenium Webdriver
This is where your program will run, to install it simply execute the command:

	webdriver-manager

### 4 - Input valid instagram account credentials
For this bot to work you need to give it an instagram account for it to login into instagram. This can be your personal account, a friend's account or even create an account for this purpose, whatever. 
Go to the file spec.js  and change this code with your account login information:

	// My instagram user information
	const myUsername =  'myEmail@gmail.com';
	const myPassword =  'myPassword123';

### 5 - Choose the page you want to target
Again, go to spec.js and change this code with the information of the page you want to target, the current amount of posts it has and the comment you want to write:

	// Target page
	const targetURL =  'https://www.instagram.com/myTargetPage';
	var numberOfPostsOnTargetProfile =  69;
	const commentText =  'This is the comment I am posting';
	
Done, your bot is ready to roll.

# Running the bot

### 1 - Start the Selenium webserver
Open a terminal an make sure you are in the project directory:
	
	cd InstagramFirstCommenter
	
Update and start the server:

	webdriver-manager update
	webdriver-manager start
	
### 2 - Run the bot
With the previous terminal still open and running open another terminal an make sure you are in the project directory:
	
	cd InstagramFirstCommenter
	
Run the bot:

	protractor conf.js

# About the bot
The bot will login once into instagram and go to the target page.
It will then keep refreshing the page every 2.5 seconds while there is no new post.
Once there is a new post it will open said post and comment what you previously defined.
It will then keep refreshing the page until there is a new post and it will always comment that same text.
To stop the bot you can, in the bot's terminal, press Ctr+C and then y and the Enter. Or you can wait until it does all the iterations, by default it is set to 30000 iterations which is equivalent to aproximately 21 hours.
