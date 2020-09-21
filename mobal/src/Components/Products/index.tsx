import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  ProductName,
  ProductImage,
  ProductsContent,
} from './styles';

import AllProducts from '../../Utils/ContextApi/AllProducts';

interface ProductProps {
  item: typeof AllProducts[0];
}
const Products: React.FC = () => {
  const ProductItem: React.FC<ProductProps> = ({ item }) => {
    return (
      <ProductsContent>
        <ProductImage
          resizeMode="contain"
          source={{ uri: `${item.source}` }}
        >
          <ProductName>
            {item.name}
          </ProductName>
        </ProductImage>
      </ProductsContent>
    );
  }
  return (
    <Container>
      {AllProducts.map(item => {
        return (
          <ProductItem
            item={item}
            key={item.name}
          />
        );
      })}
    </Container>
  );
};

export default Products;
