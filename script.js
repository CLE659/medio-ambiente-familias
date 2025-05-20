
// Ejemplo simple de desbloqueo al subir archivo
document.querySelectorAll('.level input').forEach((input, index, allInputs) => {
    input.addEventListener('change', () => {
        const currentLevel = input.closest('.level');
        currentLevel.classList.remove('locked');
        currentLevel.querySelector('.icon').textContent = '✅';
        
        if (index + 1 < allInputs.length) {
            const nextLevel = allInputs[index + 1].closest('.level');
            nextLevel.classList.remove('locked');
        } else {
            document.querySelector('.final-screen').style.display = 'block';
        }
    });
});
