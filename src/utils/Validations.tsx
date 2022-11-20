import {USERNAME, PASSWORD} from '@env';

export const isLoginError = (email: string, password: string) => {
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (emailRegex.test(email) === false) {
    console.log(email);
    return 'Please enter valid email!';
  } else if (!password.trim()) {
    return 'Please enter password!';
  } else if (
    email.toLowerCase() != USERNAME.toLowerCase() ||
    password !== PASSWORD
  ) {
    return 'Please enter correct email and password!';
  } else {
    return '';
  }
};
