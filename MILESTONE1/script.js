var togglebutton = document.getElementById('toggle-education');
var education = document.getElementById('education');
togglebutton.addEventListener('click', function () {
    if (education.style.display === 'none') {
        education.style.display = 'block';
    }
    else {
        education.style.display = 'none';
    }
});
