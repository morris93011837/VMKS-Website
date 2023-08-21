import { gql } from "../__generated__"

const ADD_ANNOUNCEMENT_MUTATION = gql(`
    mutation AddAnnouncement($announcementInput: AnnouncementInput!) {
        AddAnnouncement(announcementInput: $announcementInput) {
          id
          title
          date
          content
        }
      }
`);

export { ADD_ANNOUNCEMENT_MUTATION };