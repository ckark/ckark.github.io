Array.from(document.getElementsByClassName('rate')).forEach(e => e.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d/\.]/, '')
        .replace(/\.\./g, '')
        .replace(/\s\s/g, '')
        .replace(/\s\.\s/g, '');
    if (this.value !== '') this.value = this.value;
    if (this.value === '00' || this.value === '000' || this.value === '0.000') this.value = '0';
    if (Number(this.value) > 12) this.value = '12';
}))

document.getElementById('total').textContent = "$0.00";
const getSubtotal = (a, b, c, d, e) => {
    a = document.getElementById(a);
    b = document.getElementById(b);
    c = document.getElementById(c);
    c.textContent = '$0.00'
    a.addEventListener('input', function () {
        c.textContent = ((a.value * d) + (b.value * e)).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    })
    b.addEventListener('input', function () {
        c.textContent = ((a.value * d) + (b.value * e)).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    });
    if (c.textContent === "$NaN") c.textContent = '$0.00';
};

getSubtotal('m12', 'm15', 'smsub', 12, 15);
getSubtotal('t12', 't15', 'tsub', 12, 15);
getSubtotal('w12', 'w15', 'wsub', 12, 15);
getSubtotal('th12', 'th15', 'thsub', 12, 15);
getSubtotal('f12', 'f15', 'fsub', 12, 15);


document.addEventListener('change', e => {
    const r = (a, b) => a + b;
    let arr = [Number(document.getElementById('smsub').textContent.replace(/[$,\s]/g, '')), Number(document.getElementById('tsub').textContent.replace(/[$,\s]/g, '')), Number(document.getElementById('wsub').textContent.replace(/[$,\s]/g, '')), Number(document.getElementById('thsub').textContent.replace(/[$,\s]/g, '')), Number(document.getElementById('fsub').textContent.replace(/[$,\s]/g, ''))];
    document.getElementById('total').textContent = arr.reduce(r).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
})
// Shake Erroneous Field Values on Blur
const validate = e => {
    Array.from(document.getElementsByClassName(e)).forEach(el => {
        el.addEventListener('blur', function () {
            if (el.checkValidity() === false || el.value === '') {
                el.classList.add('error');
                setTimeout(function () {
                    el.classList.remove('error');
                }, 300);
                event.preventDefault();
            } else {
                el.style.backgroundColor = null;
            }
        });
    });
};
validate('nameOrTitle')