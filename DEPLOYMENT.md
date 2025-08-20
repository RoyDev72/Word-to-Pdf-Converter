# Deployment Guide

This guide will help you deploy the Word to PDF Converter application to various platforms.

## 📦 Prerequisites

- Node.js 14+ installed
- Git repository set up
- Accounts on deployment platforms (Vercel, Heroku, Railway, etc.)

## 🚀 Frontend Deployment (Vercel)

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to Frontend directory:
   ```bash
   cd Frontend
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts and configure:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set the root directory to `Frontend`
4. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Add environment variables if needed:
   - `VITE_BACKEND_URL`: Your backend API URL

## 🔧 Backend Deployment

### Heroku

1. Install Heroku CLI
2. Login to Heroku:
   ```bash
   heroku login
   ```

3. Create a new app:
   ```bash
   heroku create your-app-name
   ```

4. Set buildpacks:
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```

5. Set environment variables:
   ```bash
   heroku config:set FRONTEND_URL=https://your-frontend.vercel.app
   heroku config:set PORT=3000
   ```

6. Deploy:
   ```bash
   git subtree push --prefix Backend heroku main
   ```

### Railway

1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Set root directory to `Backend`
4. Add environment variables:
   - `FRONTEND_URL`: Your frontend URL
   - `PORT`: $PORT (Railway provides this)

### Render

1. Go to [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - Root Directory: `Backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add environment variables

## 🔗 Environment Configuration

### Frontend (.env)
```bash
VITE_BACKEND_URL=https://your-backend-api.herokuapp.com
```

### Backend (.env)
```bash
PORT=3000
FRONTEND_URL=https://your-frontend.vercel.app
```

## 📋 Post-Deployment Checklist

- [ ] Frontend builds successfully
- [ ] Backend starts without errors
- [ ] CORS is configured correctly
- [ ] File upload works
- [ ] PDF conversion works
- [ ] File download works
- [ ] Environment variables are set
- [ ] SSL certificates are working
- [ ] Performance monitoring is set up

## 🐛 Common Deployment Issues

### CORS Issues
- Ensure `FRONTEND_URL` matches your actual frontend URL
- Check that both HTTP and HTTPS are handled if needed

### File Upload Issues
- Ensure upload directories exist and have proper permissions
- Check file size limits on your hosting platform

### Build Failures
- Verify Node.js version compatibility
- Check all dependencies are listed in package.json
- Ensure build commands are correct

## 📊 Monitoring

Consider adding monitoring tools:
- **Frontend**: Vercel Analytics, Google Analytics
- **Backend**: Heroku Metrics, New Relic, DataDog
- **Uptime**: UptimeRobot, Pingdom

## 🔄 Continuous Deployment

Set up automatic deployments:
1. Connect your GitHub repository to deployment platforms
2. Enable automatic deploys on push to main branch
3. Configure build and deployment scripts
4. Set up environment variables for different environments

## 🛡️ Security Considerations

- Never commit environment files (.env) to version control
- Use environment variables for sensitive data
- Enable HTTPS in production
- Implement rate limiting on API endpoints
- Validate and sanitize file uploads