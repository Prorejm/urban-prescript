# 都市指令生成器 | Urban Prescript Generator

> "唯一的准则 即是谨遵指令之意"

一个受月亮计划（Project Moon）作品《废墟图书馆》和《边狱公司》启发的指令生成器。

## 特点

- **月亮计划风格设计**：黑暗哥特风格，金色与暗红色点缀，还原游戏中的"食指"指令氛围
- **打字机效果**：指令以打字机效果逐字显现，增强仪式感
- **浮动歌词**：背景中随机浮现《Children of the City》歌词片段
- **丰富的指令库**：包含时间、动作、荒诞日常、黑暗风格、数学逻辑、社会讽刺、感官体验、存在主义等多种类型
- **历史记录**：保存最近生成的20条指令，可随时回看
- **一键复制**：支持复制指令内容分享

## 技术栈

- 纯 HTML / CSS / JavaScript
- 无外部依赖（仅使用 Google Fonts）
- 响应式设计，支持移动端

## 本地运行

```bash
# 进入项目目录
cd moon-prescript

# 使用 Python 启动本地服务器
python3 -m http.server 8080

# 或使用 Node.js
npx serve .
```

然后访问 `http://localhost:8080`

## 部署到 GitHub Pages

### 方法一：通过 GitHub 网站上传

1. 在 GitHub 上创建一个新仓库（例如 `urban-prescript`）
2. 不要初始化 README 或 .gitignore
3. 在本项目目录下运行：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/urban-prescript.git
git push -u origin main
```

4. 进入仓库的 **Settings** > **Pages**
5. 在 "Source" 部分选择 "Deploy from a branch"
6. 选择 `main` 分支，`/(root)` 目录
7. 点击 Save，等待几分钟即可通过 `https://你的用户名.github.io/urban-prescript` 访问

### 方法二：通过 GitHub Desktop

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 添加本地仓库，选择本项目文件夹
3. 发布仓库到 GitHub
4. 按方法一的步骤 4-7 启用 GitHub Pages

## 灵感来源

- [废墟图书馆 - 食指](https://libraryofruina.huijiwiki.com/wiki/%E9%A3%9F%E6%8C%87)
- [nyos.dev/prescript](https://nyos.dev/prescript)
- [Children of the City - Mili](https://mzh.moegirl.org.cn/Children_of_the_City)

## 许可

本项目仅供学习和娱乐使用。月亮计划（Project Moon）、废墟图书馆（Library of Ruina）、边狱公司（Limbus Company）等均为 Project Moon 的商标和版权所有。
