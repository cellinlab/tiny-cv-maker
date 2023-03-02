import React from 'react';

import MyButton from '@common/components/MyButton';

import { IDialogModal } from '../types';

import './index.less';

function MyDialog({
  title,
  width,
  className,
  showFooter,
  renderFooter,
  config = {},
  eleRef,
  children,
  childStyle,
}: IDialogModal) {
  const {
    cancelBtn = {
      isShow: true,
    },
    confirmBtn = {
      isShow: true,
    },
  } = config;

  return (
    <div styleName='my-dialog-mask'>
      <div styleName='my-dialog-center'>
        <div
          styleName='my-dialog-box'
          className={className}
          style={{ width: width || 750 }}
          ref={eleRef}
        >
          <div styleName='my-dialog-header'>{title || 'Friendly Tips'}</div>
          <div
            styleName='my-dialog-close'
            onClick={() => {
              cancelBtn?.callback && cancelBtn.callback();
            }}
          ></div>
          <div styleName='my-dialog-content' style={childStyle}>
            {children}
          </div>
          {showFooter && (
            renderFooter || (
              <div styleName='my-dialog-footer'>
                {cancelBtn?.isShow && (
                  <MyButton
                    size='medium'
                    className='my-dialog-footer-btn my-dialog-footer-cancel-btn'
                    onClick={() => {
                      cancelBtn?.callback && cancelBtn.callback();
                    }}
                  >
                    {cancelBtn?.text || 'Cancel'}
                  </MyButton>
                )}
                {confirmBtn?.isShow && (
                  <MyButton
                    size='medium'
                    className='my-dialog-footer-btn my-dialog-footer-confirm-btn'
                    onClick={() => {
                      confirmBtn?.callback && confirmBtn.callback();
                    }}
                  >
                    {confirmBtn?.text || 'Confirm'}
                  </MyButton>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default MyDialog;
