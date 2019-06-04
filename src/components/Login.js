import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  render() {
    const {
      handleInputEmail,
      handleInputPassword,
      onSubmit,
      handleEyePassword,
      eyePassword,
      isErrorVisible
    } = this.props;
    return (
      <React.Fragment>
        <header className="login__header">
          <h1 className="login__title">VASS</h1>
        </header>
        <form className="login__container" onSubmit={onSubmit}>
          <div className="inputs__container">
            <label htmlFor="input__user" className="label__item label__user">
              Usuario
            </label>
            <input
              type="text"
              id="input__user"
              className="input__item input__user"
              onChange={handleInputEmail}
            />
            <label
              htmlFor="input__password"
              className="label__item label__password"
            >
              Contraseña
            </label>
            <div className="password__container">
              <input
                type={eyePassword}
                id="input__password"
                className="input__item input__password"
                onChange={handleInputPassword}
              />
              <i
                className={`eye fas fa-eye${
                  eyePassword === 'password' ? '' : '-slash'
                }`}
                onClick={handleEyePassword}
              />
            </div>
            {isErrorVisible ? <p className="error__message"> <i className="fas fa-exclamation-circle"></i> El nombre de usuario o la contraseña son incorrectos.</p> : null}
            <input type="submit" value="Entrar" className="input__submit" />
          </div>
        </form>
        <div className="who__container">
          <h2 className="who__title">
            <span className="who__span">Who</span>{' '}
            <span className="is__span">is</span>{' '}
            <span className="who__span">Who</span>
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  handleEyePassword: PropTypes.func.isRequired,
  eyePassword: PropTypes.string.isRequired
};

export default Login;
