import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/auth/forgot-password', { email })
      .then((res) => {
        if (res.data.message === 'OTP sent to email') {
          navigate('/otp-verification', { state: { email } });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h4>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function ForgotPassword() {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   //console.log(email);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
  
//     // Validate email format
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
//       console.log(email);
  
//       if (response.data.message === 'OTP sent to email') {
//         setSuccess('OTP sent successfully. Redirecting...');
//         setTimeout(() => {
//           navigate('/otp-verification', { state: { email } });
//         }, 2000);
//       } else {
//         setError(response.data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Error sending OTP. Please try again later.');
//     }
//   };
  

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h4>Forgot Password</h4>
//         {error && <div className="alert alert-danger">{error}</div>}
//         {success && <div className="alert alert-success">{success}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               autoComplete="off"
//               name="email"
//               className="form-control rounded-0"
//               onChange={(e) => setEmail(e.target.value)}
//               required // Ensures the email field is filled out
//             />
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;

