# 🚀 GitHub Pages Deployment Guide

## Quick Deploy to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages:

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `portfolio` (or your preferred name)
4. Description: "My professional portfolio website"
5. Set to **Public** (required for free GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 2: Initialize Git and Push Code

Open your terminal in the portfolio folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 4: Enable GitHub Actions

1. Still in **Settings**
2. Go to **Actions** → **General**
3. Under **Workflow permissions**, select:
   - **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

### Step 5: Trigger Deployment

The deployment will automatically start when you:
- Push code to the `main` branch, OR
- Manually trigger it:
  1. Go to **Actions** tab
  2. Select **"Deploy to GitHub Pages"** workflow
  3. Click **"Run workflow"** → **"Run workflow"**

### Step 6: Access Your Site

After deployment completes (usually 2-3 minutes):
- Your site will be available at:
  ```
  https://YOUR_USERNAME.github.io/portfolio/
  ```

## 🔧 Configuration

### Update Base Path

If your repository name is different from `portfolio`, update `vite.config.ts`:

```typescript
base: '/YOUR_REPO_NAME/',
```

### Custom Domain (Optional)

1. Create a `CNAME` file in the `public` folder:
   ```
   yourdomain.com
   ```

2. Update DNS settings with your domain provider:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`

3. In GitHub repository Settings → Pages:
   - Add your custom domain

## 📝 Updating Your Site

After making changes:

```bash
# Make your changes to files

# Stage changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main
```

GitHub Actions will automatically rebuild and deploy your site!

## 🐛 Troubleshooting

### Site Not Loading?

1. **Check Actions**: Go to **Actions** tab to see if deployment failed
2. **Check Base Path**: Ensure `base` in `vite.config.ts` matches your repo name
3. **Wait a Few Minutes**: First deployment can take 5-10 minutes
4. **Clear Cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### 404 Error?

- Make sure the base path in `vite.config.ts` is correct
- Ensure the repository name matches the base path
- Check that GitHub Pages is enabled in Settings

### Build Fails?

- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version (should be 18+)

## 📦 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The dist folder contains your built site
# You can manually upload it to GitHub Pages
```

## 🔗 Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Your portfolio will be live at: `https://YOUR_USERNAME.github.io/portfolio/`** 🎉

