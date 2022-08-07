import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
    return (
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
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
`;