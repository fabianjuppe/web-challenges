/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

export function getNameAndCountry(city) {
    return [city.name, city.country];
}

export function getRelocatedCity(city1, city2) {
    if (city2 === undefined) {
        city2 = { name: "Berlin", country: "Germany" };
    }

    const nameAndCountry = getNameAndCountry(city2);
    const country = nameAndCountry[1];

    const relocatedCity = {};
    for (const key in city1) {
        if (city1.hasOwnProperty(key)) {
            relocatedCity[key] = city1[key];
        }
    }

    relocatedCity.country = country;
    return relocatedCity;
}
