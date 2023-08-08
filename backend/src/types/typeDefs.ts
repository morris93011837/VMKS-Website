import { GraphQLScalarType, Kind } from 'graphql';

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'DateTime custom scalar type',
  async serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a Date object');
  },
  async parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a number');
  },
  async parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  ### Define Data Structure ###
  
  scalar DateTime

  input AnnouncementInput {
    title: String!
    content: String!
  }

  input ToolInput {
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    remain: Int!
  }

  input ToolUsageUpdateInput {
    usage: Int!
    remain: Int!
  }

  input MachineInput {
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
  }

  input MaterialInput {  
    name: String!
    partName: String
    category: String!
    valuable: Boolean!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    fee: Int!
    remain: Int!
  }

  input MaterialUsageUpdateInput {
    usage: Int!
    remain: Int!
  }
  
  input ThreeDPInput{
    name:         String!
    category:     String!
    position:     String!
    description:  String!
    photoLink:    String!
    usage:        Int!
    tutorialLink: String!
    broken:       Boolean!
  }

  input UserMaterialInput{
    name:       String!
    partName:   String
    borrowerId: Int!
    borrowNum:  Int!
    returnDate: String
    status:     String!
  }

  input UserInput {
    name: String!
    studentID: String!
    password: String!
    photoLink: String!   
    threeDPId: Int           
    laserCutAvailable: Boolean!        
  }

  type Announcement {
    id: Int!
    title: String!
    date: String!
    content: String!
  }

  input DisposableMaterialInput {  
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    fee: Int
    remain: Boolean!
  }

  type DisposableMaterial {
    id: Int!     
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    fee: Int
    remain: Boolean!
  }

  type Material {
    id: Int!
    name: String!
    partName: String
    category: String!
    valuable: Boolean!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    fee: Int!
    remain: Int!
  }

  type Tool {
    id: Int!
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
    remain: Int!
  }

  type Machine {
    id: Int!
    name: String!
    partName: String
    category: String!
    position: String!
    description: String!
    photoLink: String!
    usage: Int!
    tutorialLink: String!
  }

  type ThreeDP {
    id:           Int!    
    name:         String!
    category:     String!
    position:     String!
    description:  String!
    photoLink:    String!
    usage:        Int!
    tutorialLink: String!
    waitingId:    [Int]
    broken:       Boolean!
  }

  type UserMaterial {
    id:         Int!
    name:       String!
    partName:   String
    borrowerId: Int!
    borrowNum:  Int!
    borrowDate: String!
    returnDate: String
    status:     String!
  }

  type User {
    id: Int!
    name: String!
    studentID: String!
    password: String!
    photoLink: String!
    threeDPId: Int
    laserCutAvailable: Boolean!
    borrowHistoryId: [Int]
  }


  ### Define Resolvers ###

  type Query {
    AllAnnouncements: [Announcement]
    AllDisposableMaterials: [DisposableMaterial]
    AllMaterials: [Material]
    SearchMaterialsByCategory(category: String!): [Material]
    SearchMaterialsByPosition(position: String!): [Material]
    AllTools: [Tool]
    SearchToolsByCategory(category: String!): [Tool]
    SearchToolsByPosition(position: String!): [Tool]
    AllMachines: [Machine]
    SearchMachinesByCategory(category: String!): [Machine]
    SearchMachinesByPosition(position: String!): [Machine]
    AllUser: [User]
    AllUserMaterials: [UserMaterial]
    AllThreeDP: [ThreeDP]
    SearchThreeDPByCategory(category: String!): [ThreeDP]
    SearchThreeDPByPosition(position: String!): [ThreeDP]
  }

  type Mutation {
    AddAnnouncement(announcementInput: AnnouncementInput!): Announcement
    DeleteAnnouncement(id: Int!): Announcement
    EditAnnouncement(id: Int!, announcementInput: AnnouncementInput!): Announcement
    AddTool(toolInput: ToolInput!): Tool
    DeleteTool(id: Int!): Tool
    EditTool(id: Int!, toolInput: ToolInput!): Tool
    ToolUsageUpdate(id: Int!, toolUsageUpdateInput: ToolUsageUpdateInput!): Tool # update usage & remain
    AddDisposableMaterial(disposableMaterialInput: DisposableMaterialInput!): DisposableMaterial
    AddMachine(machineInput: MachineInput!): Machine
    DeleteMachine(id: Int!): Machine
    EditMachine(id: Int!, machineInput: MachineInput!): Machine
    AddMaterial(materialInput: MaterialInput!): Material
    DeleteMaterial(id: Int!): Material
    EditMaterial(id: Int!, materialInput: MaterialInput!): Material
    MaterialUsageUpdate(id: Int!, materialUsageUpdateInput: MaterialUsageUpdateInput!): Material
    AddUserMaterial(userMaterialInput: UserMaterialInput!): UserMaterial
    DeleteUserMaterial(id: Int!): UserMaterial
    AddThreeDP(threeDPInput: ThreeDPInput!): ThreeDP
    DeleteThreeDP(id: Int!): ThreeDP
    AddUser(userInput: UserInput!) : User
    DeleteUser(id: Int!): User
  }

  type Subscription {
    AnnouncementCreated: Announcement
    AnnouncementDeleted: Announcement
    AnnouncementUpdated: Announcement
  }
`;

export { typeDefs, DateTime }
