import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars1.githubusercontent.com/u/2992033?s=460&u=eb3472cdc7ec17b1183580e140f693fe3addb039&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Saulo Melo</h1>
        <h2>Software Engineer @ Palpite na Rede</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
