var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        
        setTimeout(() => {  document.querySelector(".toggleText").textContent = 'Light'; }, 200);
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        setTimeout(() => {  document.querySelector(".toggleText").textContent = 'Dark'; }, 200);
    }
})

let trans = () => {
    document.documentElement.classList.add('transition')
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
