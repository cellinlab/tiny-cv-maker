import React, { useEffect, useState } from 'react';

import * as UseTemplateList from './UseTemplate';
import MyScrollBox from '@common/components/MyScrollBox';
import PersonalForm from './UseForm/Personal';
import EducationForm from './UseForm/Education';
import WorkForm from './UseForm/Work';
import ContactForm from './UseForm/Contact';
import SkillForm from './UseForm/Skill';
import CertificateForm from './UseForm/Certificate';

import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import { RESUME_TOOLBAR_MAPS } from '@common/contants/resume';

import './index.less';

function ResumeContent () {
  const HEADER_OPERATE_HEIGHT = 92;
  const height = document.body.clientHeight;
  const [formName, setFormName] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);

  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      console.log(`ResumeContent receive data: ${JSON.stringify(data)}`);
      console.log(`ResumeContent receive data: ${data?.form_name}`);
      setFormName(data?.form_name);
      setShowFormModal(true);
    });
  };

  const onClose = () => {
    setShowFormModal(false);
    setFormName('');
  }

  return (
    <MyScrollBox maxHeight={height - HEADER_OPERATE_HEIGHT}>
      <UseTemplateList.TemplateOne />
      {showFormModal && (
        <>
          {formName === RESUME_TOOLBAR_MAPS.personal && <PersonalForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.education && <EducationForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.workExperience && <WorkForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.contact && <ContactForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.skill && <SkillForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.certificate && <CertificateForm onClose={onClose} />}
        </>
      )}
    </MyScrollBox>
  );
}

export default ResumeContent;
