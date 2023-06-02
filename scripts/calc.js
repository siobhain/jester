function addition(num1, num2) {
    if (Number.isFinite(num1) && Number.isFinite(num2)) {
        return num1 + num2;
    } else {
        return TypeError;
    }
}

module.exports = addition;