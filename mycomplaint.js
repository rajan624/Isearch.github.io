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

document.getElementById("addcomp").addEventListener("click", () => {
  alert("its work");
  try {
    const Name = document.getElementById("name").value;
    const Gender = document.getElementById("gender").value;
    const Age = document.getElementById("age").value;
    const Height = document.getElementById("height").value;
    const Color = document.getElementById("color").value;
    const Somethingspecial = document.getElementById("somethingspecial").value;
    const Address = document.getElementById("address").value;
    const Adhar = document.getElementById("adhar").value;
    const Mobile = document.getElementById("mobile").value;
    const Lastlocation = document.getElementById("lastlocation").value;
    const Anymarks = document.getElementById("anymarks").value;
    const Prize = document.getElementById("prize").value;
    if (Name === "" || Gender === "" || Age === "" || Height === "" || Color === "" || Address === "" ||  Adhar === "" || Mobile === "" || Lastlocation === "" || Anymarks === "" || Prize === "") {
      alert("please fill all details");
    } else {
      const user = auth.currentUser;
      if (user !== null) {
        const email = user.email;
        const docRef = setDoc(doc(db, "All_complaint",Adhar), {
          email: email,
          name: Name,
          gender: Gender,
          age: Age,
          height: Height,
          color: Color,
          somethingspecial: Somethingspecial,
          address: Address,
          adhar: Adhar,
          mobile: Mobile,
          lastlocation: Lastlocation,
          anymarks: Anymarks,
          prize: Prize ,
          status :"waiting"
        });
        console.log("Document written with ID: ", docRef.id);
        alert("data stored successfully");
        reset();
        document.getElementById("myForm").style.display = "none";
      }
    }
  } catch (e) {
    console.error("Error adding document: ", e);
    alert(e);
  }
});
var i = 1;
document.getElementById("showdata").addEventListener("click", () => {
  alert("its work");
  const user = auth.currentUser;
    clearTable();
      if (user !== null) {
        const email = user.email;
  const q = query(collection(db, "All_complaint"), where("email", "==", email));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const names = [];
    querySnapshot.forEach((doc) => {
      names.push(doc.data().name);
      var Name = doc.data().name;
      var Gender = doc.data().gender;
      var Age = doc.data().age;
      var Height = doc.data().height;
      var Color = doc.data().color;
      var Somethingspecial = doc.data().somethingspecial;
      var Address = doc.data().address;
      var Adhar = doc.data().adhar;
      var Mobile = doc.data().mobile;
      var Lastlocation = doc.data().lastlocation;
      var Anymarks = doc.data().anymarks;
      var Prize = doc.data().prize;
      var Status = doc.data().status;
      additemtotable(Name, Gender, Age, Height, Color, Somethingspecial, Address,Adhar,Mobile, Lastlocation, Anymarks, Prize,Status);
    });
    console.log("Current cities in CA: ", names.join(", "));
    i++;
    console.log(i);
  });
}
});
function additemtotable(Name, Gender, Age, Height, Color, Somethingspecial, Address, Adhar,Mobile, Lastlocation, Anymarks, Prize,Status) {
  var tbody = document.getElementById("tbody1");
  var trow = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");
  var td13 = document.createElement("td");
  td1.innerHTML = Name;
  td2.innerHTML = Gender;
  td3.innerHTML = Age;
  td4.innerHTML = Height;
  td5.innerHTML = Color;
  td6.innerHTML = Somethingspecial;
  td7.innerHTML = Address;
  td8.innerHTML = Adhar;
  td9.innerHTML = Mobile;
  td10.innerHTML = Lastlocation;
  td11.innerHTML = Anymarks;
  td12.innerHTML = Prize;
  td13.innerHTML = Status;
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);
  trow.appendChild(td9);
  trow.appendChild(td10);
  trow.appendChild(td11);
  trow.appendChild(td12);
  trow.appendChild(td13);
  tbody.appendChild(trow);
}
function reset() {
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("age").value = "";
  document.getElementById("height").value = "";
  document.getElementById("color").value = "";
  document.getElementById("somethingspecial").value = "";
  document.getElementById("address").value = "";
  document.getElementById("adhar").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("lastlocation").value = "";
  document.getElementById("anymarks").value = "";
  document.getElementById("prize").value = "";
}
function clearTable()
{
 var tableRef = document.getElementById('tbody1');
 while ( tableRef.rows.length > 0 )
 {
  tableRef.deleteRow(0);
 }
}