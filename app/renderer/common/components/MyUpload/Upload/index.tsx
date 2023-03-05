import React, { useRef } from 'react';
import cx from 'classnames';

import './index.less';

import FileEvent from '../fileEvent';

function Upload ({
  style,
  accept,
  multiple = false,
  visible = true,
  onAfterClick,
  onAfterChange,
}: TSUpload.Input) {
  const inputSelectorRef = useRef(null);

  function onChange (e: any) {
    console.log('onChange', e);
    const fileList: any = e?.target?.files || [];

    if (e.target.value === '') {
      return;
    }

    let instance: TSUpload.File[] = [];
    for (let file of fileList) {
      instance.push(new FileEvent(file));
    }
    onAfterChange && onAfterChange(instance);
  }

  return (
    <input
      type='file'
      style={style}
      accept={accept}
      multiple={multiple}
      ref={inputSelectorRef}
      onClick={onAfterClick}
      onChange={onChange}
      className={cx('my-input-selector', {
        'my-input-selector-visible': visible,
        'my-input-selector-hidden': !visible,
      })}
    />
  );
}

export default Upload;
