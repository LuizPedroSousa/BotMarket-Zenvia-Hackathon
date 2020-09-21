import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  ItemContainer,
  ProductName,
  Product,
} from './styles';
import Caroulsel from 'react-native-snap-carousel';
import data from '../../Utils/data';
import * as animatable from 'react-native-animatable';

interface ProductProps {
  item: typeof data[0];
}
const ProductsCaroulsel: React.FC = () => {
  const ProductsContainerAnim = animatable.createAnimatableComponent(Container);
  const ProductItem: React.FC<ProductProps> = ({ item }) => {
    return (
      <ItemContainer>
        <Product
          resizeMode="contain"
          source={{ uri: `${item.source}` }}
        >
          <ProductName>
            {item.name}
          </ProductName>
        </Product>
      </ItemContainer>
    );
  }
  return (
    <ProductsContainerAnim
      animation={'bounceInLeft'}
      duration={3000}
      useNativeDriver={true}
    >
      <Caroulsel
        data={data}
        renderItem={ProductItem}
        sliderWidth={350}
        sliderHeight={350}
        itemWidth={300}
        autoplay={true}
      />
    </ProductsContainerAnim>
  );
};

export default ProductsCaroulsel;
