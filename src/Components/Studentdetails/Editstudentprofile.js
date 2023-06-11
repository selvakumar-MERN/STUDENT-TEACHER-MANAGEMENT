import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

function Editstudentprofile(props) {
  const notify = () => toast("Profile Updated"); 
  const [user, setuser] = useState(props.editUser)

  const handler = (e) => {
    const { name, value } = e.target
    setuser({ ...user, [name]: value })
    console.log(user)
  }
  const update = (e) => {
    e.preventDefault()
    props.updateStudent(user)
  }
  return (
    <div id='wrapper'>
      <Sidebar></Sidebar>

      <div id="content-wrapper" className="d-flex flex-column">

        {/* Main Content*/}
        <div id="content">

          {/* Topbar */}
          <Navbar />
          <div className="container-fluid">

            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Edit Student Profile</h1>
            </div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Name</label>
                  <input type="text" className="form-control" id="inputname" name='name' onChange={handler} value={user.name} placeholder="Name"></input>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Father Name</label>
                  <input type="text" className="form-control" id="inputFathername" onChange={handler} name='father_name' value={user.father_name} placeholder="Fathername"></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputState">Gender</label>
                  <select id="inputState" className="form-control" value={user.gender} onChange={handler} name='gender' >
                    <option selected>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">className</label>
                  <input type="number" className="form-control" id="inputclassName" onChange={handler} name='className' value={user.className} placeholder="className"></input>
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" name='address' onChange={handler} value={user.address} placeholder="1234 Main St"></input>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputCity">State</label>
                  <input type="text" className="form-control" name='state' value={user.state} onChange={handler} id="inputSate"></input>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputCity">City</label>
                  <input type="text" className="form-control" name='city' value={user.city} onChange={handler} id="inputCity"></input>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputCity">Zip</label>
                  <input type="text" className="form-control" name='zip' value={user.zip} onChange={handler} id="inputZip"></input>
                </div>
              </div>
              <ToastContainer />
              <button className="btn btn-primary" onClick={(e) => {update(e);notify()}}>Update</button>
              <Link to="/studentlist">
                <button className="btn btn-danger m-2">Cancel</button>
              </Link>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Editstudentprofile;