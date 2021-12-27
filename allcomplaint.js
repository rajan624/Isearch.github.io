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
    onSnapshot
  } from "./Firebase.js";
  var details = 0;
  document.getElementById("showdata1").addEventListener("click", () => {
    alert("its work");
    clearTable();
    const q = query(collection(db, "All_complaint"));
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
        var Mobile = doc.data().mobile;
        var Lastlocation = doc.data().lastlocation;
        var Anymarks = doc.data().anymarks;
        var Prize = doc.data().prize;
        var Status = doc.data().status;
        additemtotable(Name, Gender, Age, Height, Color, Somethingspecial, Address, Mobile, Lastlocation, Anymarks, Prize,Status);
      });
      console.log("Current cities in CA: ", names.join(", "));
    });
  });
  
  function additemtotable(Name, Gender, Age, Height, Color, Somethingspecial, Address, Mobile, Lastlocation, Anymarks, Prize,Status) {
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
    td1.innerHTML = Name;
    td2.innerHTML = Gender;
    td3.innerHTML = Age;
    td4.innerHTML = Height;
    td5.innerHTML = Color;
    td6.innerHTML = Somethingspecial;
    td7.innerHTML = Address;
    td8.innerHTML = Mobile;
    td9.innerHTML = Lastlocation;
    td10.innerHTML = Anymarks;
    td11.innerHTML = Prize;
    td12.innerHTML = Status;
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
    tbody.appendChild(trow);
  }
  function clearTable()
{
 var tableRef = document.getElementById('tbody1');
 while ( tableRef.rows.length > 0 )
 {
  tableRef.deleteRow(0);
 }
}