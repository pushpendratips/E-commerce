import React from "react";
import styled from "styled-components";
import { Search,ShoppingCartOutlined} from "@mui/icons-material";
import Badge from '@mui/material/Badge';
const Navbar = () => {
  const Container = styled.div`
    height: 60px;
  `;

  const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-around;
    align-items:center;
  `;
  const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  `;

const Language = styled.div `
font-size:14px;
cursor:pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
  const Center = styled.div`
  flex:1; text-align:center;
  `;
  const Right = styled.div`
  flex:1;
  align-items:center;
  justify-content:flex-end;
  display:flex;
  `;

  const Input = styled.input`
  border: none;`;

  const Logo = styled.h1`
  font-weight:bold;
  `
const MenuItem = styled.div `
font-size:14px;
cursor:pointer;
margin-left:25px;
`
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><Logo>UjjwalTIPS.</Logo></Center>
        <Right>

<MenuItem>REGISTER</MenuItem>
<MenuItem>SIGN IN</MenuItem>
<MenuItem>
<Badge badgeContent={4} color="primary">
<ShoppingCartOutlined />
    </Badge>
</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
