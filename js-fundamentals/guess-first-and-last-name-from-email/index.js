console.clear();

function getUserFromEmail(email) {
    // if the email does not contain an @, return null
    if (!email.includes("@")) {
        return null;
    }

    // if it does, split the email at @ and use the first part
    const parts = email.split("@");

    // if the part does not have a ., return null
    if (!parts[0].includes(".")) {
        return null;
    }

    // if it does, you know what to do!
    let nameParts = parts[0].split(".");
    nameParts[0] = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1);
    nameParts[1] = nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1);

    const name = {
        firstName: nameParts[0],
        lastName: nameParts[1],
    };
    return name;
}

// logs null
console.log(getUserFromEmail("not an email address"));

// logs null
console.log(getUserFromEmail("nodots@example.com"));

// logs { firstName: 'Jane', lastName: 'Doe' }
console.log(getUserFromEmail("jane.doe@example.com"));
