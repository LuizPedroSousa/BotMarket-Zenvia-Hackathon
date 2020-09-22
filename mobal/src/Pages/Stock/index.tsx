import React, { useMemo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../Components/Header';
import Products from '../../Components/Products';
import ProductsCaroulsel from '../../Components/ProductsCaroulsel';
import Heading from '../../Components/SmallComponents/Heading';
import Title from '../../Components/SmallComponents/Title';

import {
  Wrapper,
  Container,
  Main,
} from './styles';
interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}
const Stock: React.FC = () => {
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
        key: 'Carousel',
        render: () => <ProductsCaroulsel />
      },
      {
        key: 'AllProducts',
        render: () => <Title>Todos os produtos</Title>,
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <Products />
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

export default Stock;
