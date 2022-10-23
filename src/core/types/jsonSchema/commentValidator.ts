import { Validator } from './validator';
class CommentValidator implements Validator {
  name = 'comments';
  url = 'comment';
  uniques: string[] = [];
  jsonSchema = {
    $jsonSchema: {
      bsonType: 'object',
      additionalProperties: false,
      required: ['body'],
      properties: {
        _id: {},
        updatedDate: {
          bsonType: 'date'
        },
        createdDate: {
          bsonType: 'date'
        },
        linkId: {
          bsonType: 'string',
          uniqueItems: true
        },
        ownerId: {
          bsonType: 'string',
          uniqueItems: true
        },
        rank: {
          bsonType: 'int',
          uniqueItems: true
        },
        body: {
          bsonType: 'string',
          uniqueItems: false
        }
      }
    }
  };
}
export default new CommentValidator();
