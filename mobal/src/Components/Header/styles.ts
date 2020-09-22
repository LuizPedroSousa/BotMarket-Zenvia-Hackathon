import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const statusBarHeight =
    Platform.OS == "android"
        ? Constants.statusBarHeight : 0

export const StatusBar = styled.SafeAreaView`
    background-color: ${props => props.theme.colors.primary};
    padding: 0 14px 14px;
    padding-top: ${statusBarHeight};
`;

export const Perfil = styled.ImageBackground`
    width: 55px;
    height: 55px;
    border-radius: 20px;
    align-items:flex-end;
    justify-content: flex-end;
`;

export const Status = styled.View`
    border: 4px ${props => props.theme.colors.backgroundColor};
    width: 20px;
    border-radius: 20px;
    height: 20px;
    background-color: ${props => props.theme.colors.green};
`;


