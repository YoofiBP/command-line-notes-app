const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  if (notes.find((note) => note.title === title)) {
    console.log(chalk.red("Title already present"));
    return;
  }
  const newNote = [...notes, { title, body }];
  saveNotes(newNote);
  console.log(chalk.green("New note added successfully"));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    //console.log(err)
    return [];
  }
};

const saveNotes = (data) => {
  const dataJSON = JSON.stringify(data);
  fs.writeFileSync("notes.json", dataJSON);
};

const deleteNote = (title) => {
  const notes = loadNotes();
  const prevLength = notes.length;
  const newNotes = notes.filter((note) => note.title !== title);
  const newLength = newNotes.length;
  if (newLength === prevLength) {
    console.log(chalk.red("Nothing was deleted"));
  } else {
    saveNotes(newNotes);
    console.log(chalk.green("Item deleted successfully"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.bold.underline("Current Notes:"));
  notes.forEach((note) => {
    console.log(`Title: ${note.title}\nBody: ${note.body}\n`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);
  if (foundNote) {
    console.log(chalk.blue.underline(foundNote.title));
    console.log(chalk.yellow(foundNote.body));
  } else {
    console.log(chalk.grey("Note not found"));
  }
};

module.exports = {
  addNote: addNote,
  deleteNote: deleteNote,
  listNotes: listNotes,
  readNote: readNote,
};
