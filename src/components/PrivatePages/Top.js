import styled from "styled-components";

export default function Top() {
    return (
        <Wrapper>
            <span>TrackIt</span>
            <img src='https://static.natgeo.pt/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp?w=768' alt='foto do perfil' />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    right: 0;

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`;