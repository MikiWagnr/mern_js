const { faker } = require('@faker-js/faker')
const express = require('express')
const app = express()
const port = 8000
app.use(express.json())
app.use(express.urlencoded({extended :true}))


const createUser = () => {
    const newUser = {
        // id: faker.database.mongodbObjectId(),
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

console.log(createUser())


const createCompany = () => {
    const newCompany = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city : faker.address.cityName(),
            state : faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
};

console.log(createCompany())

app.get("/api", (req, res) => {
    res.json( { message: 'hello world'} );
});

app.get('/api/user/new', (req,res) =>{
    res.json(createUser())
})

app.get('/api/company/new', (req,res) =>{
    res.json(createCompany())
})

app.get('/api/user/company', (req,res) =>{
    res.json({user: createUser(), company: createCompany()})
})


app.listen(port, () =>
    console.log(`Welcome to the Death Star! You are on bridge port: ${port}`))