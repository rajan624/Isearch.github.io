import {
  auth,
  signOut
} from "./Firebase.js";

  document.getElementById("logout").addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        alert("Logged out successfully:)");
        window.location.replace("index.html");
      })
      .catch((error) => {
        alert(error.message);
      });
  });
