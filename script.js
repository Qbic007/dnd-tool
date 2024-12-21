resetValues();

function changeValue(column, delta) {
    const input = document.getElementById(`input${column + 1}`);
    let newValue = parseInt(input.value) + delta;
    if (newValue >= 0 && newValue <= 3) {
        input.value = newValue;
        updateElements(column);
    }
}

function changeHp(delta) {
    const input = document.getElementById(`hp`);
    let newValue = parseInt(input.value) + delta;
    if (newValue >= 0) {
        input.value = newValue;
    }
}

function changeMaxHp(delta) {
    const input = document.getElementById(`max-hp`);
    let newValue = parseInt(input.value) + delta;
    if (newValue >= 0) {
        input.value = newValue;
    }
}

function restoreHp() {
    const maxHp = document.getElementById(`max-hp`);
    const hp = document.getElementById(`hp`);
    hp.value = maxHp.value;
}

function resetValues() {
    for (let column = 0; column < 3; column++) {
        const input = document.getElementById(`input${column + 1}`);
        input.value = 1;
        updateElements(column);
    }
}

function updateElements(column) {
    const input = document.getElementById(`input${column + 1}`);
    const elementContainer = document.getElementById(`elements${column + 1}`);
    elementContainer.innerHTML = '';

    const count = parseInt(input.value);
    for (let i = 0; i < count; i++) {
        let element;
        if (column === 0) {
            element = document.createElement('div');
            element.className = 'element diamond';
        } else if (column === 1) {
            element = document.createElement('div');
            element.className = 'element triangle';
        } else if (column === 2) {
            element = document.createElement('div');
            element.className = 'element circle';
        }
        elementContainer.appendChild(element);
    }
}