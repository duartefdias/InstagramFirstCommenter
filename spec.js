
// This bot will post a predefined comment as fast as possible to a new post on the target profile
describe('Instagram fast commenter', function() {

  // Edit the information bellow!
  // Target page
  const targetURL = 'https://www.instagram.com/myTargetPage';
  // You need to change this information before running the script!
  var numberOfPostsOnTargetProfile = 69;
  const commentText = 'This is the comment I am posting';
  // My instagram user information
  const myUsername = 'myEmail@gmail.com';
  const myPassword = 'myPassword123';
  // Number of times the page should refresh
  // Each iteration takes around 2.5 seconds
  // Recommended value: 30000
  // 30000 iterations take aproximately 21 hours to complete ((2.5*30000)/3600) = 20.88 hours
  var numberOfIterations = 30000;

  // Do not edit the information bellow!
  var numberOfCommentsPosted = 0

  // This code runs once for loging into your account
  browser.driver.get('https://www.instagram.com/accounts/login/');
  browser.driver.sleep(1000);
  browser.driver.findElement(by.css('[name="username"]')).sendKeys(myUsername);
  browser.driver.findElement(by.css('[name="password"]')).sendKeys(myPassword);
  browser.driver.findElement(by.xpath('//*[@id="react-root"]/section/main/div/article/div/div[1]/div/form/div[4]/button')).click();
  browser.driver.sleep(2000);
  browser.driver.get(targetURL);
  browser.driver.sleep(2000);

  // Main function that runs in loop
  function instaAutoCommenter(numberOfIterations){
    it('should win me a ticket for that cool music festival', function() {

      browser.driver.findElement(by.xpath('//*[@id="react-root"]/section/main/div/header/section/ul/li[1]/span/span')).getText().then( (numberOfPostsString) => {
        // Log run information at each interation
        console.log('\nCurrent iteration: ' + (30000 - numberOfIterations) + ' / 30 000');
        console.log('Number of comments posted: ' + numberOfCommentsPosted);
        console.log('Current number of posts on page: ' + numberOfPostsString);

        // Convert value of posts on target profile from string to int
        var numberOfPostsInt = numberOfPostsString.replace('.','');
        numberOfPostsInt = parseInt(numberOfPostsInt, 10);

        if(numberOfPostsInt != numberOfPostsOnTargetProfile){
          browser.driver.sleep(1500);
          browser.driver.findElement(by.css('._9AhH0')).click();
          browser.driver.sleep(1500);
          browser.driver.findElement(by.css('.Ypffh')).click();
          browser.driver.sleep(200);
          browser.driver.findElement(by.css('.Ypffh')).sendKeys(commentText);
          browser.driver.findElement(by.css('.Ypffh')).sendKeys(protractor.Key.ENTER);
          browser.driver.sleep(2000);
          numberOfPostsOnTargetProfile++;
          numberOfCommentsPosted++;
        }
        browser.driver.sleep(2500);
        browser.driver.get(targetURL);

      });

    });
  }

  // Very long loop
  while(numberOfIterations > 0){
    instaAutoCommenter(numberOfIterations);
    if(numberOfIterations != 0){
      numberOfIterations--;
    }
  }

});
