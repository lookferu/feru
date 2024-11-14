window.addEventListener('load', function() {
    const content = document.getElementById('content');
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
});

const mainTitle = document.getElementById('nama');
        mainTitle.addEventListener('click', function() {
            mainTitle.style.color = '#28a745';
            setTimeout(() => mainTitle.style.color = '', 500);})

            document.addEventListener('click', function(e) {
                const effect = document.getElementById('click-fx');
                effect.style.left = `${e.clientX}px`;
                effect.style.top = `${e.clientY}px`;
                effect.style.opacity = '1';
                effect.style.transform = 'scale(10)';
                
                setTimeout(() => {
                    effect.style.opacity = '0';
                    effect.style.transform = 'scale(0)';
                }, 500);
            });