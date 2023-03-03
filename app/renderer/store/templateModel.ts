export interface TStore {
  resumeToolbarKeys: string[];
}

const templateModel: TSRcReduxModel.Props<TStore> = {
  namespace: 'templateModel',
  openSeamlessImmutable: true,
  state: {
    resumeToolbarKeys: [],
  },
};

export default templateModel;
