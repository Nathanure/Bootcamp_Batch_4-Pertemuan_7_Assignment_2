// Imported modules of core module
const fs = require('fs');

// Make a directory and JSON file if it hasn't been made yet
const fsJSON = (dirPath, dataPath) => {
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
    if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// Save data into a JSON file
const saveJSON = (name, email, telp) => {
    // Make an object for the answers
    const contactJSON = { name, email, telp };
    // Read the JSON file in dir Path
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    // Parse readline to JSON
    const parseLine = JSON.parse(file);
    // Push the array to JSON
    parseLine.push(contactJSON);
    // Write the file in JSON
    fs.writeFileSync('data/contacts.json', JSON.stringify(parseLine));
}

module.exports = { fsJSON, saveJSON };