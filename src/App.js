import { useState } from 'react';
import './App.css';


function App() {
  
  // react hook state
  const [formData,setFormdata]= useState('{name:"",email:"",message:""}');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit =(event)=>{
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
    console.log(`Name:${formData.name}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>DEB-EST Survey Form</h1>
        <p>Thank you for taking the time to help us improve the platform</p>
      </header>
      <div className="section">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

          <button id="submit"type="submit">Submit</button>
       </form>
      </div>
      <footer>
        <p>Tous droits réservés © DEBEST 2019-2023 </p>
      </footer>
     
    </div>
  );
}

export default App;
