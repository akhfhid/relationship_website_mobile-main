# Relationship Website Mobile

A **mobile-optimized web application** built with **React, Vite, and Tailwind CSS**, designed to enhance relationship interactions through a fun and personalized web experience.

## 🚀 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rheinatamara/relationship_website_mobile.git
cd relationship_website_mobile
```

### 2️⃣ Install Dependencies

Ensure you have **[Node.js](https://nodejs.org/)** installed. Then, run:

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

### 4️⃣ Access the Application

Open your browser and navigate to **[http://localhost:5173/](http://localhost:5173/)** to view the application.

---

## 🎨 Making the Page Personal to You
This project allows **full customization** through the `config.js` file and by adding images to specific folders.

### **1️⃣ Editing Text & Titles**
All customizable text (titles, messages, prompts) is in `src/config.js`. **You can edit:**
- Passcode settings
- Timer messages
- Music, message, and picture descriptions
- The love letter text

Simply **open `src/config.js`** and edit the values.

---

### **2️⃣ Adding Personal Pictures & Messages**
To add your own images, place them in **`src/assets/`** under the correct subfolders:

📌 **Message Images** (used in the Messages Recap page):
- Location: `src/assets/`
- Naming format: `MessageImage1.png`, `MessageImage2.png`, `MessageImage3.png`, etc.

📌 **Picture Gallery** (used in the Pictures Recap page):
- Location: `src/assets/`
- Naming format: `Picture1.png`, `Picture2.png`, `Picture3.png`, etc.

📌 **Music Album Covers** (used in the Music Recap page):
- Location: `src/assets/music/`
- Naming format: `1.png`, `2.png`, `3.png`, etc.
- **The order of these images follows the list in `config.js` from bottom to top.**
  - **Example:**
    - The last song in `config.js` (`Sunsetz - Cigarettes After Sex`) should be `1.png`
    - The second last (`Kiss Me Thru The Phone - Soulja Boy, Sammie`) should be `2.png`
    - The third last (`Sparks - Coldplay`) should be `3.png`

📌 **Background & Decorative Images**
- `src/assets/fireworks.png` → Background for the closing page.
- `src/assets/christmas.png` → Decoration for the closing page.

If you add new images, **keep the correct format** so the app loads them properly! 🎉

---

## 🖌️ Styling
This project uses **[Tailwind CSS](https://tailwindcss.com/)** for styling.
- You can modify styles in `tailwind.config.js`
- Add or remove Tailwind classes in `.jsx` files
- Everything is **fully responsive** and **mobile-first** 🎨✨

---

## ⚠️ Advanced Settings (For Developers)
> **DO NOT CHANGE UNLESS YOU KNOW WHAT YOU’RE DOING** ⚠️

Certain configurations **should not be changed** unless you are modifying the app structure:

---

## 📜 Conclusion
This project is designed to be **customizable and easy to use**! 🎉 Simply:
1️⃣ **Edit `config.js`** to personalize text
2️⃣ **Add your own images** to `src/assets/`
3️⃣ **Run the project** and enjoy!

For any questions, **open an issue** on the repository. 🚀

