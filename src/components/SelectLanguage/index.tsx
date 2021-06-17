import React, { useState } from 'react';
import {
  Container,
  Title,
  Arrow,
  Categories,
  Category,
  ContainerModalCategories,
  TitleCategory,
  CategorySelect,
  Icon,
} from './styles';

const SelectLanguage: React.FC = () => {
  const [currentLaguange, setCurrentLanguage] = useState('Português Brasil');
  const [isOpenModalCategories, setisOpenModalCategories] = useState(false);

  const toggleModal = () => {
    setisOpenModalCategories(!isOpenModalCategories);
  };

  const setCurrentCategory = (category: string) => {
    setCurrentLanguage(category);
  }

  return (
    <Container>
      <Title>Mudar idioma</Title>
      <Categories style={{
        borderBottomWidth: 1,
        borderBottomColor: '#000'
      }}>
        <CategorySelect>{currentLaguange}</CategorySelect>
        {isOpenModalCategories ? 
        <Icon name="chevron-up" onPress={toggleModal} /> : 
        <Icon name="chevron-down" onPress={toggleModal} />}
      </Categories>

      {isOpenModalCategories && (
        <ContainerModalCategories>
          <Category 
          isSelected={currentLaguange === 'Português Brasil' ? true : false} 
          onPress={() => setCurrentCategory('Português Brasil')}>
            <TitleCategory>
              Português Brasil
            </TitleCategory>
          </Category>
          <Category 
            isSelected={currentLaguange === 'Inglês' ? true : false} 
            onPress={() => setCurrentCategory('Inglês')}
          >
            <TitleCategory>
              Inglês
            </TitleCategory>
          </Category>
        </ContainerModalCategories>
      )}
    </Container>
  );
};
export { SelectLanguage };