# command-line-notes-app

Built with [Yargs](https://www.npmjs.com/package/yargs)
![Yargs Logo](yargs-logo.png)

I created this application to test out creating command-line applications.

Its a simple notes app that operates through the terminal with Create, Read, and Delete operations.
Notes are stored in a JSON file in the root directory of the program

I used the command line packages [yargs](https://www.npmjs.com/package/yargs) and chalk to make this possible

## Format

node app.js {operation} {option} {content}

## Operations

- add: Add a new list to the collection
- remove: Remove a list from the collection
- list: List all lists in the collection
- read: Read body of note based on title

## options

- t - title
- b - body

### Examples

`node app.js add -t My\ First\ Note -b Body`

`node app.js remove -t Sample\ Title`

`node app.js list`

`node app.js read -t Sample\ Title`
