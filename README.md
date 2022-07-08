# NutriBud Frontend

## Table of contents

- [Homepage](#Homepage)
  - [searching](#searching)
  - [speech to text](#speech-to-text)
  - [tab selector](#tab-selector)
  - [barcode search](#barcode-search)
  - [tracking an item](#tracking-an-item)
- [Header](#header)
- [Profile page](#profile-page)
  - [calendar](#calendar)
  - [timeline](#timeline)
  - [nutrition overivew](#nutrition-overview)
- [settings page](#settings-page)
  - [info](#info)
  - [goals](#goals)
- [login and sign-up](#login-and-sign-up)
  - [creating an account](#creating-an-account)
  - [logging in](#logging-in)
- [technology used](#technologies-used)
  - [css styling](#css-styling)
  - [testing libraries](#testing-libraries)
- [contributors](#contributors)

## Homepage

When you get to our homepage (https://nutribud-frontend.sigmalabs.co.uk/), this is what you'll see.

![Image not found](readme-files/homepage.png?raw=true "Homepage")

Here you see the header for the first time which you'll have access to on every page of our website we'll have a close look at this later on. In addition to the header we have a tab selector to choose whether you want to search for something you've eaten, or search for a specific barcode.

### Searching

![Image not found](readme-files/text-searchbar.png?raw=true "Text Searchbar")

When on the product name tab, you can search for vague foods, specific foods, meals or even just write a sentence such "For breakfast I had some toast" and we'll bring you a list of all items in our database to do with toast (This part is made possible with the fancy natural language processing technique).

### Speech to text

You may have noticed this little icon in the searchbar
![Image not found](readme-files/nomic-icon.jpeg "mic not in use icon"). This is a speech to text feature. If you press and hold on this icon, the line through it will disappear (the icon will look like this ![Image not found](readme-files/mic-icon.jpeg "mic in-use icon") when the mic is listening for you.) meaning you can now say what you had to eat. When you've finished saying what you had to eat, just simply let go and the website will bring a list of items relating to what you just said (just a note, text to speech also supports the ability to say a generic sentence such as "I had eggs for lunch".)

### Tab selector

We have two types of searches, one for typing in a food and other for searching specific barcodes.
![Image not found](readme-files/tab-selector-demo.gif "tab selector demo")

You can switch freely between the two tabs as you like.

### Barcode search

Here, you can search for a specific barcode of a product. You'll also notice we no longer have the mic button, we now have this ![Image not found](readme-files/barcode-scanner-button.jpeg "barcode scanner button") button instead. When clicked this will open a barcode scanner, just simply hold up your barcode to the camera and once scanned the site will do the rest of the work for you.

### Tracking an item

To track an item you have ate, you must be logged in so we know who you are! (see more about login and sign up [here](#login-and-sign-up)) Tracking an item is really simple, just click the big plus sign on the right, type in how many grams of the item you had then click track item! We'll also give you a little message to let you know your item was tracked (or if something went wrong D:). If still not sure, here's a quick demo

![Image not found](readme-files/track-item-demo.gif "tracking item demo")

## Header

The header will be visible on every page of the website. If you're logged in, it will look something like this:

![Image not found](readme-files/header.png?raw=true "header image")

you can click on the little icon in the top right and a drop down menu will appear

![Image not found](readme-files/header-drop-down.png?raw=true "header drop down image")

If you're not logged in, the Profile button will not appear on the header and the settings button will not appear on the drop down and the logout will be replaced with a login button which redirects you to the login page (see more about login and sign up [here](#login-and-sign-up)).

If you _are_ logged in, clicking the profile button will take you to your profile page (where you'll see an overview of your tracking history) and clicking the settings button in the drop down menu will take you to your settings page where you can edit information about yourself and also edit your nutrition goals.

## Profile page

After clicking the profile button on the header, you will be taken to this page

![Image not found](readme-files/profile-page.png?raw=true "profile page picture")

You'll notice this ![Image not found](readme-files/info-icon.jpeg "info icon") icon in the top right of each component. Hovering over the icon will give you a run down of what that component means/does.

![Image not found](readme-files/info-hover-demo.gif "info icon hover demo")

### Calendar

On the page, you have a calendar (to select which day you want to see an overview of). Usually the calendar would look a lot more colourful than this however this specific account has only tracked one item. the days are coloured depending on how well you did with nutrition relative to your goals on that particular day.

### Timeline

The timeline component shows an ordered timeline of all the things you ate on the selected day. Hovering over an item shows you the nutritional value of the amount of the item you ate

![Image not found](readme-files/timeline-demo.gif "timeline demo")

### Nutrition overview

The nutrition overview component gives you a pie chart of the three main macronutrients from the items you tracked on the selected day. Hovering over the different parts of the chart shows you the percentage of that particular macronutrient. It also has progress bars which tell you how close you got/are to your goal for the selected day.

![Image not found](readme-files/nutrient-overview-demo.gif "nutrient overview demo")

## Settings page

When you go to the settings page, you'll see something like this (if it's your first time going here then all the fields in info will be blank)

![Image not found](readme-files/settings-page-info.png "settings page, info tab")

### Info

You can change what it's in this fields, click save changes and the info will be updated! Currently we don't use this information so feel free to leave everything blank although we do have some features planned in the future that may use some of this information.

### Goals

Navigate to the goals tab and you'll see this (even if it's your first time coming here).

![Image not found](readme-files/settings-page-goals.png "settings page, goals tab")

This tab functions the same as the info tab however unlike the user info we give you these goals by default when you sign up, although they are only supposed to be temporary so we strongly encourage you to change them to suit your own goals.

## Login and sign-up

for the main features of the site you'll have to create an account and be logged in. Luckily enough we make it easy to do this!

### Creating an account

When creating an account you'll have to make sure you enter a username, and a password that's long enough (as well as confirming that password just to make sure you know what you typed!). otherwise you'll get an error message and see something like this

![Image not found](readme-files/create-acc-fail-demo.gif "creating an account fail")

Don't worry if this happens to you, you can easily try again.

If you successfully create an account you'll see a little success message and be redirected to the login page soon after.

![Image not found](readme-files/create-acc-success.gif "creating an account success")

### Logging in

When on the login page type in the username and password you used to create your account and if you typed everything in correctly you'll be logged in and taken to the homepage.

![Image not found](readme-files/login-success.gif "logging in success")

We'll let you know if you typed your details in incorrectly and you can try again.

If you find yourself on the create account page when you already have an account you can navigate to the login page by clicking the little hyperlink underneath the form (the same applies if you're on the login page and don't have an account).

![Image not found](readme-files/click-login-redirect.gif "login redirect")

## Technologies used

- react v18.1.0
- react-router-dom v6.3.0
- react-script v5.0.1
- react-speech-recognition v3.9.1
- dynamsoft-javascript-barcode v9.0.2
- recharts v2.1.10
- @nivo v0.79.1
- @date-io/moment v2.14.0
- react-datepicker v4.8.0

### CSS Styling

- @emotion/react v11.9.0
- @emotion/styled v11.8.1
- @mui/lab v5.0.0-alpha.84
- @mui/material v5.8.1

### Testing libraries

- @testing-library/jest-dom v5.16.4
- @testing-library/react v13.3.0
- @testing-library/user-event v13.5.0

## Contributors

- [Ibrahim Ahmed](https://github.com/Ibahmed1)
- [Dan Michell](https://github.com/dan-michell)
- [Elisaveta Zobeva](https://github.com/e-zob)
- [Kainan Hassan](https://github.com/kainanh)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
