import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import MyScrollBox from '@common/components/MyScrollBox';
import RESUME_TOOLBAR_LIST from '@common/contants/resume';

import { onAddToolbar, onRemoveToolbar } from './utils';

import './index.less';

function ResumeToolbar () {
  const height = document.body.clientHeight;

  const [addedList, setAddedList] = useState<TSResume.SliderItem[]>([]);
  const [unAddList, setUnAddList] = useState<TSResume.SliderItem[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      let _addedList: TSResume.SliderItem[] = [];
      let _unAddList: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((item: TSResume.SliderItem) => {
        if (item.require) {
          _addedList.push(item);
        } else {
          _unAddList.push(item);
        }
      });
      setAddedList(_addedList);
      setUnAddList(_unAddList);

      changeResumeToolbarKeys(_addedList.map((item: TSResume.SliderItem) => item.key));
    }
  }, []);

  const changeResumeToolbarKeys = (keys: string[]) => {
    if (keys.length > 0) {
      dispatch({
        type: 'templateModel/setStore',
        payload: {
          key: 'resumeToolbarKeys',
          values: keys,
        }
      });
    }
  };

  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    const nextAddSliderList = onAddToolbar(addedList, moduleToolbar);
    setAddedList(nextAddSliderList);

    const nextUnAddSliderList = onRemoveToolbar(unAddList, moduleToolbar);
    setUnAddList(nextUnAddSliderList);

    changeResumeToolbarKeys(nextAddSliderList.map((item: TSResume.SliderItem) => item.key));
  };

  const onRemoveSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    const nextAddSliderList = onRemoveToolbar(addedList, moduleToolbar);
    setAddedList(nextAddSliderList);

    const nextUnAddSliderList = onAddToolbar(unAddList, moduleToolbar);
    setUnAddList(nextUnAddSliderList);

    changeResumeToolbarKeys(nextAddSliderList.map((item: TSResume.SliderItem) => item.key));
  };

  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        {addedList.length > 0 && (
          <div styleName="module">
            <div styleName="title">
              <span styleName="line" />
              已添加模块
            </div>
            <div styleName="content">
              {addedList.map((toolbar: TSResume.SliderItem) => {
                return (
                  <div
                    styleName="box"
                    key={toolbar.key}
                  >
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{toolbar.name}</div>
                        <div styleName="summary">{toolbar.summary}</div>
                      </div>
                      {toolbar.require && <div styleName="tips">必选项</div>}
                      {!toolbar.require && (
                        <div styleName="action">
                          <i styleName="edit"></i>
                          <i styleName="delete" onClick={(e: React.MouseEvent) => {
                            e.stopPropagation && e.stopPropagation();
                            onRemoveSliderAction(toolbar);
                          }}></i>
                        </div>
                      )}
                    </div>
                  </div>
                );}
              )}
            </div>
          </div>
        )}
        {unAddList.length > 0 && (
          <div styleName="module">
            <div styleName="title">
              <span styleName="line" />
              未添加模块
            </div>
            <div styleName="content">
              {unAddList.map((toolbar: TSResume.SliderItem) => {
                return (
                  <div
                    styleName="box"
                    key={toolbar.key}
                    onClick={() => onAddSliderAction(toolbar)}
                  >
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{toolbar.name}</div>
                        <div styleName="summary">{toolbar.summary}</div>
                      </div>
                    </div>
                  </div>
                );}
              )}
            </div>
          </div>
        )}
      </MyScrollBox>
    </div>
  );
}

export default ResumeToolbar;