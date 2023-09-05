export const regLogInOutAuth = () => {
    const btnRegister = document.querySelector('.register');
    const btnCloseModalRegistration = document.querySelector('.btn-close-modal-registration');
    const btnSignUpcards = document.querySelector('.sign-up-btn');
    const wrapperModalReg = document.querySelector('.wrapper-modal-register');
    const profileButton = document.querySelector('.link-user');
    const menuAuthorization = document.querySelector('.wrapper-menu-auth');
    const titleDropMenu = document.querySelector('.title-menu');
    const btnLogInDropMenu = document.querySelector('.log-in');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const formRegistartion = document.getElementById('form-registration');
    const formLogIn = document.getElementById('form-log-in');
    const btnSignUp = document.querySelector('.sign-up-btn-modal');
    const initials = document.querySelector('.initials');
    const firstLastName = document.querySelector('.first-last');
    const visitsCount = document.querySelector('.visits-number');
    const bonusesCount = document.querySelector('.bonuses-number');
    const booksCount = document.querySelector('.books-number');
    const userCardNumber = document.querySelector('.card-number-user');
    const btnsWrapper = document.querySelector('.btns-wrapper');
    const btnMyProfile = document.createElement('button');
    const btnLogOut = document.createElement('button');
    const btnCloseUserProfile = document.querySelector('.btn-close-modal-user-profile');
    const modalUserProfile = document.querySelector('.wrapper-modal-user-profile');
    const btnLogIn = document.querySelector('.log-in');
    const btnLogInCards = document.querySelector('.log-in-btn');
    const btnCloseModalLogIn = document.querySelector('.btn-close-modal-log-in');
    const buyBtns = document.querySelectorAll('.book-buy');
    const wrapperModalLogIn = document.querySelector('.wrapper-modal-log-in');
    const inputEmailCardLogIn = document.getElementById('log-in-email-card');
    const inputPasswordLogIn = document.getElementById('log-in-password');

    const userIsRegistered = () => localStorage.getItem('userCredits') ? true : false;
    let userCreditsStorage = {};

    const userCredits = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cardNumber: '',
        logged: false,
        visits: 0,
        bonuses: 0,
        books: 0,
    }

    let inputEmailCardLogInValue;
    let inputPasswordLogInValue;

    const getLocalStorageUserCredits = (registered) => {
        if (!registered) return;
        const getLocalCredits = localStorage.getItem('userCredits');
        userCreditsStorage = JSON.parse(getLocalCredits);
    }

    const setTooltip = () => {
        getLocalStorageUserCredits(userIsRegistered());
        if (userCreditsStorage.logged) {
            profileButton.setAttribute('title', `${userCreditsStorage.firstName + ' ' + userCreditsStorage.lastName}`);
        }
    }

    setTooltip();

    const changeProfileMenu = (registered) => {
        if (!registered && !userCreditsStorage.logged) {
            profileButton.style.background = '';
            profileButton.innerHTML = '';
        } else if (userCreditsStorage.logged) {
            getLocalStorageUserCredits(registered);
            profileButton.style.background = 'none';
            profileButton.innerHTML = `<span class='user-logged'>
                ${userCreditsStorage.firstName[0].toUpperCase() + userCreditsStorage.lastName[0].toUpperCase()}
            </span>`;
            titleDropMenu.textContent = `${userCreditsStorage.cardNumber}`;
            btnLogInDropMenu.remove();
            btnMyProfile.classList.add('btn-my-profile');
            btnMyProfile.textContent = 'My profile';
            btnsWrapper.appendChild(btnMyProfile);
            btnRegister.remove();
            btnLogOut.classList.add('log-out');
            btnLogOut.textContent = 'Log Out';
            btnsWrapper.appendChild(btnLogOut);
        }
    }

    changeProfileMenu(userIsRegistered());

    //Modal profile user info

    const changeModalUserProfile = () => {
        getLocalStorageUserCredits(userIsRegistered());
        initials.textContent = `${userCreditsStorage.firstName[0].toUpperCase() + userCreditsStorage.lastName[0].toUpperCase()}`;
        firstLastName.textContent = `${userCreditsStorage.firstName + ' ' + userCreditsStorage.lastName}`;
        visitsCount.textContent = `${userCreditsStorage.visits}`;
        bonusesCount.textContent = `${userCreditsStorage.bonuses}`;
        booksCount.textContent = `${userCreditsStorage.books}`;
        userCardNumber.textContent = `${userCreditsStorage.cardNumber}`
    }

    profileButton.addEventListener('mouseover', () => {
        profileButton.getAttribute('title');
    });

    profileButton.addEventListener('click', () => {
        menuAuthorization.classList.add('active-profile-menu');
    });

    btnCloseModalRegistration.addEventListener('click', () => {
        formRegistartion.reset();
        resetColorBorderInput(firstName, lastName, email, password)
        wrapperModalReg.classList.remove('active-blackout');
    });

    btnSignUp.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
    });

    btnSignUpcards.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
    })

    firstName.addEventListener('input', () => {
        userCredits.firstName = firstName.value;
        inputsValidation(firstName);
    });

    lastName.addEventListener('input', () => {
        userCredits.lastName = lastName.value;
        inputsValidation(lastName);
    });

    email.addEventListener('input', () => {
        userCredits.email = email.value;
        inputsValidation(email);
    });

    password.addEventListener('input', () => {
        userCredits.password = password.value;
        inputsValidation(password);
    });

    if (btnLogIn) {
        btnLogIn.addEventListener('click', () => {
            wrapperModalLogIn.classList.add('active-blackout');
        });
    }

    if (btnRegister) {
        btnRegister.addEventListener('click', () => {
            wrapperModalReg.classList.add('active-blackout');
        });
    }

    btnCloseModalLogIn.addEventListener('click', () => {
        wrapperModalLogIn.classList.remove('active-blackout');
    });

    btnLogInCards.addEventListener('click', () => {
        wrapperModalLogIn.classList.add('active-blackout');
    });

    buyBtns.forEach(buy => buy.addEventListener('click', () => {
        wrapperModalLogIn.classList.add('active-blackout');
    }))

    const changeColorBorderInput = (validation, input) => validation ? input.style.borderColor = '#228b22' : input.style.borderColor = '#ff6161';

    const resetColorBorderInput = (...inputs) => {
        inputs.forEach(input => input.style.borderColor = '');
    }

    const inputsValidation = (input) => {
        const minLengthFirstLastName = 1;
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const minLengthPassword = 8;
        switch (input.id) {
            case 'first-name':
                (changeColorBorderInput(input.value.length >= minLengthFirstLastName, input))
                break;
            case 'last-name':
                (changeColorBorderInput(input.value.length >= minLengthFirstLastName, input))
                break;
            case 'email':
                (changeColorBorderInput(pattern.test(input.value), input))
                break;
            case 'password':
                (changeColorBorderInput(password.value.length >= minLengthPassword, input))
                break;
            default:
                input.style.borderColor = '';
        }
    }

    formRegistartion.addEventListener('submit', (event) => {
        event.preventDefault();
        const randomCardNumber = Math.floor(Math.random() * 1000000000);
        userCredits.cardNumber = randomCardNumber;
        userCredits.logged = true;
        userCredits.visits += 1;
        localStorage.setItem('userCredits', JSON.stringify(userCredits));
        formRegistartion.reset();
        resetColorBorderInput(firstName, lastName, email, password);
        setTimeout(() => {
            wrapperModalReg.classList.remove('active-blackout');
        }, 1000);
        getLocalStorageUserCredits(userIsRegistered());
        changeProfileMenu(userCreditsStorage.logged);
        setTooltip();
        changeModalUserProfile();
        btnSignUp.style.background = '#32CD32';
        setInterval(() => {
            btnSignUp.style.background = '';
        }, 1000)
    });

    // User logged

    btnMyProfile.addEventListener('click', () => {
        menuAuthorization.classList.remove('active-profile-menu');
        changeModalUserProfile();
        modalUserProfile.classList.add('active-blackout');
    })

    const userLogOut = () => {
        getLocalStorageUserCredits(userIsRegistered());
        userCreditsStorage.logged = false;
        localStorage.setItem('userCredits', JSON.stringify(userCreditsStorage));
        setTooltip();
        changeProfileMenu(userCreditsStorage.logged);
        btnLogOut.remove();
        btnMyProfile.remove();
        btnsWrapper.appendChild(btnLogInDropMenu);
        btnsWrapper.appendChild(btnRegister);
        titleDropMenu.textContent = 'Profile';
    };

    btnLogOut.addEventListener('click', () => userLogOut());

    btnCloseUserProfile.addEventListener('click', () => {
        modalUserProfile.classList.remove('active-blackout');
    });

    inputEmailCardLogIn.addEventListener('input', () => {
        changeColorBorderInput(inputEmailCardLogIn.value.length >= 1, inputEmailCardLogIn);
        inputEmailCardLogInValue = inputEmailCardLogIn.value;
    });

    inputPasswordLogIn.addEventListener('input', () => {
        changeColorBorderInput(inputPasswordLogIn.value.length >= 8, inputPasswordLogIn);
        inputPasswordLogInValue = inputPasswordLogIn.value;
    });

    formLogIn.addEventListener('submit', (event) => {
        if (!userIsRegistered()) {
            alert('User not registered')
        };
        event.preventDefault();
        if (userCreditsStorage.email === inputEmailCardLogInValue || userCreditsStorage.cardNumber === +inputEmailCardLogInValue) {
            userCreditsStorage.logged = true;
            userCreditsStorage.visits += 1;
            localStorage.setItem('userCredits', JSON.stringify(userCreditsStorage));
            changeProfileMenu(userIsRegistered());
            setTooltip();
            setTimeout(() => {
                wrapperModalLogIn.classList.remove('active-blackout');
            }, 1000)
        }
    })
}