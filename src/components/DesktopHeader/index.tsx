import React from 'react';

import { 
  Container, 
  Wrapper, 
  LinkedInIcon, 
  SearchInput, 
  HomeIcon, 
  NotificationsIcon, 
  ProfileCircle, 
  CaretDownIcon } 
  from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>
        <div className="right">
          <nav>
            <button className="active">
            <HomeIcon  />
            </button>
            <span>Início</span>
            <button>
              <NotificationsIcon  />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://avatars1.githubusercontent.com/u/2992033?s=460&u=eb3472cdc7ec17b1183580e140f693fe3addb039&v=4"/>
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  )
}

export default DesktopHeader;