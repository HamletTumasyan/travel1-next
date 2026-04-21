# 🌍 Travel - Discovery & Adventure

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.5-blue?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, dynamic travel agency platform built with **Next.js 16** and **React 19**. This project features a robust multi-language system, dynamic content management, and seamless integration with external services like EmailJS.

---

## ✨ Key Features

-   **🌍 Multi-Language Support**: Fully localized in English and Armenian.
-   **🖼️ Dynamic Homepage**: Interactive sliders, destination galleries, and featured travel packages.
-   **📦 Package Explorer**: Browse a wide range of travel destinations with details, pricing, and discounts.
-   **📧 Integrated Contact Module**: Functional contact form powered by **EmailJS** for direct user inquiries.
-   **⚡ Live Content**: Site content is dynamically fetched from a mock backend (`json-server`), making updates effortless.
-   **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

---

## 🚀 Tech Stack

-   **Frontend**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
-   **Data Management**: [Axios](https://axios-http.com/) & [JSON-Server](https://github.com/typicode/json-server)
-   **Styling**: Vanilla CSS / CSS Modules
-   **Icons**: FontAwesome & React Icons
-   **Email Service**: [EmailJS](https://www.emailjs.com/)

---

## 🛠️ Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or higher recommended)
-   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd travel
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory (refer to `.env.example`):
    ```env
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    ```

### Running Locally

This project uses a concurrent setup to run both the frontend and the mock API simultaneously.

```bash
npm run dev
```

-   **Frontend**: [http://localhost:3000](http://localhost:3000)
-   **Backend API**: [http://localhost:8000](http://localhost:8000)

---

## 📂 Project Structure

```text
├── app/              # Next.js App Router (Pages & Layout)
├── components/       # Reusable UI components (Header, Footer, Homepage parts)
├── public/           # Static assets (Images, Icons)
├── lib/              # API configuration & Utilities
├── db.json           # Mock database (JSON-Server)
└── styles/           # Global styles and configuration
```

---

## ⚙️ Configuration

### Database (`db.json`)
Manage all site content including navigation, slider text, package details, and gallery images directly in `db.json`. Any changes here will reflect instantly on the UI.

### API Integration
The API base URL is configured in `lib/api.js`. For local development, it points to `http://localhost:8000/`.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or find bugs, feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

**Created by [Hamlet Tumasyan](https://github.com/HamletTumasyan)** | Stay curious and keep traveling! ✈️

