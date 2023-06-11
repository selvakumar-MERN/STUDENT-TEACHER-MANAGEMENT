import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Studentlist from './Components/Studentdetails/Studentlist';
import Addstudent from './Components/Studentdetails/Addstudent';
import { useState } from 'react';
import Editstudentprofile from './Components/Studentdetails/Editstudentprofile';
import Addteacher from './Components/Teacherdetails/Addteacher';
import Teacherlist from './Components/Teacherdetails/Teacherlist';
import Editteacherprofile from './Components/Teacherdetails/Editteacherprofile';
import Dashboard from './Components/Dashboard/Dashboard';
import Stafflist from './Components/Officestaffdetails/Stafflist';
import Addstaff from './Components/Officestaffdetails/Addstaff';
import Editstaffprofile from './Components/Officestaffdetails/Editstaffprofile';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const users=[{
    rollno:1,
    name:"selva",
    father_name:"kuppusamy",
    gender:"male",
    class:"10",
    address:"193 south anna nagar ",
    city:"palani",
    state:"tamilnadu",
    zip:624601
},{
    rollno:2,
    name:"kumar",
    father_name:"kuppusamy",
    gender:"male",
    class:"11",
    address:"193 south anna nagar ",
    city:"palani",
    state:"tamilnadu",
    zip:624601

}]
  const teachers=[{
    teacher_id:1,
    name:"selva",
    father_name:"kuppusamy",
    gender:"male",
    qualification:"B.SC",
    address:"193 south anna nagar ",
    city:"palani",
    state:"tamilnadu",
    zip:624601

  }]
  const staffs=[{
    staff_id:1,
    name:"selva",
    father_name:"kuppusamy",
    gender:"male",
    qualification:"B.SC",
    address:"193 south anna nagar ",
    city:"palani",
    state:"tamilnadu",
    zip:624601

  }]
  const[staffList,setSlist]=useState(staffs)
  const[teacherList,setTlist]=useState(teachers)
  const [studentlist,setlist]=useState(users)
  const[editUser,setedit]=useState("")
  const[editTeach,setTedit]=useState("")
  const[editStaf,setSedit]=useState("")

 //Student ADD,EDIT,UPDATE,DELETE
 //ADD
  const addStudent=(user)=>{
    user.rollno=studentlist.length+1
    setlist([...studentlist,user])
  }
//EDIT
  const editstudent=(items)=>{
       setedit(items)    
  }
//UPDATE
  const updateStudent=(user)=>{
    setlist(studentlist.map(items=>(items.rollno===user.rollno? user:items)))
  }
//DELETE
  const deleteStudent=(user)=>{
    const remove=studentlist.filter(items=>items.rollno!==user.rollno)
    setlist(remove)
  }

//Teacher ADD,EDIT,UPDATE,DELETE
//ADD
  const addTeacher=(user)=>{
    user.teacher_id=teacherList.length+1
    setTlist([...teacherList,user])
 }
//EDIT
  const editTeacher=(items)=>{
    setTedit(items)
  }
//UPDATE  
const updateTeacher=(user)=>{
    setTlist(teacherList.map(items=>(items.teacher_id===user.teacher_id? user:items)))
  }
//DELETE
const deleteTeacher=(user)=>{
    const remove=teacherList.filter(items=>items.teacher_id!==user.teacher_id)
    setTlist(remove)
}

//Staff ADD,EDIT,UPDATE,DELETE
//ADD
const addStaff=(user)=>{
  user.staff_id=staffList.length+1
  setSlist([...staffList,user])
}
//EDIT
const editStaff=(items)=>{
  setSedit(items)
}
//UPDATE
const updateStaff=(user)=>{
  setSlist(staffList.map(items=>(items.staff_id===user.staff_id? user:items)))
}
//DELETE
const deleteStaff=(user)=>{
  const remove=staffList.filter(items=>items.staff_id!==user.staff_id)
  setSlist(remove)
}
  return (
    <BrowserRouter>
    <Routes>
    <Route exact
      path='/'
      element={<Dashboard teacherList={teacherList.length} studentlist={studentlist.length} staffList={staffList.length}/>}>
      </Route>
      <Route exact
      path='/studentlist'
      element={<Studentlist studentlist={studentlist} editstudent={editstudent} deleteStudent={deleteStudent}/>}>
      </Route>
      <Route exact
      path='/addstudent'
      element={<Addstudent addStudent={addStudent}/>}>
      </Route>
      <Route exact
      path='/editstudentprofile'
      element={<Editstudentprofile editUser={editUser} updateStudent={updateStudent}/>}>
      </Route>
      <Route exact
      path='/addteacher'
      element={<Addteacher addTeacher={addTeacher} />}>
      </Route>
      <Route exact
      path='/teacherlist'
      element={<Teacherlist teacherList={teacherList} editTeacher={editTeacher} deleteTeacher={deleteTeacher}/>}>
      </Route>
      <Route exact
      path='/editteacherprofile'
      element={<Editteacherprofile editTeach={editTeach} updateTeacher={updateTeacher}/>}>
      </Route>
      <Route exact
      path='/stafflist'
      element={<Stafflist staffList={staffList} editStaff={editStaff} deleteStaff={deleteStaff}/>}>
      </Route>
      <Route exact
      path='/addstaff'
      element={<Addstaff addStaff={addStaff}/>}>
      </Route>
      <Route exact
      path='/editstaffprofile'
      element={<Editstaffprofile editStaf={editStaf} updateStaff={updateStaff}/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
