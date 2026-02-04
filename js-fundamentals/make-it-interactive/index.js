const emailForm = document.querySelector(".user-to-email");
const firstInput = document.getElementById("firstName");
const lastInput = document.getElementById("lastName");
const emailSpan = document.querySelector('[data-js="generated-email"]');

function generateEmail(user) {
    return (
        user.firstName.toLowerCase() +
        "." +
        user.lastName.toLowerCase() +
        "@example.com"
    );
}

emailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {
        firstName: firstInput.value,
        lastName: lastInput.value,
    };

    const email = generateEmail(user);
    emailSpan.textContent = email;
});

const userForm = document.querySelector(".email-to-user");
const emailInput = document.getElementById("email");
const nameSpan = document.querySelector('[data-js="generated-name"]');

function getUserFromEmail(email) {
    if (!email.includes("@")) {
        return null;
    }

    const parts = email.split("@");
    if (!parts[0].includes(".")) {
        return null;
    }

    let nameParts = parts[0].split(".");
    nameParts[0] = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1);
    nameParts[1] = nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1);

    const name = {
        firstName: nameParts[0],
        lastName: nameParts[1],
    };
    return name;
}

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const user = getUserFromEmail(email);
    nameSpan.textContent = user.firstName + " " + user.lastName;
});
