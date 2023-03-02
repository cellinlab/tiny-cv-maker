import React from 'react';

import './index.less';

import Upload from '../Upload';

interface IProps extends TSUpload.Input {
  icon?: any;
  text?: any;
  preventInputManager?: boolean;
}

const ImageUpload: React.FC<IProps> = ({
  icon,
  text,
  preventInputManager = false,
  onAfterClick = () => {},
  ...otherProps
}) => {
  return (
    <div className="my-input-image-upload-wrapper" onClick={onAfterClick}>
      {!preventInputManager &&(
        <div className="my-input-image-upload-input">
          <Upload
            {...otherProps}
            onAfterClick={onAfterClick}
            style={{
              width: '112px',
              height: '152px',
            }}
          />
        </div>
      )}
      <div className="my-input-image-upload-box">
        <img src={icon} alt="" className='my-input-image-upload-icon' />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageUpload;
