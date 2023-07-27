import { Link } from 'react-router-dom';


const FirstPage = () => {
  // Dummy department data
  const departments = [
    { id: 1, name: 'Department A' },
    { id: 2, name: 'Department B' },
    { id: 3, name: 'Department C' },
    { id: 4, name: 'Department D' },
    // Add more departments as needed
  ];

  return (
    <div className="page-container">
      <h1 className="title">First Page</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Department ID</th>
              <th>Department Name</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id} className="department-row">
                <td>{department.id}</td>
                <td>
                  <Link to={`/second-page/${department.id}`} className="department-link">
                    {department.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FirstPage;
