import React from 'react'
import "@fontsource/poppins";
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Container>
      <h1>Login</h1>
      
      <Cred>
        <label>Login ID</label>
        <input type="email" placeholder='Enter Login ID' />
      </Cred>
    
      <Cred>
        <label>Password</label>
        <input type="email" placeholder='Enter Password'/>
      </Cred>

      <Checkboxes>
        <Group>
           <input type="checkbox" ></input>
           <p>Remember me</p>
        </Group>
          <p>Change Password</p>
      </Checkboxes>

      <Group>
        <RowGroup>
        <input type="checkbox"></input>
          <p>Agree to &nbsp;</p>
          <p style={{
            cursor: 'pointer',
            color: '#F78719',
            textDecoration: 'underline',
            textDecorationColor: '#F78719'
          }}>Terms and Conditions</p>
        </RowGroup>
      </Group>
      
      <Button>
        <button >Login</button>
      </Button>
      
      <RowGroup>
        <p>Don't have an account ?&nbsp;</p>
        <p  style={{
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#F78719',
            textDecoration: 'underline',
            textDecorationColor: '#F78719'
        }}>Register Here</p>
      </RowGroup>
      
    </Container>
  )
}

const Container = styled.div`
  height : calc(100vh - 80px);
  width : 100%;
  box-sizing : border-box;
  padding : 100px;
  margin : 40px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  display : flex;
  flex-direction : column;
  h1 {
      text-align : center;
      font-size: 48px;
      margin : 30px;
  }

  @media (min-width: 0) and (max-width: 750px){
    font-size : 14px;
    padding : 30px;
    margin : 0px;
  }

  @media (min-width: 0) and (max-width: 400px){
    margin : 0px;
    padding : 20px;
    font-size : 12px;
    
  }
`;

const Button = styled.div`
  align-items : center;
  justify-content: center;
  display : flex;
  margin : 30px;
  button {
    width : 400px;
    height : 35px;
    background: #1575A7;
    border-radius: 8px;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    border : none;
  }
   
`;
const Cred = styled.div`
  display: flex;
  flex-direction: column;
  margin : 5px 0px;
  label {
    text-align : 
      margin : 5px 0px;
      font-weight: 500;
      font-size: 18px;
      line-height: 110%;
  }

  input {
    height : 30px;
    padding : 10px;
    box-sizing : border-box;
    margin : 5px 0px;
    border: 1px solid rgba(4, 7, 47, 0.4);
    border-radius: 8px;
    width : 100%;
  }
`;

const Checkboxes = styled.div`
  justify-content: space-between;
  display: flex;
  
  p {
    cursor : pointer;
    margin : 5px 0px;
    color : #F78719;
  }
`;

const Group = styled.div`
  display : flex;
  input {
    margin : 0px 10px 0px 0px;
  }
`;
const RowGroup = styled.div`
  display : flex;
  justify-content : center;
`;


export default LoginPage;



