import { gql, useQuery } from '@apollo/client';
import client from 'lib/apollo-client';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useEffect } from 'react';

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
  query getUser($userId: String!) {
    id
  }
`;

const Home: NextPage = () => {
  const { data } = useQuery(MEMBER_DETAIL, {
    variables: {
      userId: 7,
    },
  });

  console.log(data);

  return <>fddd</>;
};

export default Home;
