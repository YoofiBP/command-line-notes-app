const chalk = require("chalk");
const validator = require("validator");
const yargs = require("yargs");
const notesFunctions = require("./notes");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  description: "Adds notes",
  builder: {
    title: {
      alias: "t",
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      alias: "b",
      describe: "Note Body",
      demandOption: true
      type: "string",
    },
  },
  handler: (argv) => {
    const { title, body } = argv;
    notesFunctions.addNote(title, body);
  },
});

yargs.command({
  command: "remove",
  description: "Deletes notes",
  builder: {
    title: {
      alias: "t",
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    const { title } = argv;
    notesFunctions.deleteNote(title);
  },
});

yargs.command({
  command: "list",
  description: "Lists notes",
  handler: () => {
    notesFunctions.listNotes();
  },
});

yargs.command({
  command: "read",
  description: "Reads note",
  builder: {
    title: {
      alias: "t",
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    const { title } = argv;
    notesFunctions.readNote(title);
  },
});

yargs.parse();
