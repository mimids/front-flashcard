import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Answer {
  readonly id?: string | null;
  readonly vocabularyID?: string | null;
  readonly isRight?: boolean | null;
  constructor(init: ModelInit<Answer>);
}

type CardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VocabularyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Card {
  readonly id: string;
  readonly answers?: Answer | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Card, CardMetaData>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card, CardMetaData>) => MutableModel<Card, CardMetaData> | void): Card;
}

export declare class Vocabulary {
  readonly id: string;
  readonly word?: string | null;
  readonly meaning?: string | null;
  readonly lang_word?: string | null;
  readonly lang_meaning?: string | null;
  readonly categoryID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Vocabulary, VocabularyMetaData>);
  static copyOf(source: Vocabulary, mutator: (draft: MutableModel<Vocabulary, VocabularyMetaData>) => MutableModel<Vocabulary, VocabularyMetaData> | void): Vocabulary;
}

export declare class Category {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}