# How to Publish on GitHub Pages

Follow these steps to publish your Abhishek Travels website on GitHub Pages:

## Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Sign up for a free account

## Step 2: Create a New Repository
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name your repository (e.g., `abhishek-travels` or `abhishek-travels-website`)
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we already have files)
6. Click "Create repository"

## Step 3: Initialize Git and Push Your Files

Open your terminal/command prompt and navigate to your project folder, then run:

```bash
# Navigate to your project directory
cd "/Users/naveenkumar.yaram/Downloads/Abhiskek Travels"

# Initialize git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Abhishek Travels website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important**: Replace `YOUR_USERNAME` with your GitHub username and `REPO_NAME` with your repository name.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 5: Access Your Website

GitHub will provide you with a URL like:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

It may take a few minutes for the site to be available. You'll see a green checkmark when it's ready.

## Alternative: Using GitHub Desktop (Easier Method)

If you prefer a graphical interface:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Browse to your project folder: `/Users/naveenkumar.yaram/Downloads/Abhiskek Travels`
5. Click "Publish repository" button
6. Name your repository and make it public
7. Click "Publish"
8. Go to repository Settings → Pages and enable it (as in Step 4)

## Updating Your Website

Whenever you make changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

Your GitHub Pages site will automatically update (may take 1-2 minutes).

## Custom Domain (Optional)

If you have a custom domain:
1. Go to repository Settings → Pages
2. Enter your custom domain
3. Follow DNS configuration instructions

## Troubleshooting

- **Site not loading?** Wait 5-10 minutes after enabling Pages
- **404 Error?** Make sure your main file is named `index.html` (it is!)
- **Styles not working?** Check that all file paths are correct (they are!)
- **Images not showing?** Images are loaded from Unsplash, so they should work

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Community: https://github.community/

