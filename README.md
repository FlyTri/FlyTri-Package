<div  align="center">
<h1>FlyTri</h1>
</div>

### ℹ️ || About

<div align="center">
<p>A Simple, Easy and Beginner friendly Discord.js Package for everyone. Uses Discord.js v13</p>
<p>
    <a href="https://npmjs.com/package/flytri"><img src="https://img.shields.io/npm/v/flytri?maxAge=3600" alt="NPM version" /></a>
    <a href="https://npmjs.com/package/flytri"><img src="https://img.shields.io/npm/dt/flytri?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
<a  href="https://nodei.co/npm/flytri/"><img  src="https://nodei.co/npm/flytri.png?downloads=true&stars=true"  alt="NPM info"  /></a>

</p>
</div>

## 📥 || Installation

To install FlyTri package you need:

- You need to install [**Node.js**](https://www.nodejs.org/en/download/).

- You need to install [**discord.js**](https://www.npmjs.com/package/discord.js).

Then you can open your application's terminal and type:

```
$ npm install flytri
```

## 📜 || Table of content

### Functions:

- [`delay()`](https://www.npmjs.com/package/flytri#delay) - Functions that creates timeout easily and fast.

- [`passGen()`](https://www.npmjs.com/package/flytri#passgen) - Function to create passwords made by letters and numbers randomly with specified length.

- [`Wikipedia()`](https://www.npmjs.com/package/flytri#wikipedia) - Function that allows users to search wikipedia and return results for a query.

# || Functions:

## delay

Sleep is a simple function, where is make it easier and faster to make a timeout in your code.

**Example:**

```js
// Defining the package
const flytri = require("flytri");

// Getting the sleep function from the package
const sleep = flytri.sleep;

// this will log "Start!" once i run the application
console.log("Start!");

// using the package sleep function to set a timeout
sleep(5000); // sleep(milliseconds)

// after the 5 seconds (5000 milliseconds) it will log "5 Seconds passed"
console.log("5 Seconds passed");
```

> sleep(ms: Number)

## passGen

this is a simple function that can generate passwords using letters and numbers and the password length is custom so you can change it to any length you want!

**Example:**

```js
// Defining the package
const ultrax = require("ultrax");

// getting the passGen function from the package
const passGen = ultrax.passGen;

// passGen(6) that mean it will generate a password from 6 characters.
console.log(passGen(6));
```

> passGen(Length: Number)

## wikipedia

A simple function to allow you to fetch a topic from wikipedia

**Example**

```js
// defining the package
const flytri = require('flytri')

// we will be searching earth
let  query = 'earth'

// we will searching with English language
let language = 'en'

// Inistigating the wikipedia class
const res = new flytri.Wikipedia({
	// You choose either message or interaction, not both
	message:  message, // The message
	color:  "RED", // Color of embed that will be sent
	query:  query  // what the search query is
  language: language // language
})

res.fetch() // fetching the result from wikipedia
```

## ❓ || Contact us

In case you have idea's to improve the package, or maybe you found some bugs or you need help, you can contact us from our discord server!

<a  href="https://www.discord.gg/tgDVBKqvZe"><img  src="https://www.discord.com/api/guilds/911275816355258371/widget.png?style=banner1"></a>
