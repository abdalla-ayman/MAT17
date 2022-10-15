import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SendComplaintPage() {
  const [message, setMessage] = useState("");
  const [userId, seUserId] = useState("");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);
  let usersList = { id: 0, firstName: "Momen", lastName: "Abdelwadoud" };

  const showOk = () => {
    setOk(true);
    setTimeout(() => {
      setOk(false);
    }, 2000);
  };
  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  return <div>SendComplaintPage</div>;
}
