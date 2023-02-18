const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyAQeXRQmeV_M8oaLhvkwHgfeNfdnM4joQQ",
    authDomain: "bithacks-47e00.firebaseapp.com",
    databaseURL: "https://bithacks-47e00-default-rtdb.firebaseio.com",
    projectId: "bithacks-47e00",
    storageBucket: "bithacks-47e00.appspot.com",
    messagingSenderId: "16078435309",
    appId: "1:16078435309:web:334368b2645c9fc3de2de4"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var name2 = getElementVal("name2");
    var name3 = getElementVal("name3");
    var name4 = getElementVal("name4");
    // var emailid = getElementVal("emailid");
    // var msgContent = getElementVal("msgContent");
    
  
    saveMessages(name, name2, name3,name4);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, name2, name3,name4) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      name2: name2,
      name3: name3,
      name4: name4
,    //   emailid: emailid,
    //   msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };