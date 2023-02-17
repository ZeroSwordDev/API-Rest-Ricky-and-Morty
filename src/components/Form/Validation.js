const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i;

const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export const validation = (userData) => {
  let errors = {};
  if (!regexEmail.test(userData.username))
    errors.username = "El usuario debe ser un email";
  else if (!userData.username)
    errors.username = "El usuario no puede estar vacío";
  else if (userData.username.lengh > 35)
    errors.username = "El nombre de usuario no debe ser mayor a 35 caracteres";
  if (userData.password.lengh > 6 && userData.password.lengh < 10)
    errors.password =
      "La contraseña debe tener una longitud entre 6 y 10 caracteres";
  else if (!regexPassword.test(userData.password))
    errors.password = "La contraseña debe tener al menos un número";
  return errors;
};