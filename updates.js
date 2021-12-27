import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc,
    db,
    auth,
    query,
    where,
    getDocs,
    onSnapshot,
    updateDoc,
    deleteDoc 
  } from "./Firebase.js";
  
  document.getElementById("upcomp").addEventListener("click", () => {
    alert("its work update fucntion");
    try {
       const Status = document.getElementById("upstatus").value;
      const Adhar = document.getElementById("upadhar").value;
      if (Status==="" || Adhar === "") {
        alert("please fill all details");
   } else {
       alert(Adhar);
    const washingtonRef = doc(db, "All_complaint", Adhar );
     updateDoc(washingtonRef, {
      status: Status 
    });
    alert("data updated successfully");
    } 
}catch (e) {
      console.error("Error adding document: ", e);
      alert(e);
    }
  });
  document.getElementById("delcomp").addEventListener("click", () => {
    alert("its work update fucntion");
    try {
      const Adhar = document.getElementById("upadhar").value;
      if (Adhar === "") {
        alert("please fill adhar no details");
   } else {
       alert(Adhar);
       deleteDoc(doc(db, "All_complaint", Adhar));
    alert("data deleted successfully");
    } 
}catch (e) {
      console.error("Error adding document: ", e);
      alert(e);
    }
  });