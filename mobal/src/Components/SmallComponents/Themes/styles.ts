import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const CardContainer = styled.View`
    align-items:center;
    justify-content:center;
    background-color: ${props => props.theme.colors.secondary};
    padding: 20px;
    border-radius: 10px;
    border-bottom-right-radius: 32px;
`

export const CardContent = styled.View`
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    border-bottom-right-radius: 32px;
    align-items:center;
    justify-content:center;
    background-color: ${props => props.theme.colors.purple};
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.buttonText};
    font-size: 23px;
    font-family: Poppins600;
`