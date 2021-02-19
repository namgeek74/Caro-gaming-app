export function checkWin(currentCell, state) {
    // vertical
    if (state[currentCell]
        && state[currentCell] === state[currentCell + 10]
        && state[currentCell] === state[currentCell + 20]
        && state[currentCell] === state[currentCell + 30]
        && state[currentCell] === state[currentCell + 40]
    ) {
        return 'Winner !'
    }

    if (state[currentCell]
        && state[currentCell] === state[currentCell + 10]
        && state[currentCell] === state[currentCell + 20]
        && state[currentCell] === state[currentCell + 30]
        && state[currentCell] === state[currentCell - 10]
    ) {
        return 'Winner !'
    }

    if (state[currentCell]
        && state[currentCell] === state[currentCell + 10]
        && state[currentCell] === state[currentCell + 20]
        && state[currentCell] === state[currentCell - 20]
        && state[currentCell] === state[currentCell - 10]
    ) {
        return 'Winner !'
    }

    if (state[currentCell]
        && state[currentCell] === state[currentCell + 10]
        && state[currentCell] === state[currentCell - 30]
        && state[currentCell] === state[currentCell - 20]
        && state[currentCell] === state[currentCell - 10]
    ) {
        return 'Winner !'
    }

    if (state[currentCell]
        && state[currentCell] === state[currentCell - 40]
        && state[currentCell] === state[currentCell - 30]
        && state[currentCell] === state[currentCell - 20]
        && state[currentCell] === state[currentCell - 10]
    ) {
        return 'Winner !'
    }

    // horizontal
    if (state[currentCell]
        && state[currentCell] === state[currentCell + 1]
        && state[currentCell] === state[currentCell + 2]
        && state[currentCell] === state[currentCell - 2]
        && state[currentCell] === state[currentCell - 1]
    ) {
        return 'Winner !'
    }

    if (state[currentCell]
        && state[currentCell] === state[currentCell + 1]
        && state[currentCell] === state[currentCell + 2]
        && state[currentCell] === state[currentCell + 3]
        && state[currentCell] === state[currentCell + 4]
    ) {
        return 'Winner !'
    }

    if (state[currentCell]
        && state[currentCell] === state[currentCell + 1]
        && state[currentCell] === state[currentCell + 2]
        && state[currentCell] === state[currentCell + 3]
        && state[currentCell] === state[currentCell - 1]
    ) {
        return 'Winner !'
    }

    if (state[currentCell]
        && state[currentCell] === state[currentCell + 1]
        && state[currentCell] === state[currentCell - 3]
        && state[currentCell] === state[currentCell - 2]
        && state[currentCell] === state[currentCell - 1]
    ) {
        return 'Winner !'
    }

    if (state[currentCell]
        && state[currentCell] === state[currentCell - 4]
        && state[currentCell] === state[currentCell - 3]
        && state[currentCell] === state[currentCell - 2]
        && state[currentCell] === state[currentCell - 1]
    ) {
        return 'Winner !'
    }

    return null;
}