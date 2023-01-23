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
