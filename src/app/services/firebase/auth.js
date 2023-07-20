function login(email, password){
  const auth = getAuth(email, password);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

function singup (params) {
  const {email, password, displayName} =params;

  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    setDoc(
      doc(db, "profiles", user.uid), 
      {
        email,
        uid: user.uid,
        displayName
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });
}

export {login, singup}

<stack>


</stack>