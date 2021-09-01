import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Avatar from "../components/Avatar"
import Layout from "../components/Layout";

const Title = styled.h1`
font-size: 30px;
text-align: center;
`;

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments
      createdAt
      isMine
    }
  }
`;

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
`;
const PhotoHeader = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  margin-left: 5px;
`;

function Home() {
  const { data } = useQuery(FEED_QUERY);
  return (
    <Layout>
      <Title>Welcome!</Title>
      {data?.seeFeed?.map((photo) => (
        <PhotoContainer key={photo.id}>
          <PhotoHeader>
            <Avatar url={photo.user.avatar} />
            <Username>{photo.user.username}</Username>
          </PhotoHeader>
        </PhotoContainer>
      ))}
    </Layout>
  );
}

export default Home;