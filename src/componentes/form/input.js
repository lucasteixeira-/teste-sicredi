import React, {useEffect, useRef} from "react";
import {useField} from "@unform/core";

const Input = ({name, ...rest}) => {
  const inputRef = useRef(null);
  const {fieldName, registerField, defaultValue = "", error} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input
        ref={inputRef}
        id={fieldName}
        lang="pt-BR"
        defaultValue={defaultValue}
        className={error ? "inputError" : ""}
        {...rest}
      />
      {error && <small>{error}</small>}
    </>
  );
};

export default Input;