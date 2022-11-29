// Imported modules
const yargs = require('yargs');
const cli = require('./local_modules/readlineCLI')

// Command for Yargs
yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder: {
        name: {
            describe: 'Contact Name',
            demandOptio: true,
            type: 'string',
        },
        email: {
            describe: 'Contact Email',
            demandOption: false,
            type: 'string',
        },
        mobile: {
            describe: 'Contact Mobile Phone number',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        const contact = {
            name: argv.name,
            email: argv.email,
            mobile: argv.mobile
        };
        // Make a folder named "data" and a JSON file named "contacts.json"
        cli.fsJSON('./data', './data/contacts.json');
        // Input the data inside JSON
        cli.saveJSON(argv.name, argv.email, argv.mobile);
        console.log(contact);
    },
})

yargs.parse();