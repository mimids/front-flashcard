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
};

export type CreateVocabularyInput = {
  id?: string | null;
  word: string;
  meaning: string;
  lang_word: string;
  lang_meaning: string;
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
};

export type UpdateVocabularyInput = {
  id: string;
  word?: string | null;
  meaning?: string | null;
  lang_word?: string | null;
  lang_meaning?: string | null;
};

export type DeleteVocabularyInput = {
  id: string;
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
  } | null>;
  nextToken?: string | null;
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
          }
          nextToken
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
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVocabulary">>
  >;
}
