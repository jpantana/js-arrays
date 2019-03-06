const dinosaurs = [
    {
        dinoType: `Brachiosaurus`,
    },
    {
        dinoType: `Velociraptor`,
    },
    {
        dinoType: `Stegosaurus`,
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
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
    }
    printToDom('dino-barn', domString);
};


// Initializer
const init = () => {
    buildDinosaurs();
};

init();











// // printToDom function
// const printToDom = (divId, textToPrint) => {
//     const ? = document.getElementById(divId);
//     ?.innerHTML = textToPrint;
// };