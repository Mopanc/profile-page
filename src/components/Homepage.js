import styled from "styled-components";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Main from "./Main";


const Homepage = (props) => {
    return (
        <Container>
            <Layout>
                <LeftSide />
                <Main />
                <RightSide />
            </Layout>
        </Container>
    )
}


const Container = styled.div`
    padding-top: 5px;
    max-width: 100%;
    
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(350px, 6fr) minmax(0, 12fr) minmax(350px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    /*grid-template-row: auto;*/
    margin: 25px 10px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

export default Homepage;