import React, { useState, useContext, useEffect } from 'react';
import Form from '../../Components/Form';
import Input from '../../Components/Input';
import api from '../../Services/api';
import backgroundImage from '../../../assets/Images/background.svg';
import logoIcon from '../../../assets/Images/zenviaIcon.png';
import {
  Container,
  OptionLogin,
  CheckBoxTrue,
  CheckBoxFalse,
  RememberContent,
  Remember,
  ForgotPassword,
  Title,
  ZenviaLogo,
  Header,
  Span,
  Create,
  Link,
  Free,
  NewAccontContent,
  FreeContent,
} from './styles';
import { AsyncStorage } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Login = ({ navigation }) => {

  //Contexts
  const { colors } = useContext(ThemeContext);
  //States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [status, setStatus] = useState('');
  //Toggle Functions
  const toggleCheckBox = () => {
    setCheckBox(!checkBox ? true : false);
  }

  const toggleNavigation = () => {
    setNavigate(true);
  }

  //OtherFunctions
  const enterAccount = () => {
    api.post('/employees/login', {
      email: "luan.farias_bvs@outlook.com",
      password: "luan.farias_bvs@outlook.com",
    }).then(res => {
      AsyncStorage.setItem('token', res.data.token);
      setStatus('Login Realizado com sucesso');
      setTimeout(() => {
        navigation.navigate('Home');
      }, 2000);
    }).catch(res => {
      setStatus('Falha ao efeutar login');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    })


  }

  useEffect(() => {
    setNavigate(false);
    navigate && navigation.push('Register');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <Title>
          Seja Bem vindo!
        </Title>
        <Span>
          <ZenviaLogo
            source={logoIcon}
          />
        </Span>
      </Header>
      <Form
        msg={status}
        buttonName="Login"
        onPress={enterAccount}
      >
        <Input
          label="Email"
          styles={email != "" ? {
            left: 35,
            top: 25,
          } : {}}
          onChangeText={text => setEmail(text)}
        />
        <Input
          label="Senha"
          styles={password != "" ? {
            left: 35,
            top: 25,
          } : {}}
          onChangeText={text => setPassword(text)}
        />
        <OptionLogin>
          <RememberContent>
            <Remember
              onPress={toggleCheckBox}
            >
              Lembrar-me
            </Remember>

            {
              checkBox
                ?
                <CheckBoxTrue
                  onPress={toggleCheckBox}
                >
                  <AntDesign
                    name="check"
                    size={20}
                    color={colors.textBase}
                  />
                </CheckBoxTrue>
                :
                <CheckBoxFalse
                  onPress={toggleCheckBox}
                >
                  <AntDesign
                    name="close"
                    size={20}
                    color={colors.inputBackground}
                  />
                </CheckBoxFalse>
            }
          </RememberContent>
          <ForgotPassword>
            Esqueceu Sua Senha?
          </ForgotPassword>
        </OptionLogin>
      </Form>
      <NewAccontContent>
        <TouchableOpacity
          onPress={toggleNavigation}
        >
          <Create>
            Não tem conta ainda?
        </Create>
          <Link>
            Cadastre-se
          </Link>
        </TouchableOpacity>
        <FreeContent>
          <Free>
            É De graça
          </Free>
          <AntDesign
            name="heart"
            size={20}
            color={colors.purple}
          />
        </FreeContent>
      </NewAccontContent>
    </Container>
  );
};

export default Login;
