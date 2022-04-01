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
  onCreateVocabulary: OnCreateVocabularySubscription;
  onUpdateVocabulary: OnUpdateVocabularySubscription;
  onDeleteVocabulary: OnDeleteVocabularySubscription;
  onCreateAnswer: OnCreateAnswerSubscription;
  onUpdateAnswer: OnUpdateAnswerSubscription;
  onDeleteAnswer: OnDeleteAnswerSubscription;
};

export type CreateVocabularyInput = {
  id?: string | null;
  word: string;
  meaning: string;
  lang_word: string;
  lang_meaning: string;
  _version?: number | null;
};

export type ModelVocabularyConditionInput = {
  word?: ModelStringInput | null;
  meaning?: ModelStringInput | null;
  lang_word?: ModelStringInput | null;
  lang_meaning?: ModelStringInput | null;
  and?: Array<ModelVocabularyConditionInput | null> | null;
  or?: Array<ModelVocabularyConditionInput | null> | null;
  not?: ModelVocabularyConditionInput | null;
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

export type Vocabulary = {
  __typename: "Vocabulary";
  id: string;
  word: string;
  meaning: string;
  lang_word: string;
  lang_meaning: string;
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
  _version?: number | null;
};

export type DeleteVocabularyInput = {
  id: string;
  _version?: number | null;
};

export type CreateAnswerInput = {
  id?: string | null;
  isRight?: boolean | null;
  _version?: number | null;
};

export type ModelAnswerConditionInput = {
  isRight?: ModelBooleanInput | null;
  and?: Array<ModelAnswerConditionInput | null> | null;
  or?: Array<ModelAnswerConditionInput | null> | null;
  not?: ModelAnswerConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Answer = {
  __typename: "Answer";
  id: string;
  card?: Vocabulary | null;
  isRight?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAnswerInput = {
  id: string;
  isRight?: boolean | null;
  _version?: number | null;
};

export type DeleteAnswerInput = {
  id: string;
  _version?: number | null;
};

export type ModelVocabularyFilterInput = {
  id?: ModelIDInput | null;
  word?: ModelStringInput | null;
  meaning?: ModelStringInput | null;
  lang_word?: ModelStringInput | null;
  lang_meaning?: ModelStringInput | null;
  and?: Array<ModelVocabularyFilterInput | null> | null;
  or?: Array<ModelVocabularyFilterInput | null> | null;
  not?: ModelVocabularyFilterInput | null;
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

export type ModelVocabularyConnection = {
  __typename: "ModelVocabularyConnection";
  items: Array<Vocabulary | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelAnswerFilterInput = {
  id?: ModelIDInput | null;
  isRight?: ModelBooleanInput | null;
  and?: Array<ModelAnswerFilterInput | null> | null;
  or?: Array<ModelAnswerFilterInput | null> | null;
  not?: ModelAnswerFilterInput | null;
};

export type ModelAnswerConnection = {
  __typename: "ModelAnswerConnection";
  items: Array<Answer | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateVocabularyMutation = {
  __typename: "Vocabulary";
  id: string;
  word: string;
  meaning: string;
  lang_word: string;
  lang_meaning: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateVocabularyMutation = {
  __typename: "Vocabulary";
  id: string;
  word: string;
  meaning: string;
  lang_word: string;
  lang_meaning: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteVocabularyMutation = {
  __typename: "Vocabulary";
  id: string;
  word: string;
  meaning: string;
  lang_word: string;
  lang_meaning: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateAnswerMutation = {
  __typename: "Answer";
  id: string;
  card?: {
    __typename: "Vocabulary";
    id: string;
    word: string;
    meaning: string;
    lang_word: string;
    lang_meaning: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  isRight?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAnswerMutation = {
  __typename: "Answer";
  id: string;
  card?: {
    __typename: "Vocabulary";
    id: string;
    word: string;
    meaning: string;
    lang_word: string;
    lang_meaning: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  isRight?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteAnswerMutation = {
  __typename: "Answer";
  id: string;
  card?: {
    __typename: "Vocabulary";
    id: string;
    word: string;
    meaning: string;
    lang_word: string;
    lang_meaning: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  isRight?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetVocabularyQuery = {
  __typename: "Vocabulary";
  id: string;
  word: string;
  meaning: string;
  lang_word: string;
  lang_meaning: string;
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
    id: string;
    word: string;
    meaning: string;
    lang_word: string;
    lang_meaning: string;
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
    id: string;
    word: string;
    meaning: string;
    lang_word: string;
    lang_meaning: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetAnswerQuery = {
  __typename: "Answer";
  id: string;
  card?: {
    __typename: "Vocabulary";
    id: string;
    word: string;
    meaning: string;
    lang_word: string;
    lang_meaning: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  isRight?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListAnswersQuery = {
  __typename: "ModelAnswerConnection";
  items: Array<{
    __typename: "Answer";
    id: string;
    card?: {
      __typename: "Vocabulary";
      id: string;
      word: string;
      meaning: string;
      lang_word: string;
      lang_meaning: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    isRight?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAnswersQuery = {
  __typename: "ModelAnswerConnection";
  items: Array<{
    __typename: "Answer";
    id: string;
    card?: {
      __typename: "Vocabulary";
      id: string;
      word: string;
      meaning: string;
      lang_word: string;
      lang_meaning: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    isRight?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateVocabularySubscription = {
  __typename: "Vocabulary";
  id: string;
  word: string;
  meaning: string;
  lang_word: string;
  lang_meaning: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateVocabularySubscription = {
  __typename: "Vocabulary";
  id: string;
  word: string;
  meaning: string;
  lang_word: string;
  lang_meaning: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteVocabularySubscription = {
  __typename: "Vocabulary";
  id: string;
  word: string;
  meaning: string;
  lang_word: string;
  lang_meaning: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateAnswerSubscription = {
  __typename: "Answer";
  id: string;
  card?: {
    __typename: "Vocabulary";
    id: string;
    word: string;
    meaning: string;
    lang_word: string;
    lang_meaning: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  isRight?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateAnswerSubscription = {
  __typename: "Answer";
  id: string;
  card?: {
    __typename: "Vocabulary";
    id: string;
    word: string;
    meaning: string;
    lang_word: string;
    lang_meaning: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  isRight?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteAnswerSubscription = {
  __typename: "Answer";
  id: string;
  card?: {
    __typename: "Vocabulary";
    id: string;
    word: string;
    meaning: string;
    lang_word: string;
    lang_meaning: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  isRight?: boolean | null;
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
  async CreateAnswer(
    input: CreateAnswerInput,
    condition?: ModelAnswerConditionInput
  ): Promise<CreateAnswerMutation> {
    const statement = `mutation CreateAnswer($input: CreateAnswerInput!, $condition: ModelAnswerConditionInput) {
        createAnswer(input: $input, condition: $condition) {
          __typename
          id
          card {
            __typename
            id
            word
            meaning
            lang_word
            lang_meaning
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          isRight
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
    return <CreateAnswerMutation>response.data.createAnswer;
  }
  async UpdateAnswer(
    input: UpdateAnswerInput,
    condition?: ModelAnswerConditionInput
  ): Promise<UpdateAnswerMutation> {
    const statement = `mutation UpdateAnswer($input: UpdateAnswerInput!, $condition: ModelAnswerConditionInput) {
        updateAnswer(input: $input, condition: $condition) {
          __typename
          id
          card {
            __typename
            id
            word
            meaning
            lang_word
            lang_meaning
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          isRight
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
    return <UpdateAnswerMutation>response.data.updateAnswer;
  }
  async DeleteAnswer(
    input: DeleteAnswerInput,
    condition?: ModelAnswerConditionInput
  ): Promise<DeleteAnswerMutation> {
    const statement = `mutation DeleteAnswer($input: DeleteAnswerInput!, $condition: ModelAnswerConditionInput) {
        deleteAnswer(input: $input, condition: $condition) {
          __typename
          id
          card {
            __typename
            id
            word
            meaning
            lang_word
            lang_meaning
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          isRight
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
    return <DeleteAnswerMutation>response.data.deleteAnswer;
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
  async GetAnswer(id: string): Promise<GetAnswerQuery> {
    const statement = `query GetAnswer($id: ID!) {
        getAnswer(id: $id) {
          __typename
          id
          card {
            __typename
            id
            word
            meaning
            lang_word
            lang_meaning
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          isRight
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
    return <GetAnswerQuery>response.data.getAnswer;
  }
  async ListAnswers(
    filter?: ModelAnswerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAnswersQuery> {
    const statement = `query ListAnswers($filter: ModelAnswerFilterInput, $limit: Int, $nextToken: String) {
        listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            card {
              __typename
              id
              word
              meaning
              lang_word
              lang_meaning
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            isRight
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
    return <ListAnswersQuery>response.data.listAnswers;
  }
  async SyncAnswers(
    filter?: ModelAnswerFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAnswersQuery> {
    const statement = `query SyncAnswers($filter: ModelAnswerFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAnswers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            card {
              __typename
              id
              word
              meaning
              lang_word
              lang_meaning
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            isRight
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
    return <SyncAnswersQuery>response.data.syncAnswers;
  }
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

  OnCreateAnswerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAnswer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAnswer {
        onCreateAnswer {
          __typename
          id
          card {
            __typename
            id
            word
            meaning
            lang_word
            lang_meaning
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          isRight
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAnswer">>
  >;

  OnUpdateAnswerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAnswer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAnswer {
        onUpdateAnswer {
          __typename
          id
          card {
            __typename
            id
            word
            meaning
            lang_word
            lang_meaning
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          isRight
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAnswer">>
  >;

  OnDeleteAnswerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAnswer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAnswer {
        onDeleteAnswer {
          __typename
          id
          card {
            __typename
            id
            word
            meaning
            lang_word
            lang_meaning
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          isRight
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAnswer">>
  >;
}
