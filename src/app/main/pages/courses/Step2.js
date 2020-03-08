import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step1 = props => {
  const { register, handleSubmit } = useForm();
  const { state, action } = useStateMachine(updateAction);
  const onSubit = data => {
    action(data);
    props.history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input name="age" ref={register} defaultValue={state.data.age} />
      </label>
      <label>
        Years of experience:
        <input
          name="yearsOfExp"
          ref={register}
          defaultValue={state.data.yearsOfExp}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);
