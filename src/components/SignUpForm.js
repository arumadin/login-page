export const SignUpForm = () => {
    return (
        <div className='form__wrap'>
            <h2 className='form__title'>Create Account</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required id="email" placeholder="youremail@email.com"></input>
                <label htmlFor="pwd">Password</label>
                <input type="password" name="pwd" placeholder="******" minLength="6" required id="pwd"></input>
                <label htmlFor="confirmpwd">Confirm Password</label>
                <input type="password" name="confirmpwd" placeholder="******" minLength="6" required id="confirmpwd"></input>
                <input className="btn btn--dark" type="submit" value="Create"></input>
                <label className="toggle" htmlFor="to-cover">Already have an account?</label>
            </form>
        </div>  
    )
  }