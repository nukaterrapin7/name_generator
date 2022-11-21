require('dotenv').config();
require('./config/database');

const firstName = require ('./models/firstName');

const lastName = require ('./models/lastName');

const nameTitle = require ('./models/nameTitle');

(async function() {

    await firstName.deleteMany({});
    const firstNames = await firstName.create
    ([
        {Name: Bob},
        {Name: Steve},
        {Name: Glen},
        {Name: Diane},
        {Name: Susan},
        {Name: Katie},
    ])

    await lastName.deleteMany({});
    const lastNames = await lastName.create
    ([
        {Name: Smith},
        {Name: Jones},
        {Name: Brown},
        {Name: Cruise},
        {Name: Frost},
        {Name: King},
    ]);

    await nameTitle.deleteMany({});
    const nameTitles = await nameTitle.create
    ([
        {Name: Destroyer},
        {Name: Doom-Bringer},
        {Name: Gardener},
        {Name: Wretched},
        {Name: Forgotten},
        {Name: Timid},
    ]);

    process.exit();

})();