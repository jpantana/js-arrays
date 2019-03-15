const dinosaurs = [
    {
        dinoType: `Brachiosaurus`,
        name: `Wesley`,
    },
    {
        dinoType: `Velociraptor`,
        name: `Valerie`,
    },
    {
        dinoType: `Stegosaurus`,
        name: `Steve`,
    },
];

// loop over the dinosaurs
// build up a DOM string
// printToDom

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById('container');
  selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++ ) {
        domString += `<div class="dinosaur">`;
        domString +=   `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString +=   `<p>${dinosaurs[i].name}</p>`;
        domString += `</div>`;
    }

    printToDom('dino-barn', domString);
};

const assignments = [
    {
        title: `product cards`,
        dueDate: `03/05/2019`,
        topic: `HTML/CSS`,
        notes: `Use flexbox`,
        assignmentUrl: `http://www.google.com`,
    },
    {
        title: `Soups`,
        dueDate: `04/05/2019`,
        topic: `Cooking Soups`,
        notes: `Use salt`,
        assignmentUrl: `http://www.google.com`,
    },
    {
        title: `Pizza`,
        dueDate: `05/05/2019`,
        topic: `Making Pizza Dough`,
        notes: `Better use sauce`,
        assignmentUrl: `http://www.google.com`,
    },
    {
        title: `Brisket`,
        dueDate: `06/05/2019`,
        topic: `Texas brisket`,
        notes: `Holy heart disease, Batman! This is good`,
        assignmentUrl: `http://www.google.com`,
    },
    {
        title: `Icecream`,
        dueDate: `07/05/2019`,
        topic: `eating icecream`,
        notes: `you'll also want water`,
        assignmentUrl: `http://www.google.com`,
    },

];

const buildAssignmentCards = () => {
    let domString = '';
    for(let i = 0; i < assignments.length; i++) {
        domString += `<div class="card">`;
        domString +=   `<h3>${assignments[i].title}</h3><hr>`;
        domString +=   `<h1>Due Date:<br>${assignments[i].dueDate}</h1>`;
        domString +=   `<p>Get the <br>assignment </br><a href="${assignments[i].assignmentUrl}">HERE</a>`;
        domString +=   `<h4>Topic: ${assignments[i].topic}</h4>`;
        domString +=   `<h4>Notes: ${assignments[i].notes}</h4>`;
        domString += `</div>`;
    }
    printToDom('container', domString);
};

// total of 5 assignments
// make a function called buildAssignmentCards
    // function should loop over the assignments and make a DOM string
// reuse printToDom to display domString








const init = () => {
    // buildDinosaurs();
    buildAssignmentCards();
};

init();