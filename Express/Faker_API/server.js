const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;


// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newFakeUser = {
     _id: faker.random.uuid(),
     firstName : faker.name.firstName(),
     lastName: faker.name.lastName(),
     phoneNumber: faker.phone.phoneNumber(),
     email: faker.internet.email(),
     password: faker.internet.password()
    };
    return newFakeUser;
};
// const newFakeUser = createUser();
// console.log(newFakeUser);


const createCompany = () => {
    const newFakeCompany = {
        _id: faker.random.uuid(),
        companyName: faker.company.companyName(),
        address:{
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFakeCompany;
};
// const newFakeCompany = createCompany();
// console.log(newFakeCompany);


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
});
app.get("/api/companies/new", (req, res) => {
        res.json( createCompany() );
});

app.get("/api/user/company", (req, res) => {
    res.json( {'user':createUser(),'company':createCompany()} );
});

