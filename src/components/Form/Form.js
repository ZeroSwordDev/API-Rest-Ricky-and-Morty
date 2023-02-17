import React, { useState } from 'react';
import { validation } from './Validation';


const Form = ({login}) => {
    const [userData, setUserData] = useState({
      username: "",
      password: "",
    });
    const [errors, setErrors] = useState({
      username: "",
      password: "",
    });
    const handleInputChange = (e) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
  
      setErrors(
        validation({
          ...userData,
          [e.target.name]: e.target.value,
        })
      );
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      login(userData)
    }
    return (
      <div>
        <form  onSubmit={handleSubmit}>
          <label text="username" htmlFor="username">
            Username:
          </label>
          <input
            name="username"
            id="username"
            placeholder="Ingrese el usuario..."
            type="text"
            value={userData.username}
            onChange={handleInputChange}
          />
          <p>{errors.username}</p>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            id="password"
            placeholder="Ingrese el password..."
            type="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <p>{errors.password}</p>
          <button type="submit">LOG IN</button>
        </form>
      </div>
    );
  };
  
  export default Form;