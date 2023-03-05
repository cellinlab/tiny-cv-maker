import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import ROUTER from '@common/contants/router';

import MyButton from '@common/components/MyButton';
import { toPrintPdf } from '@common/utils/htmlToPdf';

import './index.less';

function ResumeOperate () {
  const history = useHistory();
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);

  const onBack = () => {
    history.push(ROUTER.home);
  }
  
  const onExport = () => {
    toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`);
  };

  return <div styleName='operate'>
    <div styleName='back-btn' onClick={onBack}>Back</div>
    <MyButton size='medium' className='export-btn' onClick={onExport}>Export PDF</MyButton>
  </div>;
}

export default ResumeOperate;