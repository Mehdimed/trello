import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 15px;
`;

const Title = styled.div`
    font-size: 12px;
    font-weight: 600;
`;

const Description = styled.div`
    font-size: 10px;
    font-weight: 400;
`;

export default function Card({ card }) {
    return (
      <Container>
        <Title>{card.title}</Title>
        <Description>{card.description}</Description>
      </Container>
    )
  }