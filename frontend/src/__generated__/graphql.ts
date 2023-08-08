/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Announcement = {
  __typename?: 'Announcement';
  content: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type AnnouncementInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type DisposableMaterial = {
  __typename?: 'DisposableMaterial';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fee?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  remain: Scalars['Boolean']['output'];
  tutorialLink: Scalars['String']['output'];
  usage: Scalars['Int']['output'];
};

export type DisposableMaterialInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  fee?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  remain: Scalars['Boolean']['input'];
  tutorialLink: Scalars['String']['input'];
  usage: Scalars['Int']['input'];
};

export type Machine = {
  __typename?: 'Machine';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  tutorialLink: Scalars['String']['output'];
  usage: Scalars['Int']['output'];
};

export type MachineInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  tutorialLink: Scalars['String']['input'];
  usage: Scalars['Int']['input'];
};

export type Material = {
  __typename?: 'Material';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fee: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  remain: Scalars['Int']['output'];
  tutorialLink: Scalars['String']['output'];
  usage: Scalars['Int']['output'];
  valuable: Scalars['Boolean']['output'];
};

export type MaterialInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  fee: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  remain: Scalars['Int']['input'];
  tutorialLink: Scalars['String']['input'];
  usage: Scalars['Int']['input'];
  valuable: Scalars['Boolean']['input'];
};

export type MaterialUsageUpdateInput = {
  remain: Scalars['Int']['input'];
  usage: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AddAnnouncement?: Maybe<Announcement>;
  AddDisposableMaterial?: Maybe<DisposableMaterial>;
  AddMachine?: Maybe<Machine>;
  AddMaterial?: Maybe<Material>;
  AddThreeDP?: Maybe<ThreeDp>;
  AddTool?: Maybe<Tool>;
  AddUser?: Maybe<User>;
  AddUserMaterial?: Maybe<UserMaterial>;
  DeleteAnnouncement?: Maybe<Announcement>;
  DeleteMachine?: Maybe<Machine>;
  DeleteMaterial?: Maybe<Material>;
  DeleteThreeDP?: Maybe<ThreeDp>;
  DeleteTool?: Maybe<Tool>;
  DeleteUser?: Maybe<User>;
  DeleteUserMaterial?: Maybe<UserMaterial>;
  EditAnnouncement?: Maybe<Announcement>;
  EditMachine?: Maybe<Machine>;
  EditMaterial?: Maybe<Material>;
  EditTool?: Maybe<Tool>;
  MaterialUsageUpdate?: Maybe<Material>;
  ToolUsageUpdate?: Maybe<Tool>;
};


export type MutationAddAnnouncementArgs = {
  announcementInput: AnnouncementInput;
};


export type MutationAddDisposableMaterialArgs = {
  disposableMaterialInput: DisposableMaterialInput;
};


export type MutationAddMachineArgs = {
  machineInput: MachineInput;
};


export type MutationAddMaterialArgs = {
  materialInput: MaterialInput;
};


export type MutationAddThreeDpArgs = {
  threeDPInput: ThreeDpInput;
};


export type MutationAddToolArgs = {
  toolInput: ToolInput;
};


export type MutationAddUserArgs = {
  userInput: UserInput;
};


export type MutationAddUserMaterialArgs = {
  userMaterialInput: UserMaterialInput;
};


export type MutationDeleteAnnouncementArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMachineArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMaterialArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteThreeDpArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteToolArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserMaterialArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditAnnouncementArgs = {
  announcementInput: AnnouncementInput;
  id: Scalars['Int']['input'];
};


export type MutationEditMachineArgs = {
  id: Scalars['Int']['input'];
  machineInput: MachineInput;
};


export type MutationEditMaterialArgs = {
  id: Scalars['Int']['input'];
  materialInput: MaterialInput;
};


export type MutationEditToolArgs = {
  id: Scalars['Int']['input'];
  toolInput: ToolInput;
};


export type MutationMaterialUsageUpdateArgs = {
  id: Scalars['Int']['input'];
  materialUsageUpdateInput: MaterialUsageUpdateInput;
};


export type MutationToolUsageUpdateArgs = {
  id: Scalars['Int']['input'];
  toolUsageUpdateInput: ToolUsageUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  AllAnnouncements?: Maybe<Array<Maybe<Announcement>>>;
  AllDisposableMaterials?: Maybe<Array<Maybe<DisposableMaterial>>>;
  AllMachines?: Maybe<Array<Maybe<Machine>>>;
  AllMaterials?: Maybe<Array<Maybe<Material>>>;
  AllThreeDP?: Maybe<Array<Maybe<ThreeDp>>>;
  AllTools?: Maybe<Array<Maybe<Tool>>>;
  AllUser?: Maybe<Array<Maybe<User>>>;
  AllUserMaterials?: Maybe<Array<Maybe<UserMaterial>>>;
  SearchMachinesByCategory?: Maybe<Array<Maybe<Machine>>>;
  SearchMachinesByPosition?: Maybe<Array<Maybe<Machine>>>;
  SearchMaterialsByCategory?: Maybe<Array<Maybe<Material>>>;
  SearchMaterialsByPosition?: Maybe<Array<Maybe<Material>>>;
  SearchThreeDPByCategory?: Maybe<Array<Maybe<ThreeDp>>>;
  SearchThreeDPByPosition?: Maybe<Array<Maybe<ThreeDp>>>;
  SearchToolsByCategory?: Maybe<Array<Maybe<Tool>>>;
  SearchToolsByPosition?: Maybe<Array<Maybe<Tool>>>;
};


export type QuerySearchMachinesByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchMachinesByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchMaterialsByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchMaterialsByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchThreeDpByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchThreeDpByPositionArgs = {
  position: Scalars['String']['input'];
};


export type QuerySearchToolsByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type QuerySearchToolsByPositionArgs = {
  position: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  AnnouncementCreated?: Maybe<Announcement>;
  AnnouncementDeleted?: Maybe<Announcement>;
  AnnouncementUpdated?: Maybe<Announcement>;
};

export type ThreeDp = {
  __typename?: 'ThreeDP';
  broken: Scalars['Boolean']['output'];
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  tutorialLink: Scalars['String']['output'];
  usage: Scalars['Int']['output'];
  waitingId?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type ThreeDpInput = {
  broken: Scalars['Boolean']['input'];
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  tutorialLink: Scalars['String']['input'];
  usage: Scalars['Int']['input'];
};

export type Tool = {
  __typename?: 'Tool';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  photoLink: Scalars['String']['output'];
  position: Scalars['String']['output'];
  remain: Scalars['Int']['output'];
  tutorialLink: Scalars['String']['output'];
  usage: Scalars['Int']['output'];
};

export type ToolInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  photoLink: Scalars['String']['input'];
  position: Scalars['String']['input'];
  remain: Scalars['Int']['input'];
  tutorialLink: Scalars['String']['input'];
  usage: Scalars['Int']['input'];
};

export type ToolUsageUpdateInput = {
  remain: Scalars['Int']['input'];
  usage: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  borrowHistoryId?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  id: Scalars['Int']['output'];
  laserCutAvailable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  photoLink: Scalars['String']['output'];
  studentID: Scalars['String']['output'];
  threeDPId?: Maybe<Scalars['Int']['output']>;
};

export type UserInput = {
  laserCutAvailable: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  photoLink: Scalars['String']['input'];
  studentID: Scalars['String']['input'];
  threeDPId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserMaterial = {
  __typename?: 'UserMaterial';
  borrowDate: Scalars['String']['output'];
  borrowNum: Scalars['Int']['output'];
  borrowerId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  partName?: Maybe<Scalars['String']['output']>;
  returnDate?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type UserMaterialInput = {
  borrowNum: Scalars['Int']['input'];
  borrowerId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  partName?: InputMaybe<Scalars['String']['input']>;
  returnDate?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', AllAnnouncements?: Array<{ __typename?: 'Announcement', id: number, title: string, date: string, content: string } | null> | null };


export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllAnnouncements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;