# React Firebase Authentication App

This is a simple React application that demonstrates how to implement user authentication using Firebase. This app allows users to sign up, log in, log out, reset forgotten password and update profile using their email and password. It also includes error handling and a protected route that requires authentication.

## Features

- User registration with email and password
- User login with email and password
- User logout
- Reset forgotten password using email
- User profile update (email and password)
- Error handling for authentication
- Protected route for authenticated users

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Firebase: A platform for building web and mobile applications.
- React Router: Declarative routing for React applications.
- Firebase Authentication: Firebase's authentication service for user management.

## Prerequisites

Before you start using this application, you need to have the following:

- Node.js and npm installed on your computer. You can download them [here](https://nodejs.org/).
- A Firebase project set up on the [Firebase Console](https://console.firebase.google.com/).
- Firebase Web configuration: You'll need to get your Firebase web configuration object from your Firebase project settings.

## Setup

1.  Clone the repository to your local machine:

    ```bash
    git clone https://github.com/rajkr5446/react-firebase-authentication.git
    ```

2.  Navigate to the project directory

3.  Install the project dependencies:

    ```bash
    npm install
    ```

4.  Create a .env file at the root of your project and add your Firebase web configuration. Replace the placeholders with your actual Firebase project values:

    ```
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```

5.  Start the development server:

    ```bash
    npm start
    ```

6.  The app should open in your default web browser at **http://localhost:3000**

## Design Choices:

1. **React Router for Routing:** I have used React Router to manage navigation and routing within the application. This facilitated the creation of protected routes, ensuring that only authenticated users could access specific sections of the app.

2. **Context API for State Management:** I used Context API for state management, enabling us to share user authentication state across components without prop drilling.

3. **Bootstrap for Styling:** I have utilized Bootstrap to enhance the visual design and user experience of the app. This framework provided pre-designed components and themes, expediting development.

## Challenges Faced:

1. The main challenge was to implement the persistence functionality as firebase doesn't retturn any JWT. After going through doc and some online blogs i found out that `createUserWithEmailAndPassword()` and `signInWithEmailAndPassword()` automatically store toekn in indexDB and that solves the problem

2. One more problem i faced is when updating email in [UpdateProfile.js](https://github.com/rajkr5446/react-firebase-authentication/blob/main/src/components/UpdateProfile.js). The error i got is **Firebase: Please verify the new email before changing email. (auth/operation-not-allowed).**
