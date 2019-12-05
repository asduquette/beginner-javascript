const people = [
        { name: 'Wes', cool: true, country: 'Canada' },
        { name: 'Scott', cool: true, country: 'Merica' },
        { name: 'Snickers', cool: false, country: 'Dog Country' },
];
// debugger;
people.forEach((person, index) => {

        console.log(person.name);
});

// Console Methods
// console.table(people);
// console.error(people);
// console.count('Running Doctorize');

// Callstack, Stack Trace
people.forEach((person, index) => {
        // console.group(`${person.name}`);
        // console.log(person.country);
        // console.log(person.cool);
        // console.log('DONE!');
        // console.groupEnd(`${person.name}`);
});

// Grabbing Elements
// Select element from Elements tab
// $0 $0.value provides access to last element clicked
// $1 access the second to last element clicked
// $ or $$ shorthand selectors for elemebts in the dom
// $('p) returns first paragraph; $$('p" returns all paragraphs JQUERY breaks this functionality

// Breakpoints
// only when dev tools are running. pauses script
// debugger;

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
        console.group('doing some stuff');
        console.log('I am the log note');
        console.warn('Be careful!!!');
        console.error('JUST STOP');
        console.groupEnd('doing some stuff');
}

function doctorize(name) {
        // console.count('running Doctorize');
        return `Dr. ${name}`;
}

function greet(name) {
      //  doesntExist();
        return `Hello ${name}`;
}

function go() {
     //   debugger;
        const name = doctorize(greet('Wes'));
        console.log(name);
}

function bootstrap() {
        console.log('Starting the call stack');
        go();
}

// bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
        const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
        e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
        const res = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                        Accept: 'text/plain',
                },
        });
        const joke = await res.text();
        console.log(joke);
        return joke;
}
