import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import Avatar from "../components/Avatar"
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment, faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FatText } from "../components/shared";

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
  max-width: 615px;
`;
const PhotoHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;
const Username = styled.span`
  margin-left: 15px;
`;
const PhotoFile = styled.img`
  width: 100%;
`;
const Caption = styled.div`
  padding: 10px;
`;
const PhotoData = styled.div`
  padding: 15px;
`;
const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  div {
    display: flex;
    align-items: center;
  }
`;
const PhotoAction = styled.div`
  margin-right: 10px;
`;
const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;

function Home() {
  const { data } = useQuery(FEED_QUERY);
  return (
    <Layout>
      <Title>Welcome!</Title>
      {data?.seeFeed?.map((photo) => (
        <PhotoContainer key={photo.id}>
          <PhotoHeader>
            <Avatar lg url={photo.user.avatar} />
            <Username>{photo.user.username}</Username>
          </PhotoHeader>
          <PhotoFile src={photo.file} />
          <Caption>{photo.caption}</Caption>
          <PhotoData>
            <PhotoActions>
              <div>
                <PhotoAction><FontAwesomeIcon size={"2x"} icon={faHeart} /></PhotoAction>
                <PhotoAction><FontAwesomeIcon size={"2x"} icon={faComment} /></PhotoAction>
                <PhotoAction><FontAwesomeIcon size={"2x"} icon={faPaperPlane} /></PhotoAction>
              </div>
              <div>
                <FontAwesomeIcon size={"2x"} icon={faBookmark} />
              </div>
            </PhotoActions>
            <Likes>
              {photo.likes === 1 ? "1 like" : `${photo.likes} likes`}
            </Likes>
          </PhotoData>
        </PhotoContainer>
      ))}
    </Layout>
  );
}

export default Home;