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
  const selectedDiv = document.getElementById('dino-barn');
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






// Initializer
const init = () => {
    buildDinosaurs();
};

init();