# MyReads Project

This application is a book library app that allows you to track books in your library that you are either currently reading, want to read or have read. Each book comes with a dropdown menu that can be used to move a book from one 'shelf' to another. I.e. once you have finished reading a book you can move it from 'Currently Reading' to 'Read' using the dropdown.

A search page also allows for new books to be discovered and added to the library.

For this Books project, I converted a static webpage to a react-based dynamic web application. A static design was converted to be access remote data via an API and allow full functionality via React.

## Installation

```$ git clone https://github.com/DMcKenzie205/reactnd-project-myreads-starter```

1. In this folder carry out the following commands to prepare the app:

* install all project dependencies with `npm install`
* start the development server with `npm start`

2. With your server running, visit the site: ```http://localhost:3000```

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. # DO NOT MODIFY
    ├── App.js # This is the root of your app. # DO NOT MODIFY
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. # DO NOT MODIFY
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. # DO NOT MODIFY
    ├── index.js # Used for DOM rendering only. # DO NOT MODIFY
    └── components
        ├── BookCase.js # Provides the structure for the Shelves. # DO NOT MODIFY
        ├── Bookshelf.js # Layout of the Book Shelves. # DO NOT MODIFY
        ├── Book.js # Handling for the books # DO NOT MODIFY
        ├── BooksShelfChanger.js # Selector for moving books between shelves. # DO NOT MODIFY
        └── search.js # Used to search API for additional books. # DO NOT MODIFY

```

## Backend Server

To simplify use of the app a backend server has been provided.

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
