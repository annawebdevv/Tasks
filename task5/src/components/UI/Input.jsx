import { Fragment } from "react";
import styled from "styled-components";

export const MyInput = ({props}) => {
  
    return (
        <Fragment>
             <Input {...props}/>
        </Fragment>

    );
  };

  const Input = styled.input`
  padding: 10px;
  color: #5b5b5b;
  background: papayawhip;
  border: none;
  outline: ${(props) => (props.error === true ? "2px solid red;" : "none")};
  border-radius: 3px;
  margin-bottom: 10px;
  min-width: 100%;
  font-size: 22px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px green;
  }
`;

