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
    }
}

export { Subscription }