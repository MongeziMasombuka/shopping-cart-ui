# 🛍️ Shopping Cart UI

A responsive and modern frontend for an e-commerce shopping cart, built with **React**, **Vite**, and **Tailwind CSS**. It integrates with a Node.js + Prisma backend and provides a smooth user experience for browsing products, viewing details, and managing the cart.

---

## 🚀 Features

- 🔍 Product listing with search, filter, and sorting
- 📄 Product detail pages (by slug)
- 🛒 Cart management (add, update, remove)
- ⚡ Fast and lightweight UI powered by Vite
- 🌙 Light/dark theme toggle (optional)
- 🔗 Connected to a REST API backend
- 💡 Deployed on **Netlify**

---

## 🧰 Tech Stack

| Tech        | Purpose                            |
|-------------|------------------------------------|
| React       | Frontend library                   |
| Vite        | Fast dev server & build tool       |
| Tailwind CSS| Utility-first styling              |
| React Router| Routing between pages              |
| Axios       | HTTP client for API requests       |
| Netlify     | Frontend deployment                |

---

## 🔗 Live Demo

👉 [Live Site](https://your-frontend.netlify.app](https://buysomething-shop.netlify.app/)  
🔙 [Backend Repo](https://github.com/MongeziMasombuka/shopping-cart-api)

---

## 📦 Folder Structure [Example]

```

shopping-cart-ui/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── lib/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── vite.config.js
└── .env

````

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/MongeziMasombuka/shopping-cart-ui.git
cd shopping-cart-ui
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
VITE_API_URL=https://your-backend.onrender.com/api
```

Update this with the actual backend URL if different.

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🔐 Environment Variables

| Variable       | Required | Example Value                           |
| -------------- | -------- | --------------------------------------- |
| `VITE_API_URL` | ✅        | `https://your-backend.onrender.com/api` |

---

## 🛠️ Available Scripts

| Script    | Command           | Description                   |
| --------- | ----------------- | ----------------------------- |
| Start Dev | `npm run dev`     | Start the Vite dev server     |
| Build     | `npm run build`   | Build for production          |
| Preview   | `npm run preview` | Preview built version locally |

---

## 🌐 Deployment (Netlify)

1. Push to GitHub
2. Connect GitHub repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add your `VITE_API_URL` in Netlify's environment settings

---

## 🧪 Future Improvements

* 🔐 User authentication (JWT or OAuth)
* 🗂️ Wishlist / Order history
* 🧪 Unit and E2E tests with Vitest or Cypress

---

## 🧑‍💻 Author

**Mongezi Masombuka**
📎 [GitHub](https://github.com/MongeziMasombuka)


