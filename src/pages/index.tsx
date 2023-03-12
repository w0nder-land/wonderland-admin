import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';
// export const getServerSideProps = async () => {
//   const { data } = await client.query({
//     query: gql`
//       query {
//         getUser(userId: 7) {
//           id
//           birthday
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       data,
//     },
//   };
// };

const MEMBER_DETAIL = gql`
  query GetUser {
    getUser(userId: "7") {
      id
      socialType
      providerId
      username
      password
      nickname
      email
      sex
      birthday
      profileImage
      lastLogin
      active
    }
  }
`;

const STAR_WARS_QUERY = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

const GIT = gql`
  query {
    viewer {
      login
    }
  }
`;

const Home: NextPage = () => {
  const { loading, data } = useQuery(GIT);

  console.log(loading, 'data', data);

  return <>ㅇㅇㅇㅇ</>;
};

export default Home;
