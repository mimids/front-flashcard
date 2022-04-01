// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vocabulary, Answer } = initSchema(schema);

export {
  Vocabulary,
  Answer
};