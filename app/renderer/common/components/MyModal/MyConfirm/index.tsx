import React from 'react';

import MyButton from '@common/components/MyButton';

import { IConfirmModal } from '../types';

import './index.less';

function MyConfirm({
  title,
  width,
  className,
  description,
  renderFooter,
  config = {},
  eleRef,
}: IConfirmModal) {
  const {
    deleteBtn = {
      isShow: false,
    },
    cancelBtn = {
      isShow: true,
    },
    confirmBtn = {
      isShow: true,
    },
  } = config;

  return (
    <div styleName='my-confirm-mask'>
      <div styleName='my-confirm-center'>
        <div
          styleName='my-confirm-box'
          className={className}
          style={{ width: width || 450 }}
          ref={eleRef}
        >
          <div styleName='my-confirm-content'>
            <p styleName='my-confirm-content-title'>{title || 'Friendly Tips'}</p>
            {description && (
              <p styleName='my-confirm-content-desc'>{description}</p>
            )}
          </div>
          {renderFooter || (
            <div styleName='my-confirm-footer'>
              {cancelBtn?.isShow && (
                <MyButton
                  size='medium'
                  className='my-confirm-footer-btn my-confirm-footer-cancel-btn'
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
                  className='my-confirm-footer-btn my-confirm-footer-confirm-btn'
                  onClick={() => {
                    confirmBtn?.callback && confirmBtn.callback();
                  }}
                >
                  {confirmBtn?.text || 'Confirm'}
                </MyButton>
              )}
              {deleteBtn?.isShow && (
                <MyButton
                  size='medium'
                  className='my-confirm-footer-btn my-confirm-footer-delete-btn'
                  onClick={() => {
                    deleteBtn?.callback && deleteBtn.callback();
                  }}
                >
                  {deleteBtn?.text || 'Quit'}
                </MyButton>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyConfirm;
