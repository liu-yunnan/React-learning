// react：框架核心包
// react dom：专门做渲染相关的包

import React from 'react';
import ReactDOM from 'react-dom/client';
// 应用的全局样式文件
import './index.css';
// 引入根组件
import App from './App';

// 通过调用reactDOM的render方法渲染App根组件到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式节点需要去掉
  // useEffect的执行机制
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

