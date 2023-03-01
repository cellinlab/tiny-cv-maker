const ROUTER = {
  home: '/',
  resume: '/resume',
}

export default ROUTER;

export const ROUTER_KEY = {
  home: 'home',
  resume: 'resume',
  description: 'description',
  code: 'code',
};

export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://github.com/cellinlab/tiny-cv-maker',
    key: 'description',
    text: 'Description',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: 'Resume',
  },
  {
    url: 'https://github.com/cellinlab/tiny-cv-maker',
    key: 'code',
    text: 'Code',
  },
]