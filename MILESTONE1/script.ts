const togglebutton = document.getElementById('toggle-education') as HTMLButtonElement
const education = document.getElementById('education') as HTMLElement

togglebutton.addEventListener('click' , ()=> {
    if (education.style.display === 'none') {
        education.style.display = 'block'
    } else {
        education.style.display = 'none'
    }
});