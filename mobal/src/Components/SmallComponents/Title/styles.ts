import styled from 'styled-components/native';

export const TitleContent = styled.Text`
    background-color: ${props => props.theme.colors.primary};
    margin: 0 0 22px;
    padding: 8px 32px 14px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 32px;
    font-size: 22px;
    font-family: Poppins600;
    color: ${props => props.theme.colors.buttonText};
`;