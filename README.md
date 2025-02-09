#组件目录结构

toy-robot-simulator/
├── src/
│   ├── components/   # 组件目录
│   │   ├── Grid/
│   │   │   ├── Grid.tsx
│   │   │   ├── Grid.module.css  # 样式（可选）
│   │   │   ├── Robot.tsx
│   │   │   ├── Robot.module.css # 样式（可选）
│   │   ├── Controls/
│   │   │   ├── Controls.tsx
│   │   │   ├── Controls.module.css
│   │   ├── ReportDisplay/
│   │   │   ├── ReportDisplay.tsx
│   │   │   ├── ReportDisplay.module.css
│   ├── App.tsx       # 根组件
|   |── App.css       # 根组件样式（可选）
│   ├── main.tsx      # 入口文件（挂载 App 组件）
│   ├── index.css     # 全局样式（可选）
├── public/           # 静态资源
├── package.json      # 依赖管理
├── vite.config.ts    # Vite 配置


Controls.tsx
 ├── PLACE 输入框
 │    ├── X 坐标输入框
 │    ├── Y 坐标输入框
 │    ├── 方向选择下拉框
 │    ├── PLACE 按钮
 ├── MOVE 按钮
 ├── LEFT 按钮
 ├── RIGHT 按钮
 ├── REPORT 按钮





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
