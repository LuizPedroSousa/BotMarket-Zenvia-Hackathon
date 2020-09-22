import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    padding: 14px;
    margin: 0 0 32px;
`;

export const ItemContainer = styled.TouchableOpacity`
    width: 100%;
    align-items:center;
    justify-content:center;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 16px;
`;
export const Product = styled.ImageBackground`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-start;
    width: 200px;
    height: 200px;
`;
export const ProductName = styled.Text`
    background-color: ${props => props.theme.colors.purple};
    padding:  0 10px;
    border-radius: 8px;
    font-size: 20px;
    margin-right: 32px;
    margin: 0 0 16px;
    font-family: Poppins600;
    color: ${props => props.theme.colors.buttonText};
`;