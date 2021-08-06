import faker, { fake } from 'faker'

export class Factory {


    static dados () {
        
            
                return {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    email: faker.internet.email(),
                    phoneNumber: faker.phone.phoneNumber(),
                    address: faker.address.streetAddress(),
                    password: faker.internet.password(),

                }
                case 'invalid:'
                   return {
            }    
        } 
