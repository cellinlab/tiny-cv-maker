import React from 'react';

import './index.less';

interface IProps {
  /**
   * @description title
   */
  text: string;

  /**
   * @description stye
   */
  styles?: React.CSSProperties;
}

function Title({
  text,
  styles,
}: IProps) {
  return (
    <div style={styles} styleName="title">
      {text}
    </div>
  );
}

export default Title;
