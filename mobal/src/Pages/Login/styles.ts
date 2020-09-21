import styled from 'styled-components/native';
import { shade } from 'polished';
export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.backgroundColor};
`;


export const OptionLogin = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const RememberContent = styled.View`
    flex-direction: row-reverse;
    align-items:center;
    justify-content: center;
    margin: 0 16px;
`;

export const CheckBoxTrue = styled.TouchableOpacity`
    width: 28px;
    border-radius: 8px;
    align-items:center;
    justify-content:center;
    height: 28px;
    background-color: ${props => props.theme.colors.green};
`;
export const CheckBoxFalse = styled(CheckBoxTrue)`
    background-color: ${props => props.theme.colors.purple};
`;

export const Remember = styled.Text`
    flex-direction: row;
    color: ${props => props.theme.colors.buttonText};
    font-size: 13px;
    font-family: Poppins600;
    margin-left: 16px;
`;
export const ForgotPassword = styled.Text`
    color: ${props => props.theme.colors.textBase};
    margin: 0 16px;
    font-size: 12px;
    font-family: Poppins500;
`;

export const Header = styled.View`
    align-items:center;
    justify-content:center;
`;
export const Title = styled.Text`
    font-size: 36px;
    font-family: Poppins700;
`;

export const Span = styled.View`
    width: 110px;
    margin: 16px 0 0 12px;
    height: 110px;
    background-color: ${props => props.theme.colors.black};
    align-items:center;
    border-radius: 8px;
    justify-content:center;
`;
export const ZenviaLogo = styled.Image`
    margin-bottom: 12px;
    width: 90px;
    height: 30px;
`;

export const NewAccontContent = styled.View`
    align-items: center;
    width: 100%;
    max-width: 350px;
    justify-content:space-between;
    flex-direction: row;
`;

export const Create = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors.black};
    font-family: Archivo600;
`;

export const Link = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors.pink};
    font-family: Archivo700;
`;

export const FreeContent = styled.View`
    flex-direction: row;
    align-items:center;
    justify-content:center;
`;

export const Free = styled.Text`
    color: ${props => shade(0.1, props.theme.colors.yellow)};
    font-size: 16px;
    font-family: Poppins700;
    margin-right: 12px;
`;