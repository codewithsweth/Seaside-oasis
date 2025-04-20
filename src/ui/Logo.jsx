import styled from "styled-components";
import logo from "../data/img/logo-light.png"

const StyledLogo = styled.div`
    text-align: center;
`

const Img = styled.img`
  height: 9.6rem;
  height: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={logo} />
    </StyledLogo>
  );
}

export default Logo;
