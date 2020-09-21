import 'styled-components'
declare module 'styled-components' {
    interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secondary: string,
            backgroundColor: string,
            buttonPrimary: string,
            green: string,
            black: string,
            purple: string,
            inputBackground: string,
            textBase: string,
        }
    }
}