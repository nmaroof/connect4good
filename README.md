# Connect4Good

A simple static site built with Eleventy for personal branding and collaborative blogging.

## 🚀 Getting Started (No Admin Rights)

1. Make sure you have Node.js installed. If not, use [nvm](https://github.com/nvm-sh/nvm):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.zshrc  # or ~/.bashrc
   nvm install --lts
   ```

2. Clone or unzip this repo:
   ```bash
   cd connect4good
   npm install
   npm run dev
   ```

3. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 📝 Add Blog Posts

Put new Markdown files into the `/blog` folder. Each should include front matter:
```md
---
title: Your Title
author: Your Name
layout: base.njk
---
```

Happy writing!
