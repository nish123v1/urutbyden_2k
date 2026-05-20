document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const successContainer = document.getElementById('success-container');
    const heartWrapper = document.getElementById('heart-wrapper');
    const message = document.getElementById('message');

    const validUsername = 'adawiyah'; 
    const validPassword = '123';      

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const username = loginForm.username.value.toLowerCase().trim();
        const password = loginForm.password.value;

        if (username === validUsername && password === validPassword) {
            message.textContent = '';
            loginContainer.classList.add('hidden');
            successContainer.classList.remove('hidden');
            generateHeart(); 
        } else {
            message.textContent = 'Akses ditolak. Cuba lagi, sayang.'; 
        }
    });

    function generateHeart() {
        const totalText = 350; 
        const heartWrapperRect = heartWrapper.getBoundingClientRect();
        const centerX = heartWrapperRect.width / 2;
        const centerY = heartWrapperRect.height / 2;
        
        // FORMULA BARU: Skala automatik mengikut saiz tingkap skrin (Responsive Auto-Scale)
        // Jika skrin kecil (seperti telefon), nilai scale mengecil sendiri secara automatik.
        const scale = Math.min(heartWrapperRect.width, heartWrapperRect.height) / 45; 

        heartWrapper.innerHTML = ''; // Membersihkan sisa elemen lama jika ada

        for (let i = 0; i < totalText; i++) {
            const span = document.createElement('span');
            span.textContent = 'i love you';
            span.classList.add('heart-text');

            const t = (i / totalText) * 2 * Math.PI;
            let x = 16 * Math.pow(Math.sin(t), 3);
            let y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)); 

            const finalX = centerX + x * scale;
            const finalY = centerY + y * scale;

            span.style.left = `${finalX}px`;
            span.style.top = `${finalY}px`;

            const delay = Math.random() * 3;
            span.style.animationDelay = `${delay}s`;

            heartWrapper.appendChild(span);
        }

        heartWrapper.style.animation = "heartbeat 2.5s infinite ease-in-out";
    }
});
