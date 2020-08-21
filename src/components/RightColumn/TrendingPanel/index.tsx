import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Rocketseat</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Microsoft</span>
              <span className="subtext">há 1 d • 223 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Shawee</span>
              <span className="subtext">há 1 d • 196 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da CyberLabs</span>
              <span className="subtext">há 1 d • 115 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Globo.com</span>
              <span className="subtext">há 1 d • 106 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Telecom.Tim</span>
              <span className="subtext">há 1 d • 99 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
