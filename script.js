document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const successContainer = document.getElementById('success-container');
    const heartWrapper = document.getElementById('heart-wrapper');
    const message = document.getElementById('message');

    // Tetapan Kredensial Khas untuk Adawiyah
    const validUsername = 'adawiyah'; 
    const validPassword = '123';      

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const username = loginForm.username.value.toLowerCase().trim();
        const password = loginForm.password.value;

        if (username === validUsername && password === validPassword) {
            message.textContent = '';
            // Sembunyikan kotak login
            loginContainer.classList.add('hidden');
            // Paparkan skrin hati
            successContainer.classList.remove('hidden');
            // Jalankan fungsi hasilkan hati
            generateHeart(); 
        } else {
            message.textContent = 'Akses ditolak. Cuba lagi, sayang.'; 
        }
    });

    function generateHeart() {
        const totalText = 300; // Dikurangkan sikit supaya tak nampak serabut bila saiz kecil
        const heartWrapperRect = heartWrapper.getBoundingClientRect();
        const centerX = heartWrapperRect.width / 2;
        const centerY = heartWrapperRect.height / 2;
        
        // UBAH DI SINI: Nilai 'scale' menentukan saiz bentuk hati
        // Semakin kecil nombor ini, semakin kecil bentuk hati.
        const scale = 10; 

        for (let i = 0; i < totalText; i++) {
            const span = document.createElement('span');
            span.textContent = 'i love you';
            span.classList.add('heart-text');

            // Formula Matematik Parametrik Bentuk Hati
            const t = (i / totalText) * 2 * Math.PI;
            let x = 16 * Math.pow(Math.sin(t), 3);
            let y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)); 

            // Kira kedudukan pixel tengah
            const finalX = centerX + x * scale;
            const finalY = centerY + y * scale;

            span.style.left = `${finalX}px`;
            span.style.top = `${finalY}px`;

            // Rawakkan delay
            const delay = Math.random() * 3;
            span.style.animationDelay = `${delay}s`;

            heartWrapper.appendChild(span);
        }

        // Aktifkan animasi berdegup tanpa henti
        heartWrapper.style.animation = "heartbeat 2.5s infinite ease-in-out";
    }
});
