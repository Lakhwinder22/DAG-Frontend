import React, { useState } from 'react';

function HiringForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [expectedCTC, setExpectedCTC] = useState('');
  const [previousCTC, setPreviousCTC] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here, such as sending the data to a server or performing other actions

    // Reset form fields after submission
    setName('');
    setPhone('');
    setEmail('');
    setResume(null);
    setExpectedCTC('');
    setPreviousCTC('');
  };

  return (
    <>
      <ul>
        <div className='hiring'>
          <div className='hire' >
            <div className='row'>
              <div className='col'>

                <form onSubmit={handleSubmit}>
                  <br></br>


                  <br></br>


                  <br></br>
                  <ul><h2>Hiring Form</h2></ul>

                  <br></br>
                  <br></br>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                  <label htmlFor="resume">Resume:</label>
                  <input type="file" id="resume" onChange={(e) => setResume(e.target.files[0])} accept=".pdf,.doc,.docx" required />

                  <label htmlFor="expectedCTC">Expected CTC:</label>
                  <input type="text" id="expectedCTC" value={expectedCTC} onChange={(e) => setExpectedCTC(e.target.value)} required />

                  <label htmlFor="previousCTC">Previous CTC:</label>
                  <input type="text" id="previousCTC" value={previousCTC} onChange={(e) => setPreviousCTC(e.target.value)} required />
                 
                  <br />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}

export default HiringForm;






















