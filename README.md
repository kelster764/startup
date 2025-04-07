# Dino Choir

[My Notes](notes.md)

The Dino family wants to sing. Press the Dinos and they shall sing


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

A little Dino family can sing for you! Press the dinos to sing and you can make whatever song you desire. You can even record your dino song and you friends can rate them.

### Design

![Design image](website_pitch.jpg)


### Key features

- Cute dinosaur family
- Soprano, alto, tenor, and bass voices
- a little animation that is activiated when dinos sing

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - making the layout of the website, login on the top right corner
- **CSS** - dinosaurs will be centered and towards the bottom of the screen to create room. May add color but for now a doodle look is good.
- **React** - dinos interactive with clicks
- **Service** - The API I am going to use is AnimeFacts because why not. Dinosaurs would make a great anime
- **DB/Login** - person can login so that they can record their dino songs and so they can vote.
- **WebSocket** - Friends can see how songs are voted.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x ] **HTML pages** - 
- [x ] **Proper HTML element usage** - 
- [x ] **Links** - 
- [x ] **Text** - 
- [x ] **3rd party API placeholder** - 
- [x ] **Images** - 
- [x ] **Login placeholder** - 
- [x ] **DB data placeholder** - 
- [x ] **WebSocket placeholder** - 

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x ] **Header, footer, and main content body** - 
- [x ] **Navigation elements** - 
- [x ] **Responsive to window resizing** - 
- [x ] **Application elements** - 
- [x ] **Application text content** -
- [x ] **Application images** - 

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ x] **Bundled using Vite** - 
- [x ] **Components** - 
- [x ] **Router** - 

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X ] **All functionality implemented or mocked out** - Yes, I have it to where the play simulates your friends showing up. once we do the databases, the play page will do more.
- [ X] **Hooks** - I did complete this deliverable. I have it to where the login will grab your user name and display it on the play page.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X ] **Node.js/Express HTTP service** - I did this
- [X ] **Static middleware for frontend** - I did this
- [ X] **Calls to third party endpoints** - I did this. I put the random cat api in my about page.
- [X ] **Backend service endpoints** - I did this
- [X ] **Frontend calls service endpoints** - I did this
I also fixed things that I didn't get around to in react. Now the dinos sing!

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ X] **User registration** - 
- [ X] **User login and logout** - 
- [ X] **Stores data in MongoDB** - 
- [ X] **Stores credentials in MongoDB** - 
- [X ] **Restricts functionality based on authentication** - You cannot save your scores or look at scores if you are not logged in. I however still wanted the dino buttons accessible for when I show my friends 

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X ] **Backend listens for WebSocket connection** - 
- [ X] **Frontend makes WebSocket connection** - 
- [ X] **Data sent over WebSocket connection** - 
- [ X] **WebSocket data displayed** - displays on play page
- [X ] **Application is fully functional** - It is good enought!



Things I have learned

1/27/25    I did the Simon deliverable inside of gitbash. I used the command:

$ ./deployFiles.sh -k ../key/dino-key-pair.pem -h dinosinging -s simon                               