import { useState } from "react";


function StudentDashboard(){


const [students,setStudents] = useState([

{
id:1,
name:"Sean Biningu",
email:"sean@gmail.com",
course:"Software Engineering",
year:"Year 2"
},

{
id:2,
name:"John Smith",
email:"john@gmail.com",
course:"Product Design",
year:"Year 1"
}

]);




const [newStudent,setNewStudent] = useState({

name:"",
email:"",
course:"Software Engineering",
year:"Year 1"

});





// Handle Form Changes

function handleChange(e){

setNewStudent({

...newStudent,

[e.target.name]:e.target.value

});

}







// Add Student


function addStudent(e){

e.preventDefault();



const student={

id:Date.now(),

...newStudent

};



setStudents([

...students,

student

]);



setNewStudent({

name:"",
email:"",
course:"Software Engineering",
year:"Year 1"

});


}







// Delete Student


function deleteStudent(id){


setStudents(

students.filter(

student=>student.id !== id

)

);


}






// Dynamic Statistics


const totalCourses = new Set(

students.map(student=>student.course)

).size;




const totalYears = new Set(

students.map(student=>student.year)

).size;









return(


<div className="dashboard-layout">





{/* SIDEBAR */}


<aside className="sidebar">


<h2>

StudentHub

</h2>



<nav>


<a>
Dashboard
</a>


<a>
Students
</a>


<a>
Courses
</a>


<a>
Reports
</a>


</nav>



</aside>









{/* MAIN CONTENT */}



<main className="main-content">





{/* HEADER */}



<header className="topbar">


<div>


<h1>

Student Management Dashboard

</h1>


<p>

Manage students, courses and academic records

</p>


</div>



<button>

+ Add Student

</button>



</header>









{/* STATISTICS */}



<section className="dashboard-cards">



<div className="stat-card">

<h3>
Total Students
</h3>


<h1>
{students.length}
</h1>


</div>





<div className="stat-card">


<h3>
Courses
</h3>


<h1>
{totalCourses}
</h1>


</div>






<div className="stat-card">


<h3>
Years
</h3>


<h1>
{totalYears}
</h1>


</div>



</section>










{/* STUDENT TABLE */}



<section className="student-table">


<h2>

Students

</h2>



<table>


<thead>

<tr>

<th>
Name
</th>


<th>
Email
</th>


<th>
Course
</th>


<th>
Year
</th>


<th>
Action
</th>


</tr>


</thead>







<tbody>


{

students.map(student=>(


<tr key={student.id}>


<td>

{student.name}

</td>



<td>

{student.email}

</td>




<td>

{student.course}

</td>




<td>

{student.year}

</td>




<td>


<button

className="delete"

onClick={()=>deleteStudent(student.id)}

>

Delete

</button>



</td>



</tr>


))


}



</tbody>




</table>



</section>









{/* ADD STUDENT FORM */}



<section className="form-card">


<h2>

Add Student

</h2>




<form onSubmit={addStudent}>


<input

type="text"

name="name"

placeholder="Full Name"

value={newStudent.name}

onChange={handleChange}

/>





<input

type="email"

name="email"

placeholder="Email"

value={newStudent.email}

onChange={handleChange}

/>







<select

name="course"

value={newStudent.course}

onChange={handleChange}

>


<option>
Software Engineering
</option>


<option>
Product Design
</option>



<option>
Digital Marketing
</option>


</select>








<select

name="year"

value={newStudent.year}

onChange={handleChange}

>


<option>
Year 1
</option>


<option>
Year 2
</option>


<option>
Year 3
</option>


</select>






<button>

Add Student

</button>




</form>



</section>







</main>





</div>



)


}


export default StudentDashboard;