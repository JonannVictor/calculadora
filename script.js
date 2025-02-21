document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('input[type="button"]');
    const display = document.getElementById('display');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.value;
            if (value === '=') {
                try {
                    display.value = eval(display.value.replace('x', '*').replace('÷', '/').replace(/(\d+)%/g, '($1/100)'));
                } catch (e) {
                    display.value = 'Error';
                }
            } else if (value === 'C') {
                display.value = '';
            } else if (value === '+/-') {
                display.value = display.value.charAt(0) === '-' ? display.value.slice(1) : '-' + display.value;
            } else if (value === '%') {
                display.value += '%';
            } else {
                display.value += value;
            }
        });
    });
});