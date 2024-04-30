import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'dbb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '55e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8d2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '83b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '904'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1b8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '1ac'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e41'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '077'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ba9'),
            routes: [
              {
                path: '/docs/start',
                component: ComponentCreator('/docs/start', '023'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/webgl/doc1',
                component: ComponentCreator('/docs/webgl/doc1', 'ec2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/webgl/doc2',
                component: ComponentCreator('/docs/webgl/doc2', '4c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '11b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
