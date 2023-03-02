import React from 'react';

import ResumeOperate from './ResumeOperate';
import ResumeToolbar from './ResumeToolbar';
import ResumeContent from './ResumeContent';

import './index.less';

function Resume () {
  return (
    <div styleName='container'>
      <div styleName='header'>
        <ResumeOperate />
      </div>
      <div styleName='content'>
        <ResumeContent />
      </div>
      <div styleName='toolbar'>
        <ResumeToolbar />
      </div>
    </div>
  );
}

export default Resume;
