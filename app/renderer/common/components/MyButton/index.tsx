import React from 'react';
import cx from 'classnames';

import './index.less';

export interface Button {
  size?: 'small' | 'medium' | 'large';
  width?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode | any;
  disabled?: boolean;
  className?: string;
  border?: boolean;
  onClick?: Function;
}

function MyButton({
  size = 'small',
  width,
  style,
  children,
  disabled,
  className,
  border = true,
  onClick,
}: Button) {
  return (
    <div
      style={{
        ...style,
        width: width,
      }}
      className={className}
      styleName={cx('my-button', {
        [`my-button-${size}`]: size,
        'my-button-disabled': disabled,
        'my-button-border': border,
      })}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </div>
  );
}

export default MyButton;
