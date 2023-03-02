import React from 'react';
import { useHistory } from 'react-router';

import ROUTER from '@common/contants/router';

import MyButton from '@common/components/MyButton';

import './index.less';

function ResumeOperate () {
  const history = useHistory();

  const onBack = () => {
    history.push(ROUTER.home);
  }
  
  const onExport = () => {}

  return <div styleName='operate'>
    <div styleName='back-btn' onClick={onBack}>Back</div>
    <MyButton size='medium' className='export-btn' onClick={onExport}>Export PDF</MyButton>
  </div>;
}

export default ResumeOperate;