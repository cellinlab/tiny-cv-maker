import React from 'react';

import * as UseTemplateList from './UseTemplate';
import MyScrollBox from '@common/components/MyScrollBox';

import './index.less';

function ResumeContent () {
  const HEADER_OPERATE_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (
    <MyScrollBox maxHeight={height - HEADER_OPERATE_HEIGHT}>
      <UseTemplateList.TemplateOne />
    </MyScrollBox>
  );
}

export default ResumeContent;
