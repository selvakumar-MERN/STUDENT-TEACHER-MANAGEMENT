import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Mycontext from '../../Mycontext';

function Teacherlist() {
    const {teacherList,editTeacher,deleteTeacher}= useContext(Mycontext)
    return (
        <div id='wrapper'>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content*/}
                <div id="content">

                    {/* Topbar */}
                    <Navbar />

                    <div className="container-fluid">

                        {/* Page Heading */}
                        <h1 className="h3 mb-4 text-gray-800">Teachers List</h1>
                        <div className='text-right'>
                            <Link to="/addteacher" >
                                <button type='button' className='btn btn-primary m-2' >Add New Teacher</button>
                            </Link>
                        </div>
                        <table className='table table-striped table-responsive'>
                            <thead >
                                <tr>
                                    <th>Teacher Id</th>
                                    <th>Name</th>
                                    <th>Father name</th>
                                    <th>Gender</th>
                                    <th>Qualification</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teacherList.map((items) => {
                                    return (
                                        <tr className='text-center'>
                                            <td>{items.teacher_id}</td>
                                            <td>{items.name}</td>
                                            <td>{items.father_name}</td>
                                            <td>{items.gender}</td>
                                            <td>{items.qualification}</td>
                                            <td>{items.address}</td>
                                            <td>{items.city}</td>
                                            <td>{items.state}</td>
                                            <td>
                                                <Link to="/editteacherprofile">
                                                    <button className='btn btn-primary ' onClick={() => { editTeacher(items) }}  >Edit</button>
                                                </Link>
                                                <button className='btn btn-danger mx-2' onClick={() => { deleteTeacher(items) }} >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })

                                }
                            </tbody>
                        </table>



                    </div>
                </div>
                <Footer />
            </div>

        </div>



    );
}

export default Teacherlist;
