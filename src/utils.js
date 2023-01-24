export const confirmPassword = (pass1, pass2) => {
  return pass1 === pass2 ? true : false;
};

export const checkPassword = (pass) => {
  let number = /[0-9]/;
  let upperLetter = /[A-Z]/;
  let lowerLetter = /[a-z]/;
  if (
    pass.length > 8 &&
    number.test(pass) &&
    upperLetter.test(pass) &&
    lowerLetter.test(pass)
  ) {
    return true;
  }

  return false;
};

export const checkEmail = (email) => {
  let patern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return patern.test(email);
};

// Ispravka na newPassword ako se ukuca polse confirma
export const handlePasswordHelper = (e, obj, funk) => {
  const { value } = e.target;
  let copyObj = { ...obj };
  if (/[A-Z]/.test(value) === false) {
    copyObj.uppercase = "Unos mora da sadrži najmanje jedno veliko slovo";
  } else {
    copyObj.uppercase = "";
  }
  if (/[a-z]/.test(value) === false) {
    copyObj.lowercase = "Unos mora da sadrži najmanje jedno malo slovo";
  } else {
    copyObj.lowercase = "";
  }
  if (/[0-9]/.test(value) === false) {
    copyObj.number = "Unos mora da sadrži najmanje jedan broj";
  } else {
    copyObj.number = "";
  }
  if (value.length < 8) {
    copyObj.len = "Unos mora da sadrži najmanje 8 karaktera";
  } else {
    copyObj.len = "";
  }
  if (
    !copyObj.uppercase &&
    !copyObj.lowercase &&
    !copyObj.number &&
    !copyObj.len
  ) {
    funk("");
  } else {
    funk(copyObj);
  }
  if (value.length < 1) funk("");
};

export const passwordRole = {
  uppercase: "Unos mora da sadrži najmanje jedno veliko slovo",
  lowercase: "Unos mora da sadrži najmanje jedno malo slovo",
  number: "Unos mora da sadrži najmanje jedan broj",
  len: "Unos mora da sadrži najmanje 8 karaktera",
};

export const helperPasswordNode = (helper) => {
  return (
    <span>
      <span className={helper.len ? "visible" : "invisible"}>{helper.len}</span>

      <span className={helper.uppercase ? "visible" : "invisible"}>
        {helper.uppercase}
      </span>

      <span className={helper.lowercase ? "visible" : "invisible"}>
        {helper.lowercase}
      </span>

      <span className={helper.number ? "visible" : "invisible"}>
        {helper.number}
      </span>
    </span>
  );
};
