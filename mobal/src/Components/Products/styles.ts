import styled from 'styled-components/native';

export const Container = styled.ScrollView`

`;

export const ProductsContent = styled.TouchableOpacity`
    margin: 0 0 32px;
    align-items: center;
    justify-content:center;
    background-color: ${props => props.theme.colors.inputBackground};
`;
export const ProductImage = styled.ImageBackground`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px;
    width: 100%;
    height: 200px;
`;
export const ProductName = styled.Text`

`;