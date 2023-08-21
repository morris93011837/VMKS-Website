import { gql } from "../__generated__"

const ALL_ANNOUNCEMENT_QUERY = gql(`
    query AllAnnouncements {
        AllAnnouncements {
            id
            title
            date
            content
        }
    }
`);

export { ALL_ANNOUNCEMENT_QUERY };
