import { pubsub } from "../PubSub/pubsub.ts"

const Subscription = {
    AnnouncementCreated: {
        subscribe: () => pubsub.asyncIterator(['ANNOUNCEMENT_CREATED'])
    },
    AnnouncementDeleted: {
        subscribe: () => pubsub.asyncIterator(['ANNOUNCEMENT_DELETED'])
    },
    AnnouncementUpdated: {
        subscribe: () => pubsub.asyncIterator(['ANNOUNCEMENT_UPDATED'])
    },
    ToolCreated: {
        subscribe: () => pubsub.asyncIterator(['TOOL_CREATED'])
    },
    ToolDeleted: {
        subscribe: () => pubsub.asyncIterator(['TOOL_DELETED'])
    },
    ToolUpdated: {
        subscribe: () => pubsub.asyncIterator(['TOOL_UPDATED'])
    },
    MachineCreated: {
        subscribe: () => pubsub.asyncIterator(['MACHINE_CREATED'])
    },
    MachineDeleted: {
        subscribe: () => pubsub.asyncIterator(['MACHINE_DELETED'])
    },
    MachineUpdated: {
        subscribe: () => pubsub.asyncIterator(['MACHINE_UPDATED'])
    },
    ThreeDPCreated: {
        subscribe: () => pubsub.asyncIterator(['THREEDP_CREATED'])
    },
    ThreeDPDeleted: {
        subscribe: () => pubsub.asyncIterator(['THREEDP_DELETED'])
    },
    UserMaterialCreated: {
        subscribe: () => pubsub.asyncIterator(['USERMATERIAL_CREATED'])
    },
    UserMaterialDeleted: {
        subscribe: () => pubsub.asyncIterator(['USERMATERIAL_DELETED'])
    },
    UserCreated: {
        subscribe: () => pubsub.asyncIterator(['USER_CREATED'])
    },
    UserDeleted: {
        subscribe: () => pubsub.asyncIterator(['USER_DELETED'])
    }
}

export { Subscription }