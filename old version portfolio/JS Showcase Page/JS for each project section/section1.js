// SECTION 1 SIGN IN SIGN UP

const emailInput = document.querySelector("[type='email']");
const passwordInput = document.querySelector("[type='password']");
const registerBTN = document.querySelector(".registerBTN");
const loginBTN = document.querySelector(".loginBTN");
const loginSuccess = document.querySelector(".loginSuccess");
const logout = document.querySelector(".logout");

// ON PRESS ENTER, CHANGE FOCUS
emailInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") passwordInput.focus();
});

// REGISTER ACCOUNT
registerBTN.addEventListener("click", () => {
  fetchHandler("register");
});

// LOGIN ACCOUNT
loginBTN.addEventListener("click", () => {
  fetchHandler("login");
});

// FETCH FUNCTION
function fetchHandler(task) {
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  // BASIC VALIDATION
  if (enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0) {
    alert("please enter something in both fields");
    return;
  }

  // COMMON VARIABLES
  const registerURL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAF0SDGNvDf1tceDA0aUtvahCHAtlty0yk";

  const loginURL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAF0SDGNvDf1tceDA0aUtvahCHAtlty0yk";

  const requestBodyPayload = {
    method: "POST",
    body: JSON.stringify({
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  // REGISTER NEW ACCOUNT
  if (task === "register") {
    (async () => {
      try {
        const response = await fetch(registerURL, requestBodyPayload);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error.message);
        } else {
          alert("new account registered! please login now~");
        }
      } catch (error) {
        alert(error);
      }
    })();
  }

  // LOGIN EXISTING ACCOUNT
  if (task === "login") {
    (async () => {
      try {
        const response = await fetch(loginURL, requestBodyPayload);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error.message);
        } else {
          loginSuccess.classList.add("showLoginSuccess");
          logout.addEventListener("click", () => {
            loginSuccess.classList.remove("showLoginSuccess");
          });
        }
      } catch (error) {
        alert(error);
      }
    })();
  }

  // CLEAR INPUT VALUE
  emailInput.value = "";
  passwordInput.value = "";
}
