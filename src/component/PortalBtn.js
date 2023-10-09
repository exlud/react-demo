import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 1px 6px;
  border-radius: 5px;
  margin: 0px 0px;
  cursor: pointer;
  position:absolute;
  top:0;
  right:0;
  margin-top: 10px;
  margin-right: 10px;
`;

function PortalBtn(props) {

  const nav = useNavigate();
  const handleClickBtn = () => {
    nav('/login');
  };

  return (
    <Button onClick={handleClickBtn}>
      {props.text}
    </Button>
  );
}

export default PortalBtn;