## Tetris Javascript
In this project I have created a page to demonstrate my understanding of the concepts of *javascript* with a Tetris game. 

I approached this project with mobile first design principles to create a responsive webpage that is intended to look good and and perform well on any size of device. I have also put good user experience at the front and center of all designs and have strived to create an intuitive, informative and enjoyable journey for my users.

User Stories
I identified 2 groups of user for this site, firstly, users that are new to tetris and looking for fun and colourful experience. Secondly, experienced tertris players who are looking for a game that increases in difficulty over time testing their skill.
New Users
Should be able to quickly gain an overview of what the game is about via the landing page.
Should be able to see how to play the game via the how to tetris page.
Should be able to clearly understand the rules of the game via the rules page.
Should be able to gain higher levels of experience as the game progresses.
Should be able to get clear information of which tetrominoes are dropping next through the preview grid.
Should be able to identify which keys are pressed and interact with the controls on the page.
Existing Users
Should be able to do all the above.
Should be able to gain an high score and post that to the high scores page.
Should be able to experience a sense of nostaligia through classic tetris elements.
From the above information I was able to determine what would be of considerable value when visiting the site and from that developed the following scope and goals:

<!-- still to add -->

Features
Landing Page
Navigation Bar
Game Grid
Controls
Mini Grid
 
<!-- 
One of the key factors with the site is responsive design, and with the navbar this is carried through in the way in which it behaves on smaller screens, with it taking up 100% width and stacking for easier readability and an improved user experience that doesn't detract the focus away from the site. -->
 

Footer
The footer container social media links that open a new browser window to various tetris resources and groups such as wikipedia pages. There is also a floating "up" arrow to take users back to the top of the page without having to scroll up manually. The arrow was designed to incorporate the Tetris logo so as to help reinforce brand awareness with the user as they navigate through the site, on a more subconscious level.
 

Future Updates
A demo screen that automatically loops through to offer a visual demonstration of how to play the game. On starting the game, the grid is cleared and the player can begin.
A difficulty setting, so as to start from a more advanced state of the game, rather than having to iterate through beginner stages.
 

Testing 1.0
Throughout this project I have done regular testing. And have reloaded and refreshed the pages multiple times after each addition and modification. Various bugs were found in terms of images not diplaying correctly, positioning, buttons and links not working. Mostly through revision of the HTML and CSS course work and some external googling I was able to squash most bugs I encountered.

My first round of testing was functionality testing in which I performed the following actions.

Testing the Links
Checking the External Links such as Wikipedia, Home of the Underdogs and GOG
Checking the External Links all Open in the new Tab
Testing Internal Links to How to Tetris, Rules and High Scores, as well as the sub links such as #top
Testing the keyCodes
Testing the Start/Pause Button
Testing the Play/Mute Button
Validator Testing
Validating the HTML used in the site
Validating the CSS used in the site
Validating the JS used in the site

Validation results - W3C Validator
All pages where tested through the W3C html validator and passed. Links to the results for each page are as follows;
index.html Validation
instructions.html Validation
rules.html Validation
scores.html Validation
Validating the CSS in the site

Validation results - CSS Validator
All pages where tested through the W3C css validator and passed. Links to the results for each page are as follows;
tetris-javascript Validation
Site fluidity
To test the flow of the site I forwarded it on to my spouse and work colleagues. Grammarly was also used to test the various pages for any spelling and grammar errors.

Browser Compatibility
I tested the compatibility of my site first by by emulating different devices using the Dev tools in Chrome as well as using the variable responsive setting to check at different breakpoints.

The various tests that were run were:
checking to see if the all images and cards scaled and maintained aspect ratio as the display shrunk and grew.
checking to see if responsive elements within my layout changed at the correct breakpoints, such as the navbar and cards.
checking to see if my media queries behaved as expected with regards to cards displaying in columns or rows, navigation.
I then tested it on different browsers. I have tested in Chrome, Firefox and Edge. Once I was sure my project worked on windows 10, I then opened it on my phone running Safari on IOS 15.

Testing 2.0
My second round of testing involved accessibility and readability, checking the live site against various industry standards such as Eightshapes and Webaim to ensure a well thought out UX and UI.

Contrast Checker
The first port of call with regards to contrast was Eightshapes Contrast Grid so as to best understand the contrast between all the elements of the site, ensure fonts were readable against backgrounds and that font sizing was consistent to maintain accessibility.
The resulting output was the following Eightshapes - Yoga Republic
The site was tested using A11y colour contrast accessibility checker Contrast Checker to ensure maximum readability and accesibility.
A11y - 
The site was tested using WAVE, web accessibility evaluation tool Webaim to ensure accessibility criterea were met.
Lighthouse Scores
The site was tested for both mobile and desktop scores via Google Lighthouse with multiple tests being conducted.
index.html Lighthouse
instructions.html Lighthouse
rules.html Lighthouse
scores.html Lighthouse
For the most part pages consistently scored 0 for accessibility and SEO and 0 for performance and best practices.
AmIResponsive
The site was tested with the amireponsive tool to determine how well it would look on various outputs. AmIReponsive
 

Deployment
I have hosted my site on github pages, it can be accessed from the following url:
<!-- need to add more information to this area and explain the proccess in more detail -->


 

Credits
A big shout out to my mentor, Cans for guiding me through the process and offering assistance when neccessary to point me in the right direction.

The community on Slack, the help and feedback a student is able to receive from the peers and alumni is a really invaluable tool to have.



 

Content
Much of the information regarding Tetris, its styles and origins where taken from various wikipedia articles, old gaming sites:

Link to the Tetris wiki, full of inspiration [Tetris Wiki](https://en.wikipedia.org/wiki/Tetris)

The color was inspired by the old school bright neon colours and running various searches through google with the keyword Tetris and then further refined with the help of sites such as Color Space and Coolors

The fonts were acquired via Google Fonts

 

Media
The images used throughout the site were sourced from an open source gallery in Pexels. 

Icons used throughout the site for social media and card graphics were sourced from the free kit made available on Font Awesome

 

Other Resources
To better add to my understanding, markdown syntax was reseached from Markdown Syntax to aid in compiling and styiling this README document :)

While most programming happened at unsocialable hours, when I really got stuck the web is an invaluable resource too, I did a fair amount of review on W3 Schools, MDN Mozilla. As I often felt like I was traversing an alien world, I got my hands on reference books such as Javascript and JQuery: Interactive Front-End Web Development by Jon Duckett, Javascript: The Good Parts by Douglas Crockford and Eloquent Javascript, 3rd Edition by Marijn Haverbeke. 

 