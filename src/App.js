import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Studentlist from './Components/Studentdetails/Studentlist';
import Addstudent from './Components/Studentdetails/Addstudent';
import Editstudentprofile from './Components/Studentdetails/Editstudentprofile';
import Addteacher from './Components/Teacherdetails/Addteacher';
import Teacherlist from './Components/Teacherdetails/Teacherlist';
import Editteacherprofile from './Components/Teacherdetails/Editteacherprofile';
import Dashboard from './Components/Dashboard/Dashboard';
import Stafflist from './Components/Officestaffdetails/Stafflist';
import Addstaff from './Components/Officestaffdetails/Addstaff';
import Editstaffprofile from './Components/Officestaffdetails/Editstaffprofile';
import Userprovider from './Userprovider';


function App() {

  return (
    <Userprovider>
    <BrowserRouter>
    <Routes>
    <Route exact
      path='/'
      element={<Dashboard />}>
      </Route>
      <Route exact
      path='/studentlist'
      element={<Studentlist />}>
      </Route>
      <Route exact
      path='/addstudent'
      element={<Addstudent />}>
      </Route>
      <Route exact
      path='/editstudentprofile'
      element={<Editstudentprofile />}>
      </Route>
      <Route exact
      path='/addteacher'
      element={<Addteacher  />}>
      </Route>
      <Route exact
      path='/teacherlist'
      element={<Teacherlist />}>
      </Route>
      <Route exact
      path='/editteacherprofile'
      element={<Editteacherprofile />}>
      </Route>
      <Route exact
      path='/stafflist'
      element={<Stafflist  />}>
      </Route>
      <Route exact
      path='/addstaff'
      element={<Addstaff />}>
      </Route>
      <Route exact
      path='/editstaffprofile'
      element={<Editstaffprofile />}>
      </Route>
    </Routes>
    </BrowserRouter>
    </Userprovider>
   
  );
}

export default App;
