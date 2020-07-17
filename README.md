# command-line-notes-app

Built with Yargs
![Yargs Logo](yargs-logo.png)
I created this application to test out creating command-line applications.

Its a simple notes app that operates through the terminal with Create, Read, and Delete operations.

I used the command line packages yargs and chalk to make this possible

## Format

node app.js {operation} {option} {content}

## Operations

- add
- remove
- list
- read

## options

t - title
b - body

### Examples

`node app.js add -t My\ First\ Note -b Body`

`node app.js remove -t Sample\ Title`

`node app.js list`

`node app.js read -t Sample\ Title`
