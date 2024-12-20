const logBtn = document.getElementById('logBtn');
const regBtn = document.getElementById('regBtn')
function showTab(tab) { 
    document.querySelectorAll('.tab').forEach(t => { 
        t.classList.remove('active'); 
    }); 
    document.getElementById(tab).classList.add('active'); 
    // Изменяем прозрачность кнопок
    console.log(tab);
    if (tab === 'login') { 
        logBtn.style.opacity = '1';
        regBtn.style.opacity = '0.5';
    } else if (tab === 'register') { 
        logBtn.style.opacity = '0.5';
        regBtn.style.opacity = '1';
    }
} 
 
const registerForm = document.getElementById('registerForm'); 
const loginForm = document.getElementById('loginForm'); 
 
// Валидация регистрации 
registerForm.addEventListener('input', function (event) { 
    const fullName = document.getElementById('fullName'); 
    const registerEmail = document.getElementById('registerEmail'); 
    const birthDate = document.getElementById('birthDate'); 
    const phone = document.getElementById('phone'); 
    const registerPassword = document.getElementById('registerPassword'); 
    const confirmPassword = document.getElementById('confirmPassword'); 
 
    const namePattern = /^[А-ЯЁа-яё]+(?:\s[А-ЯЁа-яё]+){2}$/;
    // Валидация ФИО 
    if (fullName.value.trim() === "") { 
        document.getElementById('fullNameError').textContent = "ФИО не может быть пустым."; 
    } else { 
        if (!namePattern.test(fullName.value)) {
            document.getElementById('fullNameError').textContent = "ФИО должно содержать только буквы и разделяться пробелом."; 
        }
        else {
            document.getElementById('fullNameError').textContent = ""; 
        }
        
    } 
 
    // Валидация электронной почты 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(registerEmail.value)) { 
        document.getElementById('registerEmailError').textContent = "Введите корректный адрес электронной почты."; 
} else { 
        document.getElementById('registerEmailError').textContent = ""; 
    } 
 
    // Валидация даты рождения (допустим, чтобы пользователю было 18 лет) 
    const today = new Date(); 
    const birth = new Date(birthDate.value); 
    const age = today.getFullYear() - birth.getFullYear(); 
    if (age < 16) { 
        document.getElementById('birthDateError').textContent = "Вам должно быть 16 лет или больше."; 
    } else { 
        document.getElementById('birthDateError').textContent = ""; 
    } 
 
    // Валидация номера телефона 
    const phonePattern = /^(\+7\s?)?\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(phone.value)) { 
        document.getElementById('phoneError').textContent = "Введите корректный номер телефона."; 
    } else { 
        document.getElementById('phoneError').textContent = ""; 
    } 
 
    // Валидация паролей 
    if (registerPassword.value.length < 6) { 
        document.getElementById('registerPasswordError').textContent = "Пароль должен быть не менее 6 символов."; 
    } else { 
        document.getElementById('registerPasswordError').textContent = ""; 
    } 
 
    if (registerPassword.value !== confirmPassword.value) { 
        document.getElementById('confirmPasswordError').textContent = "Пароли не совпадают."; 
    } else { 
        document.getElementById('confirmPasswordError').textContent = ""; 
    } 
}); 
 
// Валидация входа 
loginForm.addEventListener('input', function (event) { 
    const loginEmail = document.getElementById('loginEmail'); 
    const loginPassword = document.getElementById('loginPassword'); 
 
    // Валидация электронной почты 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (loginEmail.value && !emailPattern.test(loginEmail.value)) { 
        document.getElementById('loginEmailError').textContent = "Введите корректный адрес электронной почты."; 
    } else { 
        document.getElementById('loginEmailError').textContent = ""; 
    } 
 
    // Валидация пароля 
    if (loginPassword.value.length < 6) { 
        document.getElementById('loginPasswordError').textContent = "Пароль должен быть не менее 6 символов."; 
    } else { 
        document.getElementById('loginPasswordError').textContent = ""; 
    } 
});

showTab('login');