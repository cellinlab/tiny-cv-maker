export const onAddToolbar = (
  prevToolbarList: TSResume.SliderItem[],
  currentToolbar: TSResume.SliderItem,
): TSResume.SliderItem[] => {
  const addKeys = prevToolbarList.map((item: TSResume.SliderItem) => item.key);
  let nextToolbarList = [...Array.from(prevToolbarList)];
  if (!addKeys.includes(currentToolbar.key)) {
    nextToolbarList.push(currentToolbar);
  }
  return nextToolbarList;
};

export const onRemoveToolbar = (
  prevToolbarList: TSResume.SliderItem[],
  currentToolbar: TSResume.SliderItem,
): TSResume.SliderItem[] => {
  const nextToolbarList = [...Array.from(prevToolbarList)];
  const removeIndex = nextToolbarList.findIndex((item: TSResume.SliderItem) => item.key === currentToolbar.key);
  if (removeIndex > -1) {
    nextToolbarList.splice(removeIndex, 1);
  }
  return nextToolbarList;
}
