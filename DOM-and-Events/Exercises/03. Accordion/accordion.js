function toggle() {
    const btn = document.querySelector('div > span');
    const extra = document.getElementById('extra');
    
    if (btn.textContent === 'More'){
        btn.textContent = 'Less';
        extra.style.display = 'block';
    }
    else if (btn.textContent === 'Less') {
        btn.textContent = 'More';
        extra.style.display = 'none';
    }
}