let character = document.querySelector('.character');
let moveBy = 10;

window.addEventListener('load', () => {
    
    character.style.left = 0;

});

window.addEventListener('keyup', (e) =>{
    switch (e.key) {
        case 'ArrowLeft':
            character.style.left = parseInt(character.style.left) - moveBy + "px";
            break;
        case 'ArrowRight':
            character.style.left = parseInt(character.style.left) + moveBy + "px";
            break;
        case 'ArrowUp':
  
    }
})