// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto pre-compilation
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
                    description: 'National Geographic, formerly The National Geographic Magazine'
                },
                {
                    title: 'AKQA',
                    description: 'AKQA is a digital agency that specializes in creating digital services and products. '
                },
                {
                    title: 'Siteworx',
                    description: 'Siteworx, LLC is a digital agency that specializes in experience design'
                }
            ]
        },

        // Will be applied for page with data-page="contacts"
        'page:contacts': {
            tel: '(571) 447-1783',
            email: 'jvrunion@gmail.com',
            country: 'USA',
            city: 'Washington DC',
            zip: '22315',
            street: 'Awesome st'
        },

        // Just plain data object that we can pass for other pages using data-contextName attribute
        cars: [
            {
                vendor: 'MVC',
                model: 'AngularJS',
                language: 'Javascript',
                creator: 'Google',
                community: 'Large and active community',
                plugins: 'Thousands',
                year: 2012,
                description: 'AngularJS is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC'
            },
            {
                vendor: 'MVC',
                model: 'EmberJS',
                language: 'Javascript',
                creator: 'Tom Dale',
                community: 'Medium',
                plugins: 'Hundreds',
                year: 2012,
                description: 'Ember.js is an open-source JavaScript application framework, based on the model-view-controller (MVC) pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework.'
            },
            {
                vendor: 'MVC',
                model: 'Backbone',
                language: 'Javascript',
                creator: 'Google',
                community: 'Medium',
                plugins: 'Hundreds',
                year: 2012,
                description: 'AngularJS is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC'
            },
        ],

        // Another plain data object, used in "about" link in data-contextName object 
        about: {
            name: 'John Runion',
            age: 39,
            position: 'Principle',
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
