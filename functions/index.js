const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(functions.config().sendgrid.key);

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// If the value doesnt exist, just default
// to an empty string.
function clean(value) {
    return value ? value: '';
}

app.post('/form/newClientInformation', async (req, res) => {

    const data = req.body;

    // Create JSON data which will populate the sendgrid template
    const templateData = {
        date: data.date,
        subject: 'New Client Information',
        clientInformation: [
            {
                name: 'Name',
                value: clean(data.name)
            },
            {
                name: 'Email',
                value: clean(data.email)
            },
            {
                name: 'Home Address',
                value: clean(data.homeAddress)
            },
            {
                name: 'Postal Address',
                value: clean(data.postalAddress)
            },
            {
                name: 'Home Phone',
                value: clean(data.homePhone)
            },
            {
                name: 'Mobile Phone',
                value: clean(data.mobilePhone)
            },
            {
                name: 'Work Phone',
                value: clean(data.workPhone)
            },
        ],
        pets: []
    }

    data.pets.map((pet) => (
        templateData.pets.push([
            {
                name: 'Name',
                value: clean(pet.name)
            },
            {
                name: 'Breed',
                value: clean(pet.breed)
            },
            {
                name: 'Colour',
                value: clean(pet.colour)
            },
            {
                name: 'Sex',
                value: clean(pet.sex)
            },
            {
                name: 'Age',
                value: clean(pet.age)
            },
            {
                name: 'Weight',
                value: clean(pet.weight)
            },
            {
                name: 'Desexed',
                value: clean(pet.desexed)
            },
            {
                name: 'Microchip Number',
                value: clean(pet.microchipNumber)
            },
            {
                name: 'Flea Control',
                value: clean(pet.fleaControl)
            },
            {
                name: 'Tick Control',
                value: clean(pet.tickControl)
            },
            {
                name: 'Intestinal Worming',
                value: clean(pet.intestinalWorming)
            },
            {
                name: 'Heartworm Prevention',
                value: clean(pet.heartwormPrevention)
            },
            {
                name: 'Diet',
                value: clean(pet.diet)
            },
        ])
    ));

    const msg = {
        to: 'helpingpawstest@gmail.com',
        from: 'admin@helpingpawsvet.com',
        templateId: 'd-8b52a3be62eb44209c17f8ccd1c1286f',
        dynamic_template_data: templateData
    };
    try {
        await sgMail.send(msg);
        res.send({
            status: 'success'
        })
    } catch(error) {
        res.send({
            status: 'error',
            message: error
        })
    }
});

exports.api = functions.https.onRequest(app);