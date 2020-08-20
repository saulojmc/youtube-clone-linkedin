import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars1.githubusercontent.com/u/2992033?s=460&u=eb3472cdc7ec17b1183580e140f693fe3addb039&v=4" />
      <SearchInput placeholder="Pesquisar"/>
      <MessageIcon />
    </Container>
  )
}

export default MobileHeader;