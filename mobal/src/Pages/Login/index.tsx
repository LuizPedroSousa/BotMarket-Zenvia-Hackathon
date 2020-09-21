import React, { useState, useContext } from 'react';
import Form from '../../Components/Form';
import Input from '../../Components/Input';
import api from '../../Services/api';
import { Text } from 'react-native';
import { Container } from './styles';
import { AsyncStorage } from 'react-native';
const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sucess, setSucess] = useState('');
  const enterAccount = () => {
    api.post('/employees/login', {
      email: 'luizpedrosousa64@gmail.com',
      password: 'luizpedrosousa64@gmail.com',
    }).then((res) => {
      AsyncStorage.setItem('token', res.data.token);
      setSucess(`${res.data.token}`);
    }).catch((res) => {
      setSucess(`${res}`);
    })


  }
  return (
    <Container>
      <Form
        buttonName="Login"
        onPress={enterAccount}
      >
        <Text>
          {sucess}
        </Text>
        <Input
          label="Email"
          onChangeText={text => setEmail(text)}
        />
        <Input
          label="Senha"
          onChangeText={text => setPassword(text)}
        />
      </Form>
    </Container>
  );
};

export default Login;
