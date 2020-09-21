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