import React from 'react';

import './index.less';

interface IProps {
  children: React.ReactNode | any;
  maxHeight?: number;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  onScrollTop?: (scrollTop: number) => void;
}

function MyScrollBox({
  children,
  maxHeight = 200,
  style = {},
  innerStyle = {},
  onScrollTop,
}: IProps) {
  function onScroll(e: any) {
    const _event = e.target || e.currentTarget;
    onScrollTop && onScrollTop(_event.scrollTop);
  }
  let _style = {
    ...style,
  };
  if (maxHeight) {
    _style = {
      ..._style,
      maxHeight: `${maxHeight}px`,
    };
  }

  return (
    <div className="scroll-box-outer" style={_style} onScroll={onScroll}>
      <div className='scroll-box-hidden' style={{ maxHeight: `${maxHeight}px` }}>
        <div className='scroll-box-inner' style={innerStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MyScrollBox;
