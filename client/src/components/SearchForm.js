import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { useForm } from "../hooks/useSearchForm";
import Button from "../theme/Button";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));
const initialFormValues = {
  email: "",
  username: ""
};
export default function SearchForm() {
  const classes = useStyles();

  const formCallback = () => {
    // do something
  };
  const [values, handleChanges, handleSubmit, clearForm] = useForm(
    "signUpForm",
    initialFormValues,
    formCallback
  );

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="Username"
            className={classes.textField}
            value={values.username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="username"
          />
          <TextField
            id="outlined-name"
            label="email"
            className={classes.textField}
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="email"
          />
          <Button color="blue" type="submit">
            Submit
          </Button>
          <Button color="red" onClick={clearForm}>
            Clear
          </Button>
        </fieldset>
      </form>
    </div>
  );
}

// custom hook
// start with "use" so linter can make sure we are using hook rules correctly
// const useInput = initialValue => {
//   // state
//   const [value, setValue] = useState(initialValue);

//   // handle changes
//   const handleChanges = e => {
//     setValue(e.target.value);
//   };

//   return [value, setValue, handleChanges];
// };
