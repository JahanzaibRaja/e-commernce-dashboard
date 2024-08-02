import {  useState } from 'react';
import './css/signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup()
 {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
   
  const navigate = useNavigate();
  // useEffect(() => {
  //   const user = localStorage.getItem('user');
  //   if (user) {
  //     navigate('/register');
  //   } 
  // }, [navigate]);
  

   // Dependency array to prevent infinite useEffect calls

  async function collectData(event) {
    console.log('hello')
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Basic validation checks
    if (!firstName || !lastName || !username || !city || !password) {
      
      console.log('fields required');
    }
else
{
  console.log('data sent');
}
    // Reset any previous error messages
       
    try {
      const response = await axios.post('http://localhost:4300/signup', {
        firstName,
        lastName,
        username,
        city,
        password,
   
      });
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      
    } 
  
}
 
  // Display a loading spinner while checking auth status
  return (
    <>
    <div className="signup">
      <h1 className="mb-3">Sign Up</h1>
      
      <form className="row g-3 needs-validation" noValidate onSubmit={collectData}>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">First name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="validationCustom01"
            required
          />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">Last name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="validationCustom02"
            required
          />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">Username</label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            id="validationCustom03"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom04" className="form-label">Password</label>
          <input
            type="password" // Ensures password is masked
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="validationCustom04"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid password.
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit" // Change type to submit to handle form submit
          
          >
          Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
    
    
  }

 


export default Signup;
