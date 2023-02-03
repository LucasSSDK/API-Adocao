import styled from 'styled-components';

export const StyledLoginForm = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  border: solid 5px;
  color: #3359ec;
  height: 667px;
  margin: auto;

  h2 {
    font-size: 2.5rem;
    color: #8a2be2;
  }
`;

export type StyledFormProps = {
  error: boolean;
};

export const StyledForm = styled.form<StyledFormProps>`
  
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    display: flex;
    width: 90%;
    padding: 3px 5px;
    margin: 5px;
    height: 35px;
    border: ${(props) => (props.error ? "solid 1px red" : "none")};
    
    font-size: 1.2rem;
    border-radius: 5px;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 90%;
    border-radius: 5px 0 0 5px;
    border: none;
    align-items: center;


    input {
      display: flex;
      width: 100%;
      border-radius: 5px 0 0 5px;
      border-right: 10px;
      padding: 3px 5px;
      margin: 0px;
      height: 35px;
      background: ${(props) => props.theme.darkTheme.fg};
      
    }

    button {
      display: flex;
      align-items: center;
      border-left: none;
      padding: 0 5px;
      margin: 0;
      cursor: pointer;
      border-radius: 0 5px 5px 0;
      height: 35px;
      background: ${(props) => props.theme.darkTheme.fg};
      
    
    }
  }

  button {
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 10px;
    border: none;
    background-color: ${(props) => props.theme.darkTheme.fg};
    cursor: pointer;
    
  }
`;
