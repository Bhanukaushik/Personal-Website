# Portfolio Website

### **Description**
This is a fully responsive portfolio website showcasing my skills, projects, and experiences as a developer. The website includes features like a user-friendly navigation bar, Firebase authentication for secure login and signup, and an elegant design to present my portfolio effectively.

---

## **Features**
- **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices.
- **Login and Signup**: Users can sign in or register using their email and password securely via Firebase authentication.
- **Modern UI/UX**: A clean and intuitive user interface.
- **Projects Section**: Displays my key projects with descriptions and links.
- **Dynamic Routing**: Built-in navigation for smooth transitions between pages.
- **Deployment**: Hosted on a reliable platform with a live link for easy access.

---

## **Technologies Used**
- **Frontend**: React.js
- **Styling**: CSS, React-Bootstrap
- **Authentication**: Firebase Authentication
- **Hosting**: Vercel

---

## **Getting Started**
Follow these instructions to run the project locally:

### Prerequisites
- Node.js installed
- Firebase account set up

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Copy the Firebase configuration and update the `firebase.js` file in your project:
     ```javascript
     import { initializeApp } from "firebase/app";
     import { getAuth } from "firebase/auth";

     const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id",
     };

     const app = initializeApp(firebaseConfig);
     export const auth = getAuth(app);
     ```

5. Start the development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## **Login/Signup Functionality**
- The website uses Firebase Authentication to enable secure login and signup for users.
- Users can:
  - **Sign Up**: Create an account by providing an email and password.
  - **Login**: Access the site using their credentials.
  - After successful login, users are redirected to the **home page** where they can explore the portfolio.

---


## **Live Demo**
[View Live Website](https://bhanu-kaushik-portfolio.vercel.app/)

---

## **Future Enhancements**
- Add Google and GitHub login options.
- Integrate a contact form with backend email functionality.
- Enhance the portfolio section with live previews of projects.

---

## **Contributing**
Contributions are welcome! Please fork the repository and submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**
For questions or collaborations, feel free to reach out:
- **Email**: bhanukaushik.edu@gmail.com
