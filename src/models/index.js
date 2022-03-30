// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vocabulary } = initSchema(schema);

export {
  Vocabulary
};