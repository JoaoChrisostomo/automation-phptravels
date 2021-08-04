import faker, { fake } from 'faker'

export class Factory {

    static cadastro() {
        
        
                return {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    email: faker.internet.email(),
                    phoneNumber: faker.phone.phoneNumber(),
                    address: faker.address.streetAddress(),
                    password: faker.internet.password(),

                }
        }
    }
