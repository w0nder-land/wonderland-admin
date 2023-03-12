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
