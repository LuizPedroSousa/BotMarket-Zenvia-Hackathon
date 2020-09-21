import React, { useContext } from 'react';
import { FlatList, Text } from 'react-native';
import { Heading, Title } from '../Stock/styles';
import {
  Container,
  Main,
  Wrapper,
} from './styles';

import { ThemeContext } from 'styled-components';
import { useMemo } from 'react';
import Plus from '../../Components/Plus';

interface Item {
  key: string;
  render: JSX.Element;
  isTitle: boolean;
}
const AlterStock: React.FC = () => {
  const { data, indexes } = useMemo(() => {
    const Items: Item[] = [
      {
        key: "Page_Heading",
        render: () => <Heading>Estoque</Heading>,
      },
      {
        key: 'Recent_Produtcts',
        render: () => <Title>Produtos Recentes</Title>,
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
