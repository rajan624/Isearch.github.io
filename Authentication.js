import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "./Firebase.js";

document.getElementById("signup").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      console.log(userCredential);
      alert("Account created successfully");
      sendEmailVerification(auth.currentUser)
        .then(() => {
          alert("Please verify your email ,check your mailbox:)");
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        })
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
  });
 
  document.getElementById("login").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        onAuthStateChanged(auth, (user) => {
          if (user.emailVerified) {
        alert("Logged in successfully!");
       
        window.location.replace("homepage.html");
      } else {
        alert("Please verify of your email");
      }
    })
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  document.getElementById("forgetPassword").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("foget email link send to your mail")
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  document.getElementById("verifyemail").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    sendEmailVerification(auth.currentUser)
    .then(() => {
      alert("Please verify your email address check your mailbox:)");
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    })
  });

  document.getElementById("logout").addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        alert("Logged out successfully:)");
      })
      .catch((error) => {
        alert(error.message);
      });
  });
