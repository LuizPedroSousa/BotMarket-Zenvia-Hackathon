import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 14px 0 20px;
    align-items:center;
    justify-content:center;
    background-color: ${props => props.theme.colors.backgroundColor};
`;

export const Header = styled.View`
    width: 100%;
    padding: 0 16px;
    justify-content:center;
    align-items:center;
`;

export const Title1 = styled.Text`
    font-size: 28px;
    color: ${props => props.theme.colors.purple};
    font-family: Poppins600;
`;
export const Title2 = styled(Title1)`
    font-family: Poppins700;
    text-transform: capitalize;
`;
export const Title3 = styled(Title2)`
    font-family: Archivo700;
`;

export const Span = styled.View`
    width: 60px;
    background-color: ${props => props.theme.colors.inputBackground};
    height: 60px;
    align-items:center;
    justify-content:center;
    border-radius: 30px;
`;

export const Perfil = styled.View`
    margin: 14px 0 0;
`;

export const Avatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 50px;
`;