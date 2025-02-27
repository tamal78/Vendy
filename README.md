# **Vendy - Vendor Management System**

## **📌 Overview**

Vendy is a simple vendor management system built using **Next.js (App Router), Prisma, PostgreSQL, and NextAuth.js**. It allows users to **authenticate via Google**, manage vendors (CRUD operations), and view vendors with **pagination**.

---

## **🚀 Features**

✅ **Google Authentication (NextAuth.js)**  
✅ **Manually Added User Authentication**  
✅ **Create, Edit, and Delete Vendors**  
✅ **Paginated Vendor List**  
✅ **ShadCN UI Components for Clean UI**  
✅ **Skeleton Loaders for Smooth UX**  
✅ **Optimized Server Actions (Next.js Server Actions in `/actions`)**

---

## **🛠️ Tech Stack**

- **Frontend:** Next.js 15 (App Router)
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL
- **Authentication:** NextAuth.js (Google OAuth)
- **UI Components:** ShadCN UI
- **Styling:** Tailwind CSS
- **State Management:** React Hooks

---

## **📝 Installation & Setup**

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/your-repo/vendy.git
cd vendy
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Configure Environment Variables**

Create a `.env.local` file and add the following:

```plaintext
DATABASE_URL=postgresql://user:password@localhost:5432/vendy
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-random-secret
```

### **4️⃣ Set Up the Database (Prisma + PostgreSQL)**

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### **5️⃣ Start the Development Server**

```bash
npm run dev
```

The app will be live at: `http://localhost:3000`

---

## **🔑 Test Credentials**

A test user has been **manually added** for authentication:

- **Email:** `test20244321@gmail.com`
- **Password:** `test1234#`
- **Login via:** **Google OAuth**

> **Note:** Only this manually added user can log in.

---

## **🛠️ Folder Structure**

```
📦 vendy
 ┣ 📂 app
 ┃ ┣ 📂 vendors
 ┃ ┃ ┣ 📜 page.jsx
 ┃ ┃ ┣ 📂 [id]
 ┃ ┃ ┃ ┣ 📜 page.jsx
 ┃ ┣ 📂 auth
 ┃ ┃ ┣ 📂 [...nextauth]
 ┃ ┃ ┃ ┣ 📜 route.js
 ┣ 📂 actions
 ┃ ┣ 📜 vendor.js
 ┣ 📂 components
 ┃ ┣ 📜 VendorDialog.jsx
 ┃ ┣ 📜 VendorDeleteAlert.jsx
 ┃ ┣ 📜 Navbar.jsx
 ┃ ┣ 📜 AuthButton.jsx
 ┃ ┣ 📜 Logo.jsx
 ┃ ┣ 📜 ThemeSwitche.jsx
 ┣ 📂 lib
 ┃ ┣ 📜 utils.js
 ┣ 📂 prisma
 ┃ ┣ 📜 schema.prisma
 ┣ 📜 .env
 ┣ 📜 README.md
 ┣ 📜 next.config.js
 ┣ 📜 tailwind.config.js
 ┣ 📜 package.json
```

### **Available Routes**

- `/` → Home Page
- `/vendors` → Vendor List Page
- `/vendors/[id]` → Edit Vendor Page

---

## **📌 Future Improvements**

✅ **Search & Filter for Vendors**  
✅ **Admin Dashboard for Role Management**  
✅ **Vendor Reports & Analytics**

---

## **📧 Contact & Support**

If you have any issues or need help, feel free to reach out to tamalkundu2002@gmail.com! 🚀🔥
