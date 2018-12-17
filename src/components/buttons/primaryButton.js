import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import buttonStyle from "./style";


function PrimaryButton(props) {
  const { classes, variant, children, color, handleSubmit } = props;
  const btnClasses =
      variant == "contained"
      ? { contained: classes.button, label: classes.label }
      : variant == "outlined"
      ? { outlined: classes.outlinedBtn, label: classes.outlinedLabel }
      : variant == "text"
      ? { text: classes.textBtn, textPrimary: classes.textBtnPrimary, textSecondary: classes.textBtnSecondary } 
      : null;

  return (
    <div>
      <Button variant={variant} color={color} classes={btnClasses} onClick={handleSubmit}>
        {children}
      </Button>
    </div>
  );
}

export default withStyles(buttonStyle)(PrimaryButton);
