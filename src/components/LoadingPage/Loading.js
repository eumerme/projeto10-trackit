import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
    return(
        <Wrapper>
            <ThreeDots
                color="#52B6FF"
                height={80}
                width={80}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: auto;
    height: auto;
    display: grid;
    place-content: center;
`;