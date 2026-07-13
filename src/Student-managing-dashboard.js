

function Navbar() {
  return (
    <div className="container">
    <header className="navbar">
      <h1> Student Management Dashboard</h1>
    </header>
{/* 
//the seaction part */}

    <section className="dashboard">
      <div className="card">
        <h2>Total Students</h2>
        <p>0</p>
      </div>

      <div className="card">
        <h2>Courses</h2>
        <p>0</p>
      </div>

      <div className="card">
        <h2>Years</h2>
        <p>0</p>
      </div>
    </section>



    <section className="filter">
      <select>
        <option>All Courses</option>
        <option>Software Engineering</option>
        <option>Product Design</option>
        <option>Digital Marketing</option>
      </select>
    </section>

{/* //search bar */}


     <section className="search">
      <input
        type="text"
        placeholder="Search students..."
      />
    </section>

{/* the statistics  */}

     <section className="statistics">
      <h2>Statistics</h2>

      <p>Total Students: 0</p>

      <p>Software Engineering: 0</p>

      <p>Product Design: 0</p>

      <p>Digital Marketing: 0</p>
    </section>

{/* students card */}
 <div className="student-card">
      <h3>Sean</h3>

      <p>sean@gmail.com</p>

      <p>Software Engineering</p>

      <p>Year 2</p>

      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
  </div>


  {/* student form */}

   <section className="student-form">
      <h2>Add Student</h2>

      <input type="text" placeholder="Full Name" />

      <input type="email" placeholder="Email" />

      <select>
        <option>Software Engineering</option>
        <option>Product Design</option>
        <option>Digital Marketing</option>
      </select>

      <select>
        <option>Year 1</option>
        <option>Year 2</option>
        <option>Year 3</option>
      </select>

      <button>Add Student</button>
    </section>


{/* student list  */}

   <section className="student-list">
      {/* <StudentCard />
      <StudentCard />
      <StudentCard /> */}
    </section>

    <footer className="footer">
      <p>Student Management Dashboard</p>
    </footer>

    </div>
    
  );
}

export default Navbar;