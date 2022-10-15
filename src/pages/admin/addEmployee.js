import { addEmployee, deleteEmployee } from "../../api/employee";

const AddEmployee = () => {
  const [username, setusername] = useState();
  const [password, sePassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState();
  const [email, setEmail] = useState();
  const [salary, setSalary] = useState();
  //boolean
  const [isEmployee, setIsEmployee] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    setIsEmployee(false);
    e.preventDefault();
    //set data to send it to database
    let data = { username, password, role, firstName, lastName, email, salary };

    addEmployee(data);
    if (response) {
      //some code goes here like
      setIsEmployee(true);
    } else {
      setErr(error);
    }
  };

  return <div>add new employee</div>;
};

export default AddEmployee;
