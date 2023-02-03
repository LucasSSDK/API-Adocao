import { FormEvent, useState } from 'react';
import { StyledForm, StyledLoginForm } from './styles';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { api } from '../../../utils/api/api';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../loading/loading';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  function hadleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function hadleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const userData = await api.login(loginPayload);
    setLoading(false);
    if (!userData) {
      setError(true);
      return;
    } else {
      
      navigate('/Petshop');
    }

  }

  return (
    <>
      {loading ? (
        < Loading />
      ) : (
        <StyledLoginForm>
          <h2> Login </h2>
          <StyledForm onSubmit={hadleSubmit} error = {error}>
            <input placeholder="E-mail" name="e-mail" />
            <div>
              <input
                placeholder="Senha"
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
              />
              <button type = "button" onClick={hadleShowPassword}>
                {showPassword ? (
                  <BsEyeSlashFill size={25} />
                ) : (
                  <BsEyeFill size={25} />
                )}
              </button>
            </div>
            <button type="submit">Login</button>
          </StyledForm>
          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            Not have Account?
          </button>
        </StyledLoginForm>
      )}
    </>
  );
}
