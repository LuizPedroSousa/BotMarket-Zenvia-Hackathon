import styled from 'styled-components/native';

export const InputBlock = styled.View`
    padding: 20px;
    width: 100%;
    
`;

export const Label = styled.Text`
    position: absolute;
    z-index: 1000;
    top: 30px;
    left: 60px;
`;

export const InputText = styled.TextInput`
    position: relative;
    width: 100%;
    max-width: 320px;
    border-radius: 8px;
    padding: 10px 60px;
    background-color: ${props => props.theme.colors.inputBackground};
`;