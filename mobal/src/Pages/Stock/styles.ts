import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.colors.backgroundColor};
`;

export const Container = styled.View`
    flex: 1;
    align-items:flex-start;
    justify-content:center;
`;

export const Main = styled.View`
    flex: 1;
    padding: 14px;
`;