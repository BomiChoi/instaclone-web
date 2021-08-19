import styled from "styled-components";
import { isLoggedInVar, logUserOut, darkModeVar } from "../apollo";
import { useReactiveVar } from "@apollo/client";
import { useHistory } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1``;
const LoginBtn = styled.button``;

function Home() {
    const darkMode = useReactiveVar(darkModeVar);
    const history = useHistory();
    return (
        <Container>
            <Title>Welcome!</Title>
            <LoginBtn onClick={() => logUserOut(history)}>Log out now!</LoginBtn>
            {darkMode ?
                <button onClick={() => darkModeVar(false)}>Dark Mode</button>
                : <button onClick={() => darkModeVar(true)}>Light Mode</button>
            }
        </Container>
    );
}

export default Home;