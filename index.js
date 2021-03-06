// template
const input = document.querySelector('input');

const verifyRut = (rut) => {
    let n = 1;
    const result = getRut(rut).split('').reverse().map((x, i) => {
        n++;
        n = (n === 8) ? 2 : n;
        return x * n;
    });
    let digit = Math.floor(11 - (result.reduce((a, b) => a + b, 0) % 11));
    return verifyDigit(rut, getDigit(digit));
}

const verifyDigit = (rut, digit) => {
    if (rut.length < 7) {
        return false;
    }
    const length = rut.length;
    const d = rut.substring(length - 1);
    return d == digit
}
const getRut = (rut) => rut.toUpperCase().substring(0, rut.length - 1);
const getDigit = (digit) => digit === 10 ? 'k' : digit === 11 ? 0 : digit;

// events
input.addEventListener('input', (event) => {
    input.style.textTransform = 'upperCase';
    if (!verifyRut(event.target['value'])) {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid')
        input.classList.add('is-valid');
    }
});
