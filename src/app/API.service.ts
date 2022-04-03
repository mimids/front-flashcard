/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateCard: OnCreateCardSubscription;
  onUpdateCard: OnUpdateCardSubscription;
  onDeleteCard: OnDeleteCardSubscription;
  onCreateVocabulary: OnCreateVocabularySubscription;
  onUpdateVocabulary: OnUpdateVocabularySubscription;
  onDeleteVocabulary: OnDeleteVocabularySubscription;
  onCreateCategory: OnCreateCategorySubscription;
  onUpdateCategory: OnUpdateCategorySubscription;
  onDeleteCategory: OnDeleteCategorySubscription;
};

export type CreateCardInput = {
  id?: string | null;
  answers?: AnswerInput | null;
  name?: string | null;
  _version?: number | null;
};

export type AnswerInput = {
  id?: string | null;
  vocabularyID?: string | null;
  isRight?: boolean | null;
};

export type ModelCardConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCardConditionInput | null> | null;
  or?: Array<ModelCardConditionInput | null> | null;
  not?: ModelCardConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Card = {
  __typename: "Card";
  id: string;
  answers?: Answer | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Answer = {
  __typename: "Answer";
  id?: string | null;
  vocabularyID?: string | null;
  isRight?: boolean | null;
};

export type UpdateCardInput = {
  id: string;
  answers?: AnswerInput | null;
  name?: string | null;
  _version?: number | null;
};

export type DeleteCardInput = {
  id: string;
  _version?: number | null;
};

export type CreateVocabularyInput = {
  id?: string | null;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
  categoryID?: string | null;
  _version?: number | null;
};

export type ModelVocabularyConditionInput = {
  word?: ModelStringInput | null;
  meaning?: ModelStringInput | null;
  lang_word?: ModelStringInput | null;
  lang_meaning?: ModelStringInput | null;
  categoryID?: ModelIDInput | null;
  and?: Array<ModelVocabularyConditionInput | null> | null;
  or?: Array<ModelVocabularyConditionInput | null> | null;
  not?: ModelVocabularyConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Vocabulary = {
  __typename: "Vocabulary";
  id?: string | null;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
  categoryID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateVocabularyInput = {
  id: string;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
  categoryID?: string | null;
  _version?: number | null;
};

export type DeleteVocabularyInput = {
  id: string;
  _version?: number | null;
};

export type CreateCategoryInput = {
  id?: string | null;
  name?: string | null;
  _version?: number | null;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type Category = {
  __typename: "Category";
  id?: string | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
  _version?: number | null;
};

export type DeleteCategoryInput = {
  id: string;
  _version?: number | null;
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCardFilterInput | null> | null;
  or?: Array<ModelCardFilterInput | null> | null;
  not?: ModelCardFilterInput | null;
};

export type ModelCardConnection = {
  __typename: "ModelCardConnection";
  items: Array<Card | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelVocabularyFilterInput = {
  id?: ModelIDInput | null;
  word?: ModelStringInput | null;
  meaning?: ModelStringInput | null;
  lang_word?: ModelStringInput | null;
  lang_meaning?: ModelStringInput | null;
  categoryID?: ModelIDInput | null;
  and?: Array<ModelVocabularyFilterInput | null> | null;
  or?: Array<ModelVocabularyFilterInput | null> | null;
  not?: ModelVocabularyFilterInput | null;
};

export type ModelVocabularyConnection = {
  __typename: "ModelVocabularyConnection";
  items: Array<Vocabulary | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection";
  items: Array<Category | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateCardMutation = {
  __typename: "Card";
  id: string;
  answers?: {
    __typename: "Answer";
    id?: string | null;
    vocabularyID?: string | null;
    isRight?: boolean | null;
  } | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCardMutation = {
  __typename: "Card";
  id: string;
  answers?: {
    __typename: "Answer";
    id?: string | null;
    vocabularyID?: string | null;
    isRight?: boolean | null;
  } | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteCardMutation = {
  __typename: "Card";
  id: string;
  answers?: {
    __typename: "Answer";
    id?: string | null;
    vocabularyID?: string | null;
    isRight?: boolean | null;
  } | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateVocabularyMutation = {
  __typename: "Vocabulary";
  id?: string | null;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
  categoryID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateVocabularyMutation = {
  __typename: "Vocabulary";
  id?: string | null;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
  categoryID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteVocabularyMutation = {
  __typename: "Vocabulary";
  id?: string | null;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
  categoryID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id?: string | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id?: string | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id?: string | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetCardQuery = {
  __typename: "Card";
  id: string;
  answers?: {
    __typename: "Answer";
    id?: string | null;
    vocabularyID?: string | null;
    isRight?: boolean | null;
  } | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListCardsQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    answers?: {
      __typename: "Answer";
      id?: string | null;
      vocabularyID?: string | null;
      isRight?: boolean | null;
    } | null;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCardsQuery = {
  __typename: "ModelCardConnection";
  items: Array<{
    __typename: "Card";
    id: string;
    answers?: {
      __typename: "Answer";
      id?: string | null;
      vocabularyID?: string | null;
      isRight?: boolean | null;
    } | null;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetVocabularyQuery = {
  __typename: "Vocabulary";
  id?: string | null;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
  categoryID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListVocabulariesQuery = {
  __typename: "ModelVocabularyConnection";
  items: Array<{
    __typename: "Vocabulary";
    id?: string | null;
    word?: string | null;
    meaning?: string | null;
    lang_word?: string | null;
    lang_meaning?: string | null;
    categoryID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncVocabulariesQuery = {
  __typename: "ModelVocabularyConnection";
  items: Array<{
    __typename: "Vocabulary";
    id?: string | null;
    word?: string | null;
    meaning?: string | null;
    lang_word?: string | null;
    lang_meaning?: string | null;
    categoryID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id?: string | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListCategoriesQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id?: string | null;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCategoriesQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id?: string | null;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateCardSubscription = {
  __typename: "Card";
  id: string;
  answers?: {
    __typename: "Answer";
    id?: string | null;
    vocabularyID?: string | null;
    isRight?: boolean | null;
  } | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateCardSubscription = {
  __typename: "Card";
  id: string;
  answers?: {
    __typename: "Answer";
    id?: string | null;
    vocabularyID?: string | null;
    isRight?: boolean | null;
  } | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteCardSubscription = {
  __typename: "Card";
  id: string;
  answers?: {
    __typename: "Answer";
    id?: string | null;
    vocabularyID?: string | null;
    isRight?: boolean | null;
  } | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateVocabularySubscription = {
  __typename: "Vocabulary";
  id?: string | null;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
  categoryID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateVocabularySubscription = {
  __typename: "Vocabulary";
  id?: string | null;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
  categoryID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteVocabularySubscription = {
  __typename: "Vocabulary";
  id?: string | null;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
  categoryID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id?: string | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id?: string | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id?: string | null;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCard(
    input: CreateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<CreateCardMutation> {
    const statement = `mutation CreateCard($input: CreateCardInput!, $condition: ModelCardConditionInput) {
        createCard(input: $input, condition: $condition) {
          __typename
          id
          answers {
            __typename
            id
            vocabularyID
            isRight
          }
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardMutation>response.data.createCard;
  }
  async UpdateCard(
    input: UpdateCardInput,
    condition?: ModelCardConditionInput
  ): Promise<UpdateCardMutation> {
    const statement = `mutation UpdateCard($input: UpdateCardInput!, $condition: ModelCardConditionInput) {
        updateCard(input: $input, condition: $condition) {
          __typename
          id
          answers {
            __typename
            id
            vocabularyID
            isRight
          }
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardMutation>response.data.updateCard;
  }
  async DeleteCard(
    input: DeleteCardInput,
    condition?: ModelCardConditionInput
  ): Promise<DeleteCardMutation> {
    const statement = `mutation DeleteCard($input: DeleteCardInput!, $condition: ModelCardConditionInput) {
        deleteCard(input: $input, condition: $condition) {
          __typename
          id
          answers {
            __typename
            id
            vocabularyID
            isRight
          }
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardMutation>response.data.deleteCard;
  }
  async CreateVocabulary(
    input: CreateVocabularyInput,
    condition?: ModelVocabularyConditionInput
  ): Promise<CreateVocabularyMutation> {
    const statement = `mutation CreateVocabulary($input: CreateVocabularyInput!, $condition: ModelVocabularyConditionInput) {
        createVocabulary(input: $input, condition: $condition) {
          __typename
          id
          word
          meaning
          lang_word
          lang_meaning
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVocabularyMutation>response.data.createVocabulary;
  }
  async UpdateVocabulary(
    input: UpdateVocabularyInput,
    condition?: ModelVocabularyConditionInput
  ): Promise<UpdateVocabularyMutation> {
    const statement = `mutation UpdateVocabulary($input: UpdateVocabularyInput!, $condition: ModelVocabularyConditionInput) {
        updateVocabulary(input: $input, condition: $condition) {
          __typename
          id
          word
          meaning
          lang_word
          lang_meaning
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVocabularyMutation>response.data.updateVocabulary;
  }
  async DeleteVocabulary(
    input: DeleteVocabularyInput,
    condition?: ModelVocabularyConditionInput
  ): Promise<DeleteVocabularyMutation> {
    const statement = `mutation DeleteVocabulary($input: DeleteVocabularyInput!, $condition: ModelVocabularyConditionInput) {
        deleteVocabulary(input: $input, condition: $condition) {
          __typename
          id
          word
          meaning
          lang_word
          lang_meaning
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVocabularyMutation>response.data.deleteVocabulary;
  }
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async GetCard(id: string): Promise<GetCardQuery> {
    const statement = `query GetCard($id: ID!) {
        getCard(id: $id) {
          __typename
          id
          answers {
            __typename
            id
            vocabularyID
            isRight
          }
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardQuery>response.data.getCard;
  }
  async ListCards(
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardsQuery> {
    const statement = `query ListCards($filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
        listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            answers {
              __typename
              id
              vocabularyID
              isRight
            }
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardsQuery>response.data.listCards;
  }
  async SyncCards(
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCardsQuery> {
    const statement = `query SyncCards($filter: ModelCardFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCards(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            answers {
              __typename
              id
              vocabularyID
              isRight
            }
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCardsQuery>response.data.syncCards;
  }
  async GetVocabulary(id: string): Promise<GetVocabularyQuery> {
    const statement = `query GetVocabulary($id: ID!) {
        getVocabulary(id: $id) {
          __typename
          id
          word
          meaning
          lang_word
          lang_meaning
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVocabularyQuery>response.data.getVocabulary;
  }
  async ListVocabularies(
    filter?: ModelVocabularyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVocabulariesQuery> {
    const statement = `query ListVocabularies($filter: ModelVocabularyFilterInput, $limit: Int, $nextToken: String) {
        listVocabularies(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            word
            meaning
            lang_word
            lang_meaning
            categoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVocabulariesQuery>response.data.listVocabularies;
  }
  async SyncVocabularies(
    filter?: ModelVocabularyFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncVocabulariesQuery> {
    const statement = `query SyncVocabularies($filter: ModelVocabularyFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncVocabularies(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            word
            meaning
            lang_word
            lang_meaning
            categoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncVocabulariesQuery>response.data.syncVocabularies;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategories(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategoriesQuery> {
    const statement = `query ListCategories($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategoriesQuery>response.data.listCategories;
  }
  async SyncCategories(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCategoriesQuery> {
    const statement = `query SyncCategories($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCategories(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCategoriesQuery>response.data.syncCategories;
  }
  OnCreateCardListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCard">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCard {
        onCreateCard {
          __typename
          id
          answers {
            __typename
            id
            vocabularyID
            isRight
          }
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCard">>
  >;

  OnUpdateCardListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCard">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCard {
        onUpdateCard {
          __typename
          id
          answers {
            __typename
            id
            vocabularyID
            isRight
          }
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCard">>
  >;

  OnDeleteCardListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCard">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCard {
        onDeleteCard {
          __typename
          id
          answers {
            __typename
            id
            vocabularyID
            isRight
          }
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCard">>
  >;

  OnCreateVocabularyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVocabulary">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVocabulary {
        onCreateVocabulary {
          __typename
          id
          word
          meaning
          lang_word
          lang_meaning
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVocabulary">>
  >;

  OnUpdateVocabularyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVocabulary">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVocabulary {
        onUpdateVocabulary {
          __typename
          id
          word
          meaning
          lang_word
          lang_meaning
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVocabulary">>
  >;

  OnDeleteVocabularyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVocabulary">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVocabulary {
        onDeleteVocabulary {
          __typename
          id
          word
          meaning
          lang_word
          lang_meaning
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVocabulary">>
  >;

  OnCreateCategoryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategory">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategory">>
  >;

  OnUpdateCategoryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategory">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategory">>
  >;

  OnDeleteCategoryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
  >;
}
