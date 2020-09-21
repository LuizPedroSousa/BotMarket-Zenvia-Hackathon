import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 30px 30px 0;
    width: 90%;
    height: 350px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColor};
    border-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin: 20px 0;
    padding: 25px 30px;
    height: 40px;
    background-color: ${props => props.theme.colors.buttonPrimary};
`;

export const ButtonName = styled.Text`
    font-family: Poppins500;
    font-size: 20px;
    color: ${props => props.theme.colors.buttonText};
`;