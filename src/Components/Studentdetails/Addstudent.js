import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer';

function Addstudent (props) {
    const notify = () => toast("Student Added");
    const initialusers={
    rollno:"",
    name:"",
    father_name:"",
    gender:"",
    className:"",
    address:"",
    city:"",
    state:"",
    zip:""

    }
    const [users,setusers]=useState(initialusers)
   
    const handler=(e)=>{
         const {name,value}=e.target
         setusers({...users,[name]:value})
         console.log(users)
    }
   
    const submit=(e)=>{
        e.preventDefault()
       props.addStudent(users)
    }
    
return ( 
        <div id='wrapper'>
        <Sidebar/>
               <div id="content-wrapper" className="d-flex flex-column">

            {/* Main Content*/}
                   <div id="content">

                   {/* Topbar */}
                  <Navbar/>
                
                  
                  <div className="container-fluid">

                    {/* Page Heading */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Add New Student</h1>
                    </div>
                    <form>
                       <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputEmail4">Name</label>
                          <input type="text" className="form-control" id="inputname" name='name' onChange={handler} placeholder="Name"></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputEmail4">Father Name</label>
                          <input type="text" className="form-control" id="inputFathername" name='father_name' onChange={handler} placeholder="Fathername"></input>
                        </div>
                     </div>
                     <div className="form-row">
                   <div className="form-group col-md-6">
                    <label for="inputState">Gender</label>
                     <select id="inputState" className="form-control" name='gender' onChange={handler}>
                        <option selected>Choose...</option>
                      <option>Male</option>
                      <option>Female</option>
                     </select>
                      </div>
                        <div className="form-group col-md-6">
                      <label for="inputPassword4">className</label>
                      <input type="number" className="form-control" id="inputclassName" name='className' onChange={handler} placeholder="className"></input>
                        </div>
                        </div>
                        <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" name='address' onChange={handler} placeholder="1234 Main St"></input>
  </div>
  <div className="form-row"> 
  <div className="form-group col-md-4">
      <label for="inputCity">State</label>
      <input type="text" className="form-control" name='state' onChange={handler} id="inputSate"></input>
     </div>
     <div className="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" name='city' onChange={handler} id="inputCity"></input>
     </div>              
    <div className="form-group col-md-4">
      <label for="inputCity">Zip</label>
      <input type="text" className="form-control" name='zip' onChange={handler} id="inputZip"></input>
     </div>
    </div>
   
  <button type="button" onClick={(e)=>{submit(e);notify()}}  className="btn btn-primary">Submit</button>
  <ToastContainer/>
</form>
 </div>


 </div>
 <Footer></Footer>
</div>
</div>

            
    )
}

export default Addstudent;