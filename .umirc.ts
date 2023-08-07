import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: 'TMS-Loader',
      path: '/tmsloader',
      component: './TmsLayer',
    },
  ],
  npmClient: 'pnpm',
  //=================Cesium==================
  plugins: ["umi-cesium-plugin"],
  cesium: {
    accessToken: "your accessToken",
  },
  //=================Cesium==================

});

