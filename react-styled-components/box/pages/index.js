import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
    return (
        <FlexContainer>
            <BoxWithClassName />
            <BoxWithClassName isBlack />
            <BoxWithStyledComponents />
            <BoxWithStyledComponents $isBlack />
        </FlexContainer>
    );
}

const FlexContainer = styled.div`
    display: flex;
`;
