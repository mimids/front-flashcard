import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VocabularyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Vocabulary {
  readonly id: string;
  readonly word: string;
  readonly meaning: string;
  readonly lang_word: string;
  readonly lang_meaning: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Vocabulary, VocabularyMetaData>);
  static copyOf(source: Vocabulary, mutator: (draft: MutableModel<Vocabulary, VocabularyMetaData>) => MutableModel<Vocabulary, VocabularyMetaData> | void): Vocabulary;
}