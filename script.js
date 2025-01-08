document.getElementById('lang-zh').addEventListener('click', function () {
    switchLanguage('zh');
});

document.getElementById('lang-en').addEventListener('click', function () {
    switchLanguage('en');
});

function switchLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(function (element) {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
}
