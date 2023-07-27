import { useParams } from 'react-router-dom';

const SecondPage = () => {
  const { departmentId } = useParams();

  return (
    <div>
      <h1>Second Page</h1>
      <p>Selected Department ID: {departmentId}</p>
      {/* Add any additional components or content for the second page here */}
    </div>
  );
};

export default SecondPage;
