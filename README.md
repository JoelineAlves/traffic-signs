# Traffic Signs

![Traffic Signs  mockup images](assets/readme_images/mockup.png)

Traffic Signs is a basic card matching game that tests players' visual memory and familiarity with traffic signs. It's a quick and easy method for players to pass the time and have fun.

The game contains a table with 16 cards. The objective of the game is to try to find the combination of cards, there will be a scoreboard that shows the number of combinations found, there will also be a timer counting down the game time. Try to memorize as much as you can. Observe the card presented and memorize the location of each traffic sign.

Once every combination has been discovered, an alert detailing the time and the quantity of combinations detected will be shown to you.

# Rules of the Game:

You will start by turning over a card
- If the next card you turn over is the same as the first, these cards will be disabled
- If the next card you turn over is not the same as the first, the cards will be turned back
- The game continues until you match all the cards on the board.
- You will get an alert with the timer and the total number of combinations made once you have found them all.


Visit the deployed website [here](https://joelinealves.github.io/traffic-signs/).

## Table of Contents

- [Traffic Signs](#traffic-signs)
  - [Table of Contents](#table-of-contents)
  - [User Experience (UX)](#user-experience-ux)
    - [Project Goals](#project-goals)
    - [User Stories](#user-stories)
    - [Color Scheme](#color-scheme)
    - [Typography](#typography)
    - [Wireframes](#wireframes)
  - [Features](#features)
    - [Additional features to be implemented](#additional-features-to-be-implemented)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
  - [Testing](#testing)
    - [Testing User Stories](#testing-user-stories)
    - [Example message received using template fields in Email JS](#example-message-received-using-template-fields-in-email-js)
    - [Code Validation](#code-validation)
    - [Accessibility](#accessibility)
    - [Tools Testing](#tools-testing)
    - [Automated Testing (TDD)](#manual-testing-(tdd))
    - [Manual Testing (BDD)](#manual-testing-(bdd))
  - [Finished Product](#finished-product)
  - [Deployment](#deployment)
    - [GitHub Pages](#github-pages)
    - [Forking the GitHub Repository](#forking-the-github-repository)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Code](#code)
  - [Acknowledgements](#acknowledgements)

***

## User Experience (UX)

### Project Goals

The main objective of this project is to provide our target audience with an integrated, simplified and appealing user experience.
Our goal is to provide an easy-to-use application that meets all user needs.

- Increase user interest in understanding and knowing how to differentiate different traffic signs

- Provide the user with useful in-game tools to make the game more accessible.

- Give users the opportunity to learn and familiarize themselves with traffic signs.

-Give users the opportunity to contact the game developer if they have any questions.

### User Stories

- As a user, i want to have fun playing the game.

- As a user, i want the game to be instructive and graphically appealing..

- As a user, I want to develop memory and concentration skills.

- As a user, I want you to count the score of the combinations found.

- As a user, I want to be able to restart the game.

- As a user, I want to be able to get in touch with the developers of future games.

- As a user, I want to be able to browse the website on all devices (mobile, tablet, desktop).

- As a user, I want the card orders to be randomly generated when i restart the game.

### Color Scheme

![Color scheme image](assets/readme_images/scheme_color.png)

The site's colors are FireBrick in rgb format rgb(178, 34, 34) for the background of the scoring time, number of combinations, on the buttons and also as the background of the cards, also used in modal form, white also in rgb format rgb(255, 255, 255) with the purpose of focusing on the buttons, used in the modal form and also part of the card's background design.
Lastly, the titles above the card grid, buttons, card border, scoring time, and number of combinations are all black, similarly formatted as rgb(0, 0, 0). These colors were selected for excellent readability and user perception, as well as attracting more attention from website visitors.

### Typography

The main font used on the site is Poppins, with Sans Serif as a fallback font if Poppins is not importing correctly. I decided to use just one font.

### Wireframes

[Figma](https://www.figma.com/) has been used to showcase the appearance of the site and display the placement of the different elements whitin the pages.

I am familiar with Figma so I had no problems building my wireframes.

Mobile ![View](assets/readme_images/mobile_wireframe.jpeg)

Small-Screen ![View](assets/readme_images/smallscreen_wireframe.jpeg)

Desktop Wireframe ![View](assets/readme_images/desktop_wireframe.jpeg)

[Back to top ⇧](#traffic-signs)

### Features

- A board with 16 cards that can be turned over by clicking on up to two cards at the same time, If the cards do not match, they will be turned over again.

- The cards become disabled and cannot be selected again if two of the selected cards match.

- A score timer is included in the game to keep track of the amount of time spent playing and the total number of combinations made.

- The option to restart the game.

- The ability to send comments for improvements and future advancements to the game creator through message.

- Work in various browsers on desktop and mobile screens.

- A shuffled card display at reset.

### Additional features to be implemented

- Add a 404 page for users who link to a non-existent page or resource.
- Add an incorrect combination counter.

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Programs Used

- [Google Fonts](https://fonts.google.com/)
  - Google Fonts was used to import the Poppins font into the style.css file. This font was used throughout the site.

 [jQuery](https://jquery.com/)
    - jQuery was used for modal functionality. 

 [EmailJS](https://www.emailjs.com/)
    - Enables email sending straight from JavaScript without the need for backend development.

[Photoshop](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to create the images cards, resizing and editing photos.

[Illustrator:](https://www.adobe.com/ie/products/illustrator.html)
    - Photoshop was used to create the images cards, resizing and editing photos.       

- [Codeanywhere](https://codeanywhere.com/)
  - Codeanywhere was used for writing code, committing, and then pushing to GitHub.

  - [Visual Studio](https://visualstudio.microsoft.com/) Visual studio was helpful when I had to switch to VScode to finish my code because codeanywhere wasn't working.

  - [GitHub Desktop](https://desktop.github.com/) GitHub Desktop was used to run git commands, such as commit and push changes without using the command line.

- [GitHub](https://github.com/)
  - GitHub was used to store the project after pushing.

- [Figma](https://www.figma.com/)
  - Figma was used to create the wireframes during the design phase of the project.

[Back to top ⇧](#traffic-signs)

## Testing

### Testing User Stories

- As a user, I would like to

  - Play a memory game that is visually engaging and educational by showing the different traffic signs.
  In order to make the game appealing and enjoyable for users who are still learning traffic signs, I have produced a collection of images of traffic signs. You can view the images in the folder. [here](assets/images/).

  - effortlessly comprehend the rules of the game:
   Direct instructions for the game are located above the picture grid.

![View](assets/readme_images/rules_game.png)

  - notice the progress:
Every time there is a match, the user is rewarded with a point on the scoreboard, and you are shown a timer that shows the current game time.

![View](assets/readme_images/score_timer.png)

- anytime you like, you can restart the game:
Using the Reset Game button, the player can restart the game at any time while it is in progress.

- users should be aware that the game enhances concentration, comprehension, and the ability to recognise different traffic signs:
The images in the game are randomly arranged, so the user cannot guess where the appropriate images will appear. Restarting the game and trying it again is really easy.

- as a game user you will have the option to send an email to the game developer:
This functionality uses the EmailJS JavaScript library. A JavaScript tool called EmailJS makes it possible to send emails entirely client-side. You can create and send an email template without using server code by connecting to your preferred email provider, such as Gmail. Users are prompted to fill in any required blanks on input forms. The user receives a pop-up notification after submitting the form stating that the developer will contact them shortly and that the email has been received.

![View](assets/readme_images/form_modal.png)

### Example message received using template fields in Email JS

![Email from Email JS](assets/readme_images/emailjs.png)

### Code Validation

- HTML validation
![W3C Markup Validator](assets/readme_images/html_validator.png)

- CSS Validation
![W3C CSS Validator](assets/readme_images/css_validator.png)

- JS Validation
![JS Hint](assets/readme_images/js_validator.png)

### Accessibility

- Used Lighthouse in Chrome DevTools to confirm that the colors and fonts being used in throughout the website are easy to read and accessible.

- Lighthouse reports
![Lighthouse report for Traffic Signs](assets/readme_images/lighthouse_report.png)

### Tools Testing

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

  - Chrome DevTools was used during the development process to test, to explore and modify HTML elements, CSS styles and Java Script used in the project. Also Chrome DevTools was used to test responsiveness in different screen sizes during the development process.

- Responsiveness

  - [Am I Responsive?](http://ami.responsivedesign.is/#) was used to check responsiveness of the site pages across different devices.

  - [Responsive Design Checker](https://www.responsivedesignchecker.com/) was used to check responsiveness of the site pages on different screen sizes.

### Automated Testing (TDD)

- Code is a useful tool for testing code. This is superior to the manual testing method in several aspects. A project can quickly run hundreds of tests, and because programmers often write tests as they are developed, flaws are found early on. The ideal testing approach combines automated and user testing, since automated testing does not also test the user experience.

- Jest testing is the process of developing tests that we know will fail and then writing just enough code to pass them while keeping the tests compatible with each other. This cycle is known as Red-Green-Refactor.

- I made the decision to save the automated tests for later use in my project rather than implementing them now.

### Manual Testing (BDD)

- Browser Compatibility

  - The website has been tested on the following browsers:

    - **Goolgle Chrome**

        No appearance, responsiveness nor functionality issues.

    - **Safari**

        No appearance, responsiveness nor functionality issues.

    - **Microsoft Edge**

        No appearance, responsiveness nor functionality issues.

    - **Mozilla Firefox**

        No appearance, responsiveness nor functionality issues.

- Device compatibility

  - The website has been tested on multiple devices, including:

    - **iPhone SE"**

        No appearance, responsiveness nor functionality issues.

    - **iPhone XR**

        No appearance, responsiveness nor functionality issues.

    - **iPad**

        No appearance, responsiveness nor functionality issues.

    - **iPhone 11**

        No appearance, responsiveness nor functionality issues.

    - **iPhone 14 Pro**

        No appearance, responsiveness nor functionality issues.

    - **ASUS VivoBook**

        No appearance, responsiveness nor functionality issues.

    - **MacBook Pro 15"**

        No appearance, responsiveness nor functionality issues.

   - Common Elements Testing

    - **CONTACT US**

      - Clicking on the Contact us button will open a modal form with the necessary fields to contact the developer.

    - **Board Cards**

      - Clicking on the cards on the board will flip the cards, and by flipping the cards you will have to find all the combinations. 

    - **Reset Game**

      - Clicking on the Reset Game button, the game will restart again.
  

[Back to top ⇧](#traffic-signs) 

## Finished Product

Finished Product ![View](assets/readme_images/finish_product.png)

[Back to top ⇧](#traffic-signs)

## Deployment

- This website was developed using [Codeanywhere](https://codeanywhere.com/) where I wrote all of the code for the traffic signs, committed it, and uploaded it to [GitHub](https://github.com/).

- [Visual Studio](https://visualstudio.microsoft.com/) Visual studio was helpful when I had to switch to VScode to finish my code because codeanywhere wasn't working.

- [GitHub Desktop](https://desktop.github.com/) GitHub Desktop was used to run git commands, such as commit and push changes without using the command line.

### GitHub Pages

- Here are the steps to deploy this website to GitHub Pages from its GitHub repository:

    1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).

    2. At the top of the Repository, locate the Settings button on the menu.

        - Alternatively click [here](https://raw.githubusercontent.com/) for a GIF demostration of the process.

    3. Scroll down the Settings page until you locate the Pages section.

    4. Under Source, click the dropdown called None and select Master Branch.

    5. The page will refresh automatically and generate a link to your website.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

[Back to top ⇧](#traffic-signs)

## Credits

### Content

- All content was written by the developer.

### Media
  
- [Google](https://www.google.com/)

   - Card image: "bike" edited on Photoshop and Illustrator.
   - Card image: "carro" edited on Photoshop and Illustrator.
   - Card image: "direction" edited on Photoshop and Illustrator.
   - Card image: "double" edited on Photoshop and Illustrator.
   - Card image: "parque" edited on Photoshop and Illustrator.
   - Card image: "ramp" edited on Photoshop and Illustrator.
   - Card image: "school" edited on Photoshop and Illustrator.
   - Card image: "stop" edited on Photoshop and Illustrator.
   - Background Card image: "lights" edited on Photoshop and Illustrator.

- After being downloaded from Google, the pictures were altered in Illustrator and Photoshop, [Photoshop:](https://www.adobe.com/ie/products/photoshop.html), and [Illustrator:](https://www.adobe.com/ie/products/illustrator.html) 

### Code

- [Stack Overflow](https://stackoverflow.com/), and [W3Schools](https://www.w3schools.com/) were consulted on a regular basis for inspiration and sometimes to be able to better understand the code being implement.

- [EmailJS](https://www.emailjs.com/) was used to register and create an account in order to get emails via the contact us form.

- [GPT Chat](https://chat.openai.com/) GPT Chat for the process of linking the modal contact form to Email JS.

- [Ferenc Almasi](https://webtips.dev/memory-game-in-javascript?utm_content=cmp-true) Memory Game process research.

[Back to top ⇧](#traffic-signs)

## Acknowledgements

- My Brother, for him unconditional love, help and support in all aspects of life to make possible for me to work on this project.

- My family, for their valuable opinions and and critic during the design and development process.

- My mentor, Marcel, for their invaluable feedback and guidance.

- My Tutor, Rachel, for the all help and support.

- My friend Dorivaldo, for the all help and support

- Codeanywhere support, to help resolve issues encountered.

- Code Institute and its amazing Slack community for their support and providing me with the necessary knowledge to complete this project.

[Back to top ⇧](#traffic-signs)





