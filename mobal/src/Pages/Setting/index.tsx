import React, { useMemo } from 'react';
import { FlatList, Text } from 'react-native';
import { Heading, Title } from '../Stock/styles';

import {
  Container,
  Main,
  Wrapper,
} from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}
const Setting: React.FC = () => {
  const { data, indexes } = useMemo(() => {
    const Items: Item[] = [
      {
        key: "Page_Heading",
        render: () => <Heading>Configurações</Heading>,
      },
      {
        key: 'Recent_Produtcts',
        render: () => <Title>Themes</Title>,
        isTitle: true,
      },
      {
        key: 'Recent_Produtcts',
        render: () => <Title>Dark</Title>,
        isTitle: true,
      },
      {
        key: 'Recent_Produtcts',
        render: () => <Title>Light</Title>,
        isTitle: true,
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

export default Setting;
