import React, { useContext, useState } from 'react';
import Form from '../../Components/Form';
import Input from '../../Components/Input';
import { AntDesign } from '@expo/vector-icons';
import avatarIcon from '../../../assets/Images/avatarIcon.png';
import * as animatable from 'react-native-animatable';
import {
  Container,
  Header,
  Title1,
  Title2,
  Title3,
  Perfil,
  Avatar,
} from './styles';
import { ThemeContext } from 'styled-components';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../Services/api';
import { AsyncStorage, Text } from 'react-native';

const Register = ({ navigation }) => {
  //States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [repeatEmail, setReapeatEmail] = useState('');

  //Contexts
  const { colors } = useContext(ThemeContext);

  //Inline Styles 
  const InputStyles = {
    left: 30,
    top: 25,
  }

  //Animations
  const Title1Anim = animatable.createAnimatableComponent(Title1);
  const Title2Anim = animatable.createAnimatableComponent(Title2);
  const Title3Anim = animatable.createAnimatableComponent(Title3);

  //Other Functions
  const createAccount = () => {
    api.post('/employees', {
      name: "Luiz Henrique",
      email: "luizpedrosousa63@gmail.com",
      avatar: "https://banner2.cleanpng.com/20190702/tl/kisspng-computer-icons-portable-network-graphics-avatar-tr-clip-directory-professional-transparent-amp-png-5d1bfa95e508d4.2980489715621147099381.jpg",
      status: 1,
    })
      .then(res => {
        AsyncStorage.setItem('token', res.data.token);
        setTimeout(() => {
          navigation.push('Home');
        }, 1000)
      })
      .catch(res => {
        console.log(res);
        setTimeout(() => {
          navigation.push('Register');
        }, 1000)
      });
  }
  return (
    <Container
    >
      <Header>
        <Title1Anim
          animation={'bounceInLeft'}
          duration={3000}
          useNativeDriver={true}
        >
          O Primeira passo
        </Title1Anim>
        <Title2Anim
          animation={'bounceInRight'}
          duration={2000}
          useNativeDriver={true}
        >
          é prencher
        </Title2Anim>
        <Title3Anim
          animation={'bounceInLeft'}
          duration={1000}
          useNativeDriver={true}
        >
          este formulário
        </Title3Anim>
      </Header>
      <Perfil>
        <Avatar
          source={avatarIcon}
        />
      </Perfil>
      <Form
        onPress={createAccount}
        buttonName="Cadastrar-se"
      >
        <Input
          label="Nome"
          onChangeText={text => setName(text)}
          styles={name != "" ? { ...InputStyles } : {}}
        />
        <Input
          label="Email"
          onChangeText={text => setEmail(text)}
          styles={email != "" ? { ...InputStyles } : {}}
        />
        <Input
          label="Repita seu email"
          onChangeText={text => setReapeatEmail(text)}
          styles={repeatEmail != "" ? { ...InputStyles } : {}}
        />
      </Form>
    </Container>
  );
};

export default Register;
