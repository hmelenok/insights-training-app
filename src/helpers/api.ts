import {gql} from 'graphql-request';
import client from './GraphQLClient';

export const fetchUser = () => {
  const query = gql`
    query UserInfo {
      user {
        id
        email
        accountRole
        avatarURL
        isActive
        profileInfo {
          fullName
        }
        createdAt
      }
    }
  `;

  return client.request(query);
};
