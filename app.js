const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

let headCounter = 0;
let middleCounter = 0;
let bottomCounter = 0;
let catchphrases = []

headDropdown.addEventListener('change', () => {
    const headValue = headDropdown.value;
    headCounter++;
    headEl.style.backgroundImage =`url(assets/${headValue}-head.png)`;
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    const middleValue = middleDropdown.value;
    middleCounter++;
    middleEl.style.backgroundImage =`url(assets/${middleValue}-middle.png)`;
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    const bottomValue = bottomDropdown.value;
    bottomCounter++;
    bottomEl.style.backgroundImage =`url(assets/${bottomValue}-pants.png)`;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const catchphraseValue = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(catchphraseValue);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();

});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You've changed the head ${headCounter} times, the middle ${middleCounter} times, and the bottom ${bottomCounter} times.`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    for (let catchphrase of catchphrases) {
        const catchphraseEl = document.createElement('p');
        catchphraseEl.textContent = catchphrase;
        catchphrasesEl.append(catchphraseEl);
    }
}
