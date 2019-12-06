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
    database: "",

};
export default function SearchForm(props) {
  const classes = useStyles();

  const formCallback = (e) => {
    // do something
    console.log("do something", props)
  };
//   const [fakeValue, setFakeValue] = useState(0)
  const [values, handleChanges, handleSubmit, clearForm] = useForm(
    "signUpForm",
    initialFormValues,
    formCallback
  );

  const printData = (props) => {
      // not being called again
    // console.log("get messages")
    // console.log(props.myData)

    if(props.myData === undefined)
    {
    }
    else
    {
        // console.log(props.myData.length)
        if(props.length > 0)
        {
          return (props.myData.map(woman => (
              <p>{woman.name}</p>
          ))
          )
        }
    }

  }
  return (
      <div>
          <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend data-testid="search-title">search for database</legend>
          <TextField
           data-testid="search-field"
            id="outlined-name"
            label="database"
            className={classes.textField}
            value={values.database}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="database"
          />
          {/* <TextField
            id="outlined-name"
            label="email"
            className={classes.textField}
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="email"
          /> */}
          <Button  data-testid="submit" color="blue" type="submit">
            Submit
          </Button>
          <Button data-testid="clear" color="red" onClick={clearForm}>
            Clear
          </Button>
        </fieldset>
      </form>

    </div>

    {printData(props)}
    {/* {setFakeValue(1)} */}
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
