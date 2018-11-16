export default [
  {
    path: '/',
    pageName: 'home',
  },
  {
    path: '/home',
    pageName: 'home',
  },
  {
    path: '/about',
    pageName: 'about',
    populationTargets: [
      {
        componentName: 'usr.components.AboutPanel',
        componentInstance: 'aboutPanel1',
        propertyName: 'authorData',
      }
    ],
  },
];