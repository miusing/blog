# 缪斯的技术博客 🚀

> 热爱是永远的理由和答案！

一个基于 [Docusaurus 3.x](https://docusaurus.io/) 构建的现代化技术博客，记录前端开发、计算机科学和技术思考的点点滴滴。

[![Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus%203.8.1-blue.svg)](https://docusaurus.io/)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-green.svg)](https://wooyee.cc)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🌟 特性

- 📝 **丰富的技术内容** - 涵盖前端开发、计算机网络、数据结构、算法等多个技术领域
- 🎨 **现代化设计** - 基于 Docusaurus 3.8.1，支持暗黑模式，响应式设计
- 🔍 **强大的搜索** - 集成本地搜索功能，支持中英文内容快速定位
- 📱 **移动端友好** - 完美适配各种设备尺寸
- ⚡ **快速加载** - 静态站点生成，优化的构建性能
- 🌐 **自定义域名** - 部署在 `wooyee.cc`
- 🎯 **SEO 优化** - 自动生成 sitemap，meta 标签优化
- 🔥 **热重载** - 开发时实时预览更改

## 📚 内容分类

### 前端技术
- **JavaScript** - ES6+、异步编程、函数式编程、正则表达式
- **React** - Hooks、状态管理、性能优化、组件设计
- **Vue** - 组件开发、响应式原理、生态系统
- **TypeScript** - 类型系统、工具类型、高级特性
- **CSS** - 布局、动画、预处理器、现代特性

### 计算机基础
- **计算机网络** - HTTP/HTTPS、TCP/IP、网络安全、协议分析
- **数据结构与算法** - 排序、搜索、动态规划、复杂度分析
- **设计模式** - 常用设计模式及其在前端中的应用

### 工程化与工具
- **构建工具** - Webpack、Vite、Rollup 配置与优化
- **版本控制** - Git 工作流、分支管理、协作规范
- **部署运维** - Docker、CI/CD、监控、性能优化

### 后端技术
- **Node.js** - 服务端开发、API 设计、中间件
- **数据库** - MySQL、MongoDB 设计与优化
- **Koa** - 框架使用、中间件开发

### 其他技术
- **音视频** - WebRTC、媒体处理、流媒体
- **WebGL** - 3D 图形、着色器编程
- **Canvas** - 2D 图形、动画、游戏开发

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18.0 (推荐使用 LTS 版本)
- **npm** >= 8.0 或 **yarn** >= 1.22 或 **pnpm** >= 7.0

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/miusing/blog.git
cd blog

# 安装依赖
npm install
# 或者使用 yarn
yarn install
# 或者使用 pnpm
pnpm install

# 启动开发服务器
npm start
```

访问 `http://localhost:3000` 查看网站。开发服务器支持热重载，修改文件后会自动刷新页面。

### 构建部署

```bash
# 构建生产版本
npm run build

# 本地预览构建结果
npm run serve

# 部署到 GitHub Pages
GIT_USER=miusing USE_SSH=true npm run deploy
```

## 📁 项目结构

```
blog/
├── .docusaurus/           # Docusaurus 生成的临时文件
├── .github/              # GitHub Actions 配置
├── blog/                 # 博客文章
│   └── 面经.md           # 面试经验分享
├── docs/                 # 文档页面
│   ├── javascript/       # JavaScript 相关文档
│   ├── react/           # React 相关文档
│   ├── typescript/      # TypeScript 相关文档
│   ├── 计算机网络.md    # 网络基础知识
│   ├── 数据结构.md      # 数据结构与算法
│   └── ...
├── src/                 # 源代码
│   ├── components/      # 自定义 React 组件
│   ├── css/            # 全局样式文件
│   ├── pages/          # 自定义页面
│   └── theme/          # 主题自定义
├── static/             # 静态资源
│   ├── img/            # 图片资源
│   └── CNAME           # 自定义域名配置
├── build/              # 构建输出目录
├── docusaurus.config.js # Docusaurus 主配置文件
├── sidebars.js         # 侧边栏配置
├── babel.config.js     # Babel 配置
└── package.json        # 项目依赖和脚本
```

## 🛠️ 技术栈

- **框架**: [Docusaurus 3.8.1](https://docusaurus.io/)
- **语言**: JavaScript/TypeScript, MDX
- **UI 组件**: [Ant Design 4.x](https://ant.design/)
- **样式**: CSS Modules + Infima
- **搜索**: [Algolia DocSearch](https://docsearch.algolia.com/)
- **代码高亮**: [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer)
- **部署**: GitHub Pages
- **域名**: wooyee.cc

## 🚀 部署指南

### 手动部署

```bash
# 1. 克隆项目到本地
git clone https://github.com/miusing/blog.git
cd blog

# 2. 安装依赖
npm install

# 3. 本地开发和预览
npm start

# 4. 构建和部署
npm run build
GIT_USER=miusing USE_SSH=true npm run deploy
```

**部署流程说明：**
1. 本地构建生成静态文件
2. 使用 `docusaurus deploy` 命令推送到 `gh-pages` 分支
3. GitHub Pages 从 `gh-pages` 分支提供网站服务
4. 网站更新到 `https://wooyee.cc`

**技术细节：**
- 使用 Docusaurus 内置的部署功能
- 自动处理 CNAME 文件（自定义域名）
- 使用 SSH 认证，安全可靠

### 分支管理说明

本项目使用双分支部署模式：

| 分支 | 用途 | 内容 | 操作 |
|------|------|------|------|
| `master` | 源代码分支 | Docusaurus 源码、文档、配置 | 日常开发和提交 |
| `gh-pages` | 部署分支 | 构建后的静态文件 | 手动部署生成 |

**重要提醒：**
- ✅ **DO**: 向 `master` 分支提交代码
- ❌ **DON'T**: 手动修改 `gh-pages` 分支
- ✅ **DO**: 使用 `npm run deploy` 命令部署
- ❌ **DON'T**: 直接推送到 `gh-pages` 分支

### 部署到其他平台

#### Vercel 部署
1. 在 Vercel 中导入 GitHub 仓库
2. 构建命令：`npm run build`
3. 输出目录：`build`

#### Netlify 部署
1. 在 Netlify 中连接 GitHub 仓库
2. 构建命令：`npm run build`
3. 发布目录：`build`

## 📝 内容创作指南

### 博客文章写作

#### 1. 创建博客文章

在 `blog/` 目录下创建 `.md` 或 `.mdx` 文件：

```bash
# 文件命名格式
blog/2024-01-15-my-first-post.md
blog/2024-01-15-my-first-post.mdx
```

#### 2. 博客文章模板

```markdown
---
title: 深入理解 JavaScript 闭包
date: 2024-01-15
authors: [miusing]
tags: [javascript, 前端, 闭包]
description: 本文详细介绍 JavaScript 闭包的概念、原理和实际应用场景
image: ./img/closure-banner.jpg
---

# 深入理解 JavaScript 闭包

闭包是 JavaScript 中一个重要且强大的概念...

<!-- truncate -->

## 什么是闭包

闭包是指有权访问另一个函数作用域中变量的函数...

## 闭包的实际应用

### 1. 模块模式

```javascript
const myModule = (function() {
  let privateVar = 0;

  return {
    increment: function() {
      privateVar++;
    },
    getCount: function() {
      return privateVar;
    }
  };
})();
```

### 2. 防抖函数

```javascript
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
```

## 总结

闭包是 JavaScript 的核心特性之一...
```

#### 3. Front Matter 字段说明

| 字段 | 必需 | 说明 | 示例 |
|------|------|------|------|
| `title` | ✅ | 文章标题 | `深入理解 JavaScript 闭包` |
| `date` | ✅ | 发布日期 | `2024-01-15` |
| `authors` | ✅ | 作者列表 | `[miusing]` |
| `tags` | ❌ | 标签列表 | `[javascript, 前端]` |
| `description` | ❌ | 文章描述 | `本文详细介绍...` |
| `image` | ❌ | 封面图片 | `./img/banner.jpg` |
| `hide_table_of_contents` | ❌ | 隐藏目录 | `true` |
| `draft` | ❌ | 草稿状态 | `true` |

### 文档页面写作

#### 1. 创建文档页面

在 `docs/` 目录下创建文件：

```bash
# 创建新的技术文档
docs/javascript/async-await.md
docs/react/hooks-guide.mdx
docs/typescript/advanced-types.md
```

#### 2. 文档页面模板

```markdown
---
id: async-await
title: JavaScript 异步编程：async/await
sidebar_label: async/await
sidebar_position: 3
description: 详细介绍 JavaScript 中 async/await 的使用方法和最佳实践
keywords: [javascript, async, await, 异步编程, Promise]
---

# JavaScript 异步编程：async/await

## 概述

`async/await` 是 ES2017 引入的语法糖，让异步代码看起来更像同步代码...

## 基本语法

### async 函数

```javascript
async function fetchData() {
  // 异步操作
  return 'data';
}
```

### await 表达式

```javascript
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## 实际应用

### API 调用

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('获取用户数据失败:', error);
    throw error;
  }
}
```

### 并发处理

```javascript
async function fetchMultipleData() {
  try {
    // 并发执行多个异步操作
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);

    return { users, posts, comments };
  } catch (error) {
    console.error('批量获取数据失败:', error);
  }
}
```

## 最佳实践

:::tip 提示
始终使用 try-catch 来处理 async/await 中的错误。
:::

:::warning 注意
避免在循环中使用 await，这会导致串行执行而不是并行执行。
:::

:::danger 危险
不要忘记在 async 函数中使用 await，否则会返回 Promise 对象。
:::

## 相关链接

- [MDN: async function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN: await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)
```

#### 3. 文档 Front Matter 字段说明

| 字段 | 必需 | 说明 | 示例 |
|------|------|------|------|
| `id` | ❌ | 文档 ID | `async-await` |
| `title` | ✅ | 文档标题 | `JavaScript 异步编程` |
| `sidebar_label` | ❌ | 侧边栏显示名称 | `async/await` |
| `sidebar_position` | ❌ | 侧边栏排序 | `3` |
| `description` | ❌ | 文档描述 | `详细介绍...` |
| `keywords` | ❌ | SEO 关键词 | `[javascript, async]` |
| `hide_title` | ❌ | 隐藏标题 | `true` |
| `hide_table_of_contents` | ❌ | 隐藏目录 | `true` |

#### 4. 更新侧边栏配置

在 `sidebars.js` 中添加新文档：

```javascript
module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'JavaScript',
      items: [
        'javascript/basics',
        'javascript/async-await',  // 新添加的文档
        'javascript/closures',
      ],
    },
    {
      type: 'category',
      label: 'React',
      items: [
        'react/getting-started',
        'react/hooks-guide',
      ],
    },
  ],
};
```

## 📚 MDX 使用指南

### 什么是 MDX

MDX 是 Markdown 和 JSX 的结合，允许你在 Markdown 文件中使用 React 组件。

### MD vs MDX 选择指南

| 场景 | 推荐格式 | 原因 |
|------|----------|------|
| 纯文本内容 | `.md` | 简单、快速、SEO 友好 |
| 需要交互组件 | `.mdx` | 支持 React 组件 |
| 复杂布局 | `.mdx` | 灵活的组件组合 |
| 代码演示 | `.mdx` | 实时代码预览 |

### MDX 基本语法

#### 1. 导入和使用组件

```mdx
---
title: MDX 示例页面
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# MDX 功能演示

## 选项卡组件

<Tabs>
  <TabItem value="js" label="JavaScript">
    ```javascript
    const greeting = 'Hello, World!';
    console.log(greeting);
    ```
  </TabItem>
  <TabItem value="ts" label="TypeScript">
    ```typescript
    const greeting: string = 'Hello, World!';
    console.log(greeting);
    ```
  </TabItem>
</Tabs>

## 代码块组件

<CodeBlock language="jsx" title="src/components/Button.jsx">
{`function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="custom-button">
      {children}
    </button>
  );
}`}
</CodeBlock>
```

#### 2. 自定义组件示例

创建 `src/components/HighlightBox.js`：

```jsx
import React from 'react';

export default function HighlightBox({ children, color = 'blue' }) {
  return (
    <div
      style={{
        border: `2px solid ${color}`,
        borderRadius: '8px',
        padding: '16px',
        margin: '16px 0',
        backgroundColor: `${color}10`,
      }}
    >
      {children}
    </div>
  );
}
```

在 MDX 文件中使用：

```mdx
import HighlightBox from '@site/src/components/HighlightBox';

# 自定义组件示例

<HighlightBox color="red">
  这是一个红色的高亮框，可以包含任何内容。
</HighlightBox>

<HighlightBox color="green">
  ## 绿色高亮框

  - 支持 Markdown 语法
  - 支持列表
  - 支持**粗体**和*斜体*
</HighlightBox>
```

#### 3. 内联 JSX

```mdx
# 动态内容示例

当前时间：<span style={{color: 'red'}}>{new Date().toLocaleString()}</span>

<div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px'
}}>
  <div>左侧内容</div>
  <div>右侧内容</div>
</div>
```

### 常用 Docusaurus 组件

#### 1. 告示框 (Admonitions)

```mdx
:::note 备注
这是一个备注框。
:::

:::tip 提示
这是一个提示框，用于给出有用的建议。
:::

:::info 信息
这是一个信息框，用于提供额外信息。
:::

:::warning 警告
这是一个警告框，提醒用户注意。
:::

:::danger 危险
这是一个危险框，警告用户潜在风险。
:::

:::caution 注意
这是一个注意框。
:::
```

#### 2. 代码块功能

```mdx
## 带标题的代码块

```javascript title="utils/helper.js"
export function formatDate(date) {
  return date.toLocaleDateString('zh-CN');
}
```

## 高亮特定行

```javascript {2,4-6}
function calculateSum(numbers) {
  let sum = 0; // 这行会被高亮
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // 这些行会被高亮
    console.log(`当前和: ${sum}`);
    console.log(`处理第 ${i + 1} 个数字`);
  }
  return sum;
}
```

## 显示行号

```javascript showLineNumbers
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
```

#### 3. 详情折叠

```mdx
<details>
<summary>点击展开详细内容</summary>

这里是折叠的内容，可以包含：

- 列表项
- **粗体文本**
- `代码片段`

```javascript
console.log('折叠内容中的代码块');
```

</details>
```

### 实用写作技巧

#### 1. 图片处理

```mdx
# 图片使用示例

## 本地图片
![本地图片](./img/screenshot.png)

## 带标题的图片
![API 流程图](./img/api-flow.png "API 调用流程图")

## 可点击的图片
[![点击查看大图](./img/thumbnail.png)](./img/full-size.png)

## 居中显示的图片
<div style={{textAlign: 'center'}}>
  <img src="./img/centered-image.png" alt="居中图片" width="500" />
</div>
```

#### 2. 表格增强

```mdx
| 功能 | Markdown | MDX | 说明 |
|------|:--------:|:---:|------|
| 基础语法 | ✅ | ✅ | 都支持标准 Markdown |
| React 组件 | ❌ | ✅ | MDX 独有功能 |
| 交互性 | ❌ | ✅ | 可添加按钮、表单等 |
| 构建速度 | 🚀 | 🐌 | Markdown 更快 |
| 学习成本 | 📚 | 📚📚 | MDX 需要了解 React |
```

#### 3. 数学公式 (需要插件)

```mdx
行内公式：$E = mc^2$

块级公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## 🔄 内容管理工作流

### 日常写作流程

#### 日常写作和部署流程

```bash
# 1. 确保在 master 分支并拉取最新代码
git checkout master
git pull origin master

# 2. 创建文章文件
touch blog/2024-01-15-new-article.md

# 3. 编写内容
code blog/2024-01-15-new-article.md

# 4. 本地预览
npm start

# 5. 提交代码到 master 分支
git add .
git commit -m "feat: 添加新文章 - 文章标题"
git push origin master

# 6. 手动部署到网站
npm run build
GIT_USER=miusing USE_SSH=true npm run deploy

# 🎉 网站立即更新！
```

### 📝 日常使用说明

#### 快速发布文章

```bash
# 最简单的发布流程
echo "---
title: 我的新文章
date: $(date +%Y-%m-%d)
authors: [miusing]
tags: [技术, 分享]
---

# 我的新文章

这是文章内容...

<!-- truncate -->

更多内容..." > blog/$(date +%Y-%m-%d)-my-new-article.md

# 提交代码
git add .
git commit -m "feat: 添加新文章 - 我的新文章"
git push origin master

# 部署到网站
npm run build
GIT_USER=miusing USE_SSH=true npm run deploy
```

#### 本地开发和预览

```bash
# 启动开发服务器
npm start
# 访问 http://localhost:3000

# 构建生产版本
npm run build

# 本地预览构建结果
npm run serve
# 访问 http://localhost:3000
```

#### 部署命令

```bash
# 构建和部署（推荐）
npm run build
GIT_USER=miusing USE_SSH=true npm run deploy

# 或者一步完成（直接部署，会自动构建）
GIT_USER=miusing USE_SSH=true npm run deploy
```

### 内容组织建议

#### 目录结构规范

```
docs/
├── javascript/           # JavaScript 相关
│   ├── basic/           # 基础知识
│   ├── advanced/        # 进阶内容
│   └── frameworks/      # 框架相关
├── css/                 # CSS 相关
├── tools/               # 工具使用
└── best-practices/      # 最佳实践

blog/
├── 2024-01-15-article-name.md
├── 2024-01-20-another-article.mdx
└── img/                 # 博客图片资源
```

#### 文件命名规范

```bash
# 博客文章
YYYY-MM-DD-article-slug.md
2024-01-15-javascript-closures.md
2024-01-20-react-hooks-guide.mdx

# 文档页面
category/topic-name.md
javascript/async-programming.md
react/state-management.mdx
```

### 内容质量检查清单

#### 发布前检查

- [ ] **标题**：简洁明了，包含关键词
- [ ] **描述**：准确描述文章内容
- [ ] **标签**：添加相关标签，便于分类
- [ ] **截断标记**：博客文章添加 `<!-- truncate -->`
- [ ] **代码示例**：确保代码可运行
- [ ] **链接检查**：验证所有外部链接有效
- [ ] **图片优化**：压缩图片，添加 alt 文本
- [ ] **语法检查**：检查拼写和语法错误
- [ ] **本地预览**：确保渲染正常

#### SEO 优化

```markdown
---
title: 具体而有吸引力的标题
description: 简洁的描述，包含主要关键词
keywords: [关键词1, 关键词2, 关键词3]
image: ./img/social-card.png  # 社交媒体分享图片
---
```

### 协作指南

#### 贡献流程

1. **Fork 仓库**
2. **创建功能分支**
3. **编写内容**
4. **本地测试**
5. **提交 Pull Request**
6. **代码审查**
7. **合并发布**

#### 代码审查要点

- 内容准确性
- 代码示例可运行性
- 文档结构合理性
- 链接有效性
- 图片质量

## ❓ 常见问题

### 部署相关

**Q: 手动部署后网站没有更新？**

A: 检查以下几点：
1. 部署命令是否执行成功
2. 检查 `gh-pages` 分支是否有新的提交
3. 检查 `CNAME` 文件是否存在
4. DNS 解析是否正确
5. 浏览器缓存问题

```bash
# 检查部署状态
git log --oneline -5

# 重新部署
npm run build
GIT_USER=miusing USE_SSH=true npm run deploy

# 检查 gh-pages 分支
git ls-remote origin gh-pages
```

**Q: 自定义域名无法访问？**

A: 确认以下配置：
1. `static/CNAME` 文件包含正确域名
2. DNS 记录指向 GitHub Pages
3. GitHub 仓库设置中启用了 Pages

### 开发相关

**Q: 本地启动失败？**

A: 常见解决方案：
```bash
# 清除缓存
rm -rf node_modules package-lock.json
npm install

# 清除 Docusaurus 缓存
npm run clear
npm start
```

**Q: 构建时出现 MDX 解析错误？**

A: 检查 MDX 语法：
1. JSX 标签必须正确闭合
2. 组件导入路径正确
3. 避免在 Markdown 中使用未转义的 `<` 和 `>`

**Q: 搜索功能不工作？**

A: 重新构建搜索索引：
```bash
npm run build  # 重新生成搜索索引
npm run serve  # 本地测试
```

### 内容相关

**Q: 博客文章不显示？**

A: 检查文件格式：
1. 文件名格式：`YYYY-MM-DD-title.md`
2. Front Matter 格式正确
3. 日期不能是未来时间
4. 确保不是草稿状态 (`draft: false`)

**Q: 侧边栏不显示新文档？**

A: 更新 `sidebars.js` 配置：
```javascript
// 添加新文档到相应分类
{
  type: 'category',
  label: 'JavaScript',
  items: [
    'javascript/existing-doc',
    'javascript/new-doc',  // 添加这行
  ],
}
```

## 🛠️ 故障排除

### 构建错误

#### 错误：`Module not found`

```bash
# 错误信息
Error: Cannot resolve module '@site/src/components/MyComponent'

# 解决方案
# 1. 检查文件路径是否正确
# 2. 确保组件文件存在
# 3. 检查导入语法
```

#### 错误：`Duplicate routes`

```bash
# 错误信息
Duplicate routes found

# 解决方案
# 1. 检查是否有重复的文档 ID
# 2. 确保文件名唯一
# 3. 检查 sidebars.js 配置
```

### 性能优化

#### 构建速度慢

```bash
# 优化方案
# 1. 使用 npm ci 而不是 npm install
npm ci

# 2. 启用并行构建
export NODE_OPTIONS="--max-old-space-size=4096"

# 3. 清理不必要的依赖
npm audit
npm prune
```

#### 网站加载慢

1. **图片优化**：压缩图片，使用 WebP 格式
2. **代码分割**：避免在首页加载过多内容
3. **CDN 加速**：使用 GitHub Pages 的 CDN

### 调试技巧

#### 开启详细日志

```bash
# 开发模式详细日志
DEBUG=docusaurus:* npm start

# 构建详细日志
npm run build -- --verbose
```

#### 检查生成的文件

```bash
# 查看构建输出
ls -la build/

# 检查搜索索引
cat build/search-index.json | jq .

# 验证 CNAME 文件
cat build/CNAME
```

## 📈 进阶功能

### 自定义主题

#### 修改 CSS 变量

```css title="src/css/custom.css"
:root {
  /* 主色调 */
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;

  /* 字体 */
  --ifm-font-family-base: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* 代码块 */
  --ifm-code-font-size: 95%;
  --ifm-code-background: #f6f8fa;
}

/* 暗色模式 */
[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-background-color: #1b1b1d;
}
```

#### 自定义组件

```jsx title="src/components/CustomButton.js"
import React from 'react';
import clsx from 'clsx';
import styles from './CustomButton.module.css';

export default function CustomButton({ children, variant = 'primary', ...props }) {
  return (
    <button
      className={clsx(styles.button, styles[variant])}
      {...props}
    >
      {children}
    </button>
  );
}
```

### 插件扩展

#### 添加 Google Analytics

```javascript title="docusaurus.config.js"
module.exports = {
  // ...
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-XXXXXXXXXX',
        anonymizeIP: true,
      },
    ],
  ],
};
```

#### 添加评论系统

```javascript title="docusaurus.config.js"
module.exports = {
  // ...
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        // ...
        blogSidebarCount: 'ALL',
        blogSidebarTitle: '所有文章',
      },
    ],
  ],
};
```

## 📚 学习资源

### 官方文档

- [Docusaurus 官方文档](https://docusaurus.io/docs)
- [MDX 官方文档](https://mdxjs.com/)
- [React 官方文档](https://react.dev/)

### 写作指南

- [技术写作最佳实践](https://developers.google.com/tech-writing)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [前端技术博客写作指南](https://github.com/ruanyf/document-style-guide)

### 设计资源

- [Docusaurus 主题库](https://docusaurus.io/showcase)
- [React 图标库](https://react-icons.github.io/react-icons/)
- [CSS 渐变生成器](https://cssgradient.io/)

### 工具推荐

- **编辑器**：VS Code + Markdown 插件
- **图片处理**：TinyPNG（压缩）、Unsplash（素材）
- **图表制作**：Mermaid、Draw.io
- **代码格式化**：Prettier、ESLint

## 🎯 快速上手示例

### 创建第一篇博客

```bash
# 1. 创建博客文件
cat > blog/2024-01-15-hello-world.md << 'EOF'
---
title: 我的第一篇技术博客
date: 2024-01-15
authors: [miusing]
tags: [开始, 博客]
description: 欢迎来到我的技术博客，这里记录我的学习和思考
---

# 欢迎来到我的技术博客

这是我的第一篇技术博客文章！

<!-- truncate -->

## 为什么写博客

写技术博客有很多好处：

1. **知识总结**：帮助整理和巩固所学知识
2. **技术分享**：与他人分享经验和见解
3. **个人品牌**：建立技术影响力
4. **持续学习**：保持学习的动力

## 博客内容规划

我计划在这个博客中分享：

- 前端开发技术
- JavaScript 深度解析
- React 实战经验
- 工程化最佳实践

## 结语

期待与大家一起学习和成长！

EOF

# 2. 本地预览
npm start

# 3. 提交代码到 master 分支
git add .
git commit -m "feat: 添加第一篇博客文章"
git push origin master

# 4. 手动部署到网站
npm run build
GIT_USER=miusing USE_SSH=true npm run deploy
```

### 创建第一个文档

```bash
# 1. 创建文档文件
mkdir -p docs/getting-started
cat > docs/getting-started/introduction.md << 'EOF'
---
id: introduction
title: 项目介绍
sidebar_label: 介绍
sidebar_position: 1
---

# 项目介绍

欢迎来到我的技术文档库！

## 文档结构

本文档库包含以下内容：

### 前端技术
- JavaScript 基础与进阶
- React 开发指南
- CSS 技巧与最佳实践

### 工程化
- 构建工具配置
- 代码质量管理
- 部署与运维

### 最佳实践
- 代码规范
- 性能优化
- 安全防护

## 如何使用

1. 通过左侧导航栏浏览不同主题
2. 使用搜索功能快速定位内容
3. 查看代码示例并在本地实践

## 贡献指南

欢迎提交 Issue 和 Pull Request！

EOF

# 2. 更新侧边栏
# 编辑 sidebars.js，添加新文档

# 3. 预览和发布
npm start
```

## 📝 内容创作模板

### 技术教程模板

```markdown
---
title: [技术名称] 完全指南
date: 2024-01-15
authors: [miusing]
tags: [技术标签, 教程]
description: 深入学习 [技术名称] 的完整指南
---

# [技术名称] 完全指南

[技术简介和背景]

<!-- truncate -->

## 前置知识

在开始之前，你需要了解：
- 知识点 1
- 知识点 2

## 基础概念

### 核心概念 1
[详细解释]

### 核心概念 2
[详细解释]

## 实践示例

### 示例 1：基础用法
```javascript
// 代码示例
```

### 示例 2：进阶用法
```javascript
// 代码示例
```

## 最佳实践

:::tip 建议
[实用建议]
:::

:::warning 注意
[注意事项]
:::

## 常见问题

**Q: 问题描述？**
A: 解决方案

## 总结

[总结要点]

## 参考资源

- [官方文档链接]
- [相关文章链接]
```

### API 文档模板

```markdown
---
id: api-reference
title: API 参考文档
sidebar_label: API 参考
---

# API 参考文档

## 概述

[API 简介]

## 认证

```javascript
// 认证示例
const token = 'your-api-token';
```

## 端点列表

### GET /api/users

获取用户列表

**参数：**

| 参数 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `page` | number | 否 | 页码，默认为 1 |
| `limit` | number | 否 | 每页数量，默认为 10 |

**响应：**

```json
{
  "data": [
    {
      "id": 1,
      "name": "用户名",
      "email": "user@example.com"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10
  }
}
```

**示例：**

```javascript
const response = await fetch('/api/users?page=1&limit=10');
const data = await response.json();
```
```

## 🎨 Docusaurus V3 新特性

### MDX 支持
- 支持在 Markdown 中使用 React 组件
- 更好的 TypeScript 支持
- 改进的 MDX 编译性能

### 性能优化
- 更快的构建速度
- 优化的包大小
- 改进的热重载性能

### 主题系统
- 更灵活的主题定制
- 支持 CSS 变量
- 改进的暗黑模式支持

## 🔧 自定义配置

### 主题配置

在 `docusaurus.config.js` 中可以自定义：

```javascript
module.exports = {
  title: '缪斯',
  tagline: '热爱是永远的理由和答案！',
  url: 'https://wooyee.cc',
  baseUrl: '/',
  
  themeConfig: {
    navbar: {
      title: '缪斯',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      // 更多配置...
    },
  },
};
```

### 样式定制

在 `src/css/custom.css` 中可以覆盖默认样式：

```css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-code-font-size: 95%;
}

[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
}
```

## 📊 开发工具

- **代码编辑器**: VS Code
- **包管理器**: npm/yarn/pnpm
- **版本控制**: Git
- **CI/CD**: GitHub Actions
- **测试**: Jest

## 🚀 部署说明

### 自动部署
项目配置了自动部署到 GitHub Pages，每次推送到 main 分支时会自动触发部署。

### 自定义域名
- 域名: `wooyee.cc`
- CNAME 文件已配置在 `static/CNAME`
- 支持 HTTPS

### 性能优化
- 启用了 Gzip 压缩
- 图片懒加载
- 代码分割
- CDN 加速

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- **网站**: [wooyee.cc](https://wooyee.cc)
- **GitHub**: [@miusing](https://github.com/miusing)

## 🔍 搜索功能配置

### 当前配置：本地搜索
项目目前使用 `@easyops-cn/docusaurus-search-local` 插件提供本地搜索功能：

- ✅ **无需外部服务** - 完全离线工作
- ✅ **支持中英文** - 智能分词和搜索
- ✅ **实时索引** - 构建时自动生成搜索索引
- ✅ **快速响应** - 本地搜索，无网络延迟

### 可选：Algolia DocSearch 配置

如果你想使用 Algolia DocSearch（更强大的搜索功能），可以按以下步骤配置：

1. **申请 Algolia DocSearch**：
   - 访问 [Algolia DocSearch](https://docsearch.algolia.com/apply/)
   - 提交你的网站申请

2. **获取配置信息**：
   ```javascript
   // docusaurus.config.js
   algolia: {
     appId: 'YOUR_APP_ID',
     apiKey: 'YOUR_SEARCH_API_KEY',
     indexName: 'YOUR_INDEX_NAME',
   }
   ```

3. **替换本地搜索**：
   - 移除 `@easyops-cn/docusaurus-search-local` 插件
   - 在 `themeConfig` 中添加 `algolia` 配置

## 🙏 致谢

- [Docusaurus](https://docusaurus.io/) - 优秀的文档站点生成器
- [GitHub Pages](https://pages.github.com/) - 免费的静态网站托管
- [Ant Design](https://ant.design/) - 企业级 UI 设计语言
- [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) - 本地搜索插件

## 🚀 快速参考

### 常用命令

| 命令 | 用途 |
|------|------|
| `npm start` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run serve` | 预览构建结果 |
| `npm run deploy` | 手动部署到 GitHub Pages |
| `npm run clear` | 清除缓存 |

### 重要链接

| 链接 | 说明 |
|------|------|
| [网站地址](https://wooyee.cc) | 博客主页 |
| [GitHub 仓库](https://github.com/miusing/blog) | 源代码 |
| [Docusaurus 文档](https://docusaurus.io/docs) | 官方文档 |

### 文件结构速查

```
blog/                    # 博客文章目录
├── YYYY-MM-DD-title.md  # 博客文章格式
└── img/                 # 博客图片

docs/                    # 文档目录
├── category/            # 分类目录
└── page.md             # 文档页面

static/                  # 静态资源
├── img/                # 全局图片
└── CNAME               # 自定义域名

src/                     # 源代码
├── components/         # 自定义组件
├── css/               # 样式文件
└── pages/             # 自定义页面
```

### 部署状态检查

```bash
# 检查部署状态
curl -I https://wooyee.cc

# 查看最新提交
git log --oneline -5

# 检查分支状态
git status
```

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！
