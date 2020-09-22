import React, { useMemo } from 'react';
import { FlatList, Text } from 'react-native';
import {
  Container,
  Main,
  Wrapper,
} from './styles';

import Plus from '../../Components/Plus';
import Header from '../../Components/Header';
import Heading from '../../Components/SmallComponents/Heading';
import Title from '../../Components/SmallComponents/Title';
interface Item {
  key: string;
  render: JSX.Element;
  isTitle: boolean;
}
const AlterStock: React.FC = () => {
  //Memos
  const { data, indexes } = useMemo(() => {
    const Items: Item[] = [
      {
        key: "Page_Heading",
        render: () => <Heading>Alterar Estoque</Heading>,
      },
      {
        key: 'Recent_Produtcts',
        render: () => <Title>Todos os produtos</Title>,
        isTitle: true,
      },
      {
        key: 'Plus',
        render: () => <Plus />
      },
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

export default AlterStock;
