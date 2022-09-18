export const SignInForm = () => {
    return (
        <div className='form__wrap'>
            <h2 className='form__title'>Sign in</h2>
            <form>
                <label htmlFor="signin-email">Email</label>
                <input type="email" ame="signin-email" required id="signin-email" placeholder="youremail@email.com"></input>
                <label htmlFor="signin-pwd">Password</label>
                <input type="password" name="signin-pwd" placeholder="******" minLength="6" required id="signin-pwd"></input>
                <input className="btn btn--light" type="submit" value="Login"></input>
                <label className="toggle" htmlFor="to-cover">Create account</label>
            </form>
        </div>   
    )
  }