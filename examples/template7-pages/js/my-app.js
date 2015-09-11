// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Specify Template7 data for pages
    template7Data: {
        // Will be applied for page with "projects.html" url
        'url:projects.html': {
            firstname: 'John',
            lastname: 'Runion',
            age: 32,
            position: 'Lead',
            company: 'Outli',
            interests: ['user experience', 'engineering', 'front end', 'UX', 'iOS apps', 'UI'],
            projects: [
                {
                    title: 'National Geographic',
                    description: 'National Geographic, formerly The National Geographic Magazine, is the official magazine of the National Geographic Society. It has been published continuously since its first issue in 1888, nine months after the Society itself was founded.'
                },
                {
                    title: 'AKQA',
                    description: 'Online video service'
                },
                {
                    title: 'Siteworx',
                    description: 'Mobile operating system'
                }
            ]
        },

        // Will be applied for page with data-page="contacts"
        'page:contacts': {
            tel: '+1 (571) 447-1783',
            email: 'jvrunion@gmail.com',
            country: 'USA',
            city: 'Washington DC',
            zip: '22315',
            street: 'Awesome st'
        },

        // Just plain data object that we can pass for other pages using data-contextName attribute
        cars: [
            {
                vendor: 'Volkswagen',
                model: 'Passat',
                power: 152,
                speed: 280,
                weight: 1400,
                color: 'black',
                year: 2012,
                description: ''
            },
            {
                vendor: 'Skoda',
                model: 'Superb',
                power: 152,
                speed: 260,
                weight: 1600,
                color: 'white',
                year: 2013,
                description: ''
            },
            {
                vendor: 'Ford',
                model: 'Mustang',
                power: 480,
                speed: 320,
                weight: 1200,
                color: 'red',
                year: 2014,
                description: ''
            },
        ],

        // Another plain data object, used in "about" link in data-contextName object 
        about: {
            name: 'John Runion',
            age: 39,
            position: 'LEAD',
            company: 'MERCURY',
            interests: ['coding', 'design', 'UX', 'UI', 'iOS apps', 'IA']
        }
    }
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true
});
