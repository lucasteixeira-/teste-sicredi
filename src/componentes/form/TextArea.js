import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

const TextArea = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <textarea
        ref={inputRef}
        id={fieldName}
        as="textarea"
        rows="3"
        defaultValue={defaultValue}
        className={error ? "inputError" : ""}
        {...rest}
      />
      {error && <small>{error}</small>}
    </>
  );
};

export default TextArea;
