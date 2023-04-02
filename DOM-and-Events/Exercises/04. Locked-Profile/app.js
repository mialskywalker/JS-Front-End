function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    

    for (btn of buttons) {
        
        const profile = btn.parentElement;
        const hiddenField = profile.children[9];
        const lock = profile.children[2];
        const unlock = profile.children[4];

        btn.addEventListener('click', (e) => {
            const button = e.currentTarget;
            if (unlock.checked) {
                if (button.textContent === 'Show more'){
                    hiddenField.style.display = 'block';
                    button.textContent = 'Hide it';
                }
                else if (button.textContent === 'Hide it'){
                    hiddenField.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    }

}