## 完成一个组件库需要考虑的问题

### 确定代码结构
因为我们输出的是架构和css
src/
  components/
  styles/

#### 结构设计
**方案选择**
- inline css // 快捷
- css in js // 牺牲了纯洁性
  - style-component
- sass/less // 选用

**css结构设计**
```
styles/
  _variables.scss 各种变量以及可配置设置
  _mixins.scss 全局mixins
  _functions.scss 全局functions
components/
  Button/
    style.scss 组件单独的样式
```

### 样式解决方案

#### 基础色彩系统
**色彩选择**
选择自己色彩体系

系统色板 - 基础色板 + 中性色板
产品色板- 品牌色 + 功能色板

#### 字体系统
font-family

用normalize统一样式
#### 表单
#### 按钮
#### 边框和阴影
#### 可配置开关




### 组件需求分析和编码

### 组件测试用例分析和编码

### 代码打包输出发布

### CI/CD，文档生成等等




## 组件开发需求分析

### Button
- 不同的type： primary，default，danger，link button
- 不用的size： normal，small，large
- disable状态：disabled
- 圆角