import { Validator } from './validator';
class UserValidator implements Validator {
  name = 'users';
  url = 'user';
  uniques = ['email'];
  jsonSchema = {
    $jsonSchema: {
      bsonType: 'object',
      additionalProperties: false,
      required: ['email', 'password'],
      properties: {
        _id: {},
        updatedDate: {
          bsonType: 'date'
        },
        createdDate: {
          bsonType: 'date'
        },
        email: {
          bsonType: 'string',
          uniqueItems: true
        },
        password: {
          bsonType: 'string'
        },
        verify: {
          bsonType: 'bool'
        },
        profile: {
          bsonType: 'object'
        },
        role: {
          enum: ['ADMIN', 'USER']
        }
      }
    }
  };
}
export default new UserValidator();
