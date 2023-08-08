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
    }
}

export { Subscription }