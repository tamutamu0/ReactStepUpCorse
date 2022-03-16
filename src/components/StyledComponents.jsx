import styled from "styled-components";

export const StyledConponents = () => {
    return (
        <Container>
            <Title >- styled components -</Title>
            <Buttonn >FIGHT!</Buttonn>
        </Container>
    );
};

const Container = styled.div`
    width:200px;
    border:solid 2px #392eff;
    border-radius:20px;
    padding:8px;
    margin:8px;
    display:frex;
    justify-content:space-around;
    align-items:center;
`;
const Title = styled.p`
    margin:0;
    color:#3d84a8;
`
const Buttonn = styled.div`
    background-color:#abedd8;
    border:none;
    padding:8px;
    border-radius:8px;
`