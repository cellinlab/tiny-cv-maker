import React from 'react';
import { useHistory } from 'react-router';

import { shell } from 'electron';

import { ROUTER_ENTRY } from '@common/contants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';

import './index.less';

import Logo from '@assets/logo.png';

function Home () {
  const history = useHistory();

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };

  return (
    <div styleName='home'>
      <div styleName='container'>
        <img src={Logo} alt="" styleName='logo' />
        <div styleName='title'>Tiny CV Maker</div>
        <div styleName='tips'>A template resume making platform to make your resume stand out ~</div>
        <div styleName='action'>
          {
            ROUTER_ENTRY.map((router: TSRouter.Item) => {
              return (
                <div
                  key={router.key}
                  styleName='item'
                  onClick={() => onRouterToLink(router)}
                >{router.text}</div>
              );
            })
          }
        </div>
        <div styleName='footer'>
          <div styleName='copyright-wrap'>
            <p styleName='copyright'>Copyright © 2022-{new Date().getFullYear()} All Rights Reserved. Copyright By Cellinlab</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
