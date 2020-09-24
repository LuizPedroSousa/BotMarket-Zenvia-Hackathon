import React, { useContext, useMemo } from 'react';
import { FlatList } from 'react-native';
import Header from '../../Components/Header';
import Heading from '../../Components/SmallComponents/Heading';
import Themes from '../../Components/SmallComponents/Themes';
import Title from '../../Components/SmallComponents/Title';

import {
  Container,
  Main,
  Wrapper,
} from './styles';

import CardContext from '../../Utils/ContextApi/Card/context';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}
const Setting: React.FC = () => {
  //Contexts
  const { setViewCard } = useContext(CardContext);

  //Memos
  const { data, indexes } = useMemo(() => {
    const Items: Item[] = [
      {
        key: "Page_Heading",
        render: () => <Heading>Configurações</Heading>,
      },
      {
        key: 'Themes',
        render: () => <Title onPress={setViewCard}>Themes</Title>,
        isTitle: true,
      },
      {
        key: 'Card',
        render: () => <Themes />
      }
    ]

    const indexes: number[] = [];

    Items.forEach((item, index) => item.isTitle && indexes.push(index));
    return {
      data: Items,
      indexes,
    };
  }, [])
  return (
    <Wrapper>
      <Header />
      <Container>
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indexes}
            onRefresh={() => { }}
            refreshing={false}
          >

          </FlatList>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Setting;
