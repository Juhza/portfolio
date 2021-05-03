function toggleDisplay(id){
    hideAll();
    document.getElementById(id).classList.remove('invisible');
}

function hideAll(){
    document.getElementById('home').classList.add('invisible');
    document.getElementById('work').classList.add('invisible');
    document.getElementById('about').classList.add('invisible');
    document.getElementById('contact').classList.add('invisible');
}