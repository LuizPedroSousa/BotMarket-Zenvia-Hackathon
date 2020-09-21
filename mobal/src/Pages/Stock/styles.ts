import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.colors.backgroundColor};
`;

export const Container = styled.View`
    align-items:flex-start;
    justify-content:center;
`;

export const Main = styled.View`
    padding: 14px;
`;

export const Heading = styled.Text`
    margin: 0 0 14px;
    font-size: 46px;
    font-family: Archivo700;
    color: ${props => props.theme.colors.black};
`;

export const Title = styled.Text`
    margin: 0 0 16px;
    font-size: 16px;
    font-family: Poppins600;
    color: ${props => props.theme.colors.textBase};
`;