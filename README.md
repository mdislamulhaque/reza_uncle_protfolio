# 🚀 React AI Portfolio

A modern **React 19 + Vite + Tailwind CSS v4** application integrated with **Google Gemini AI** and **EmailJS** for AI-powered features and contact form functionality.

---

## ✨ Features

* ⚛️ React 19
* ⚡ Vite 6
* 🎨 Tailwind CSS v4
* 🤖 Google Gemini AI Integration
* 📧 EmailJS Contact Form
* 📄 PDF Export (jsPDF)
* 📸 HTML to Canvas Capture
* 🎉 Canvas Confetti Animations
* 🎭 Motion Animations
* 🌐 Responsive Design

---

# 🛠️ Tech Stack

| Technology       | Version |
| ---------------- | ------- |
| React            | 19      |
| Vite             | 6       |
| Tailwind CSS     | 4       |
| TypeScript       | 5       |
| Google Gemini AI | Latest  |
| EmailJS          | Latest  |
| Axios            | Latest  |
| Express          | Latest  |

---

# 📦 Installation

## 1. Clone the repository

```bash
git clone <repository-url>

cd project-folder
```

---

## 2. Install dependencies

```bash
npm install
```

If needed:

```bash
npm install --save-dev @types/react
```

---

## 3. Create Environment File

Create a file named:

```text
.env.local
```

Add your Gemini API Key:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## 4. Start Development Server

```bash
npm run dev
```

Application will run at:

```
http://localhost:3000
```

---

# 📂 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

---

### Build

```bash
npm run build
```

Builds the production-ready application.

---

### Preview

```bash
npm run preview
```

Preview the production build locally.

---

### Type Checking

```bash
npm run lint
```

Runs TypeScript type checking.

---

### Clean

```bash
npm run clean
```

Removes generated build files.

---

# 📧 EmailJS Integration

The contact form is connected using **EmailJS**, allowing users to send emails directly from the frontend without creating a custom backend.

---

## Step 1 — Create an EmailJS Account

Visit:

https://www.emailjs.com/

Create a free account and log in.

---

## Step 2 — Create an Email Service

Go to:

```
Email Services
```

Connect your preferred email provider (Gmail, Outlook, etc.).

After creation you'll receive:

```
SERVICE_ID
```

Example:

```
service_xxxxxx
```

---

## Step 3 — Create an Email Template

Navigate to:

```
Email Templates
```

Create a template using variables like:

```
{{name}}

{{email}}

{{subject}}

{{message}}
```

Save the template and copy the:

```
TEMPLATE_ID
```

Example:

```
template_xxxxxx
```

---

## Step 4 — Get Your Public Key

Go to:

```
Account
→ General
→ Public Key
```

Copy your:

```
PUBLIC_KEY
```

Example:

```
abcXYZ123456
```

---

## Step 5 — Install EmailJS

```bash
npm install @emailjs/browser
```

---

## Step 6 — Send Email

Example:

```javascript
emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
        name,
        email,
        subject,
        message,
    },
    PUBLIC_KEY
);
```

---

# 🔄 EmailJS Process Flow

```text
User
   │
   ▼
Fill Contact Form
   │
   ▼
React Validation
   │
   ▼
emailjs.send()
   │
   ▼
EmailJS Service
   │
   ▼
Email Template
   │
   ▼
Connected Gmail / Outlook
   │
   ▼
Email Delivered
```

---

# 📁 Recommended Folder Structure

```text
src/

├── assets/

├── components/

├── pages/

├── hooks/

├── services/

│   ├── email.ts

│   └── gemini.ts

├── utils/

├── App.tsx

└── main.tsx
```

---

# 🔐 Environment Variables

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

> Never commit your API keys to a public repository.

---

# 🚀 Production Build

```bash
npm run build
```

The generated files will be available inside:

```text
dist/
```

These files can be deployed to:

* Netlify
* Vercel
* Firebase Hosting
* Cloudflare Pages
* GitHub Pages (with configuration)

---

# 📋 Project Dependencies

### Main Dependencies

* React
* React DOM
* Vite
* Tailwind CSS
* Motion
* Axios
* EmailJS
* Google Gemini AI
* jsPDF
* html2canvas
* canvas-confetti
* Express

---

# 🤝 Contributing

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed with ❤️ using **React, Vite, Tailwind CSS, Google Gemini AI, and EmailJS**.
