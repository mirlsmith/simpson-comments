# Simpson Comments

This project was created as an assignment for a job interview. I learned a lot and enjoyed creating it.

 

The app is responsive for better display on mobile devices.

## Features

User can choose as which character to post by selecting from the dropdown menu.

Messages can be added either as stand alone or by clicking on an existing message you'll be in responding mode. Clicking anywhere outside the messages will revert back to a regular message post. The response messages are rendered recursively.

All data is stored on the machines local storage so that everything is saved upon refreshing.

Once a message is "removed" it no longer displays, but it is still stored, with a "deletedAt" timestamp. In order to retreive all the original messages it is nesecary to clear the local storage and start from fresh.

I created a custom pipe (using Angular pipes) to display each message's last time of updating in a specific format as required by assignment guidelines.

## App mockup

![alt text](https://github.com/mirlsmith/simpson-comments/blob/main/src/assets/imgs/users/simpson-chat-mockup.png)


## Technology

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

I also used Scss for styling.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

