# Medie Sydney Hill Garden

Professional gardening and landscape design services in Sydney, Australia.

## Deployment to Vercel

This project is a React Single Page Application (SPA) built with Vite. It is pre-configured for deployment to Vercel.

### Prerequisites

1.  A [Vercel](https://vercel.com) account.
2.  [Vercel CLI](https://vercel.com/cli) installed (optional, but recommended for local testing).

### Deployment Steps

1.  **Connect to GitHub/GitLab/Bitbucket:**
    *   Push this code to a repository on your preferred Git provider.
    *   In the Vercel dashboard, click "New Project" and import your repository.

2.  **Configure Project:**
    *   **Framework Preset:** Vercel should automatically detect **Vite**.
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`

3.  **Environment Variables:**
    *   If you are using the Gemini AI features, ensure you add the `GEMINI_API_KEY` to the **Environment Variables** section in the Vercel project settings.

4.  **Deploy:**
    *   Click "Deploy". Vercel will build and host your site.

### Client-Side Routing

The `vercel.json` file is included to handle client-side routing. This ensures that refreshing the page on routes like `/about` or `/services` works correctly by redirecting all requests to `index.html`.

### Admin Dashboard

The admin dashboard is accessible at `/admin`. The default password is `admin123`.

---

© 2026 Medie Sydney Hill Garden. All rights reserved.
