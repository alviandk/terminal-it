import './index.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body data-aos-easing="ease" data-aos-duration="650" data-aos-delay="0">
      <Header/>
      <Main/>
      <Footer/>
      <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-close">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <div id="signupModalFormLogin" className="logIn" data-hs-show-animation-target-group="idForm">
                <div className="text-center mb-7">
                  <h2>Log in</h2>
                  <p>Don't have an account yet?
                    <a className="js-animation-link link" href="javascript:;" role="button" data-hs-show-animation-options="{
                            &quot;targetSelector&quot;: &quot;#signupModalFormSignup&quot;,
                            &quot;groupName&quot;: &quot;idForm&quot;
                          }" data-hs-show-animation-link-group="idForm">Sign up</a>
                  </p>
                </div>

                <div className="d-grid gap-2">
                  <a className="btn btn-white btn-lg" href="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <img className="avatar avatar-xss me-2" src="./assets/svg/brands/google-icon.svg" alt="Image Description"/>
                      Log in with Google
                    </span>
                  </a>
                  <a className="js-animation-link btn btn-primary btn-lg" href="#" data-hs-show-animation-options="{
                          &quot;targetSelector&quot;: &quot;#signupModalFormLoginWithEmail&quot;,
                          &quot;groupName&quot;: &quot;idForm&quot;
                        }" data-hs-show-animation-link-group="idForm">Log in with Email</a>
                </div>
              </div>

              <div 
                id="signupModalFormLoginWithEmail" 
                className="logIn" 
                data-hs-show-animation-target-group="idForm">
                <div className="text-center mb-7">
                  <h2>Log in</h2>
                  <p>Don't have an account yet?
                    <a className="js-animation-link link" href="javascript:;" role="button" data-hs-show-animation-options="{
                            &quot;targetSelector&quot;: &quot;#signupModalFormSignup&quot;,
                            &quot;groupName&quot;: &quot;idForm&quot;
                          }" data-hs-show-animation-link-group="idForm">Sign up</a>
                  </p>
                </div>
            
                <form className="js-validate needs-validation" noValidate="">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="signupModalFormLoginEmail">Your email</label>
                    <input type="email" className="form-control form-control-lg" name="email" id="signupModalFormLoginEmail" placeholder="email@site.com" aria-label="email@site.com" required=""/>
                    <span className="invalid-feedback">Please enter a valid email address.</span>
                  </div>
    
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="form-label" htmlFor="signupModalFormLoginPassword">Password</label>
                      <a className="js-animation-link form-label-link" href="javascript:;" data-hs-show-animation-options="{
                          &quot;targetSelector&quot;: &quot;#signupModalFormResetPassword&quot;,
                          &quot;groupName&quot;: &quot;idForm&quot;
                        }" data-hs-show-animation-link-group="idForm">Forgot Password?</a>
                    </div>
                    <input type="password" className="form-control form-control-lg" name="password" id="signupModalFormLoginPassword" placeholder="8+ characters required" aria-label="8+ characters required" required="" minLength="8"/>
                    <span className="invalid-feedback">Please enter a valid password.</span>
                  </div>
                
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary form-control-lg">Log in</button>
                  </div>
                </form>
              </div>

              <div id="signupModalFormSignup" data-hs-show-animation-target-group="idForm">
                <div className="text-center mb-7">
                  <h2>Sign up</h2>
                  <p>Already have an account?
                    <a className="js-animation-link link" href="javascript:;" role="button" data-hs-show-animation-options="{
                            &quot;targetSelector&quot;: &quot;#signupModalFormLogin&quot;,
                            &quot;groupName&quot;: &quot;idForm&quot;
                          }" data-hs-show-animation-link-group="idForm">Log in</a>
                  </p>
                </div>
        
                <div className="d-grid gap-3">
                  <a className="btn btn-white btn-lg" href="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <img className="avatar avatar-xss me-2" src="./assets/svg/brands/google-icon.svg" alt="Image Description"/>
                      Sign up with Google
                    </span>
                  </a>

                  <a className="js-animation-link btn btn-primary btn-lg" href="#" data-hs-show-animation-options="{
                          &quot;targetSelector&quot;: &quot;#signupModalFormSignupWithEmail&quot;,
                          &quot;groupName&quot;: &quot;idForm&quot;
                        }" data-hs-show-animation-link-group="idForm">Sign up with Email</a>
    
                  <div className="text-center">
                    <p className="small mb-0">By continuing you agree to our <a href="#">Terms and Conditions</a></p>
                  </div>
                </div>
              </div>
    
              <div id="signupModalFormSignupWithEmail" className="logIn" data-hs-show-animation-target-group="idForm">
                <div className="text-center mb-7">
                  <h2>Sign up</h2>
                  <p>Already have an account?
                    <a className="js-animation-link link" href="javascript:;" role="button" data-hs-show-animation-options="{
                            &quot;targetSelector&quot;: &quot;#signupModalFormLogin&quot;,
                            &quot;groupName&quot;: &quot;idForm&quot;
                          }" data-hs-show-animation-link-group="idForm">Log in</a>
                  </p>
                </div>

                <form className="js-validate need-validate" noValidate="">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="signupModalFormSignupEmail">Your email</label>
                    <input type="email" className="form-control form-control-lg" name="email" id="signupModalFormSignupEmail" placeholder="email@site.com" aria-label="email@site.com" required=""/>
                    <span className="invalid-feedback">Please enter a valid email address.</span>
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="signupModalFormSignupPassword">Password</label>
                    <input type="password" className="form-control form-control-lg" name="password" id="signupModalFormSignupPassword" placeholder="8+ characters required" aria-label="8+ characters required" required=""/>
                    <span className="invalid-feedback">Your password is invalid. Please try again.</span>
                  </div>
    
                  <div className="mb-3" data-hs-validation-validate-classname="">
                    <label className="form-label" htmlFor="signupModalFormSignupConfirmPassword">Confirm password</label>
                    <input type="password" className="form-control form-control-lg" name="confirmPassword" id="signupModalFormSignupConfirmPassword" placeholder="8+ characters required" aria-label="8+ characters required" required="" data-hs-validation-equal-field="#signupModalFormSignupPassword"/>
                    <span className="invalid-feedback">Password does not match the confirm password.</span>
                  </div>

                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary form-control-lg">Sign up</button>
                  </div>
    
                  <div className="text-center">
                    <p className="small mb-0">By continuing you agree to our <a href="#">Terms and Conditions</a></p>
                  </div>
                </form>
              </div>

              <div id="signupModalFormResetPassword" className="logIn" data-hs-show-animation-target-group="idForm">
                <div className="text-center mb-7">
                  <h2>Forgot password?</h2>
                  <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
                </div>
    
                <form className="js-validate need-validate" noValidate="">
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="form-label" for="signupModalFormResetPasswordEmail" tabIndex="0">Your email</label>
    
                      <a className="js-animation-link form-label-link" href="javascript:;" data-hs-show-animation-options="{
                            &quot;targetSelector&quot;: &quot;#signupModalFormLogin&quot;,
                            &quot;groupName&quot;: &quot;idForm&quot;
                          }" data-hs-show-animation-link-group="idForm">
                        <i className="bi-chevron-left small"></i> Back to Log in
                      </a>
                    </div>
                    <input type="email" className="form-control form-control-lg" name="email" id="signupModalFormResetPasswordEmail" tabIndex="1" placeholder="Enter your email address" aria-label="Enter your email address" required=""/>
                    <span className="invalid-feedback">Please enter a valid email address.</span>
                  </div>
    
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary form-control-lg">Submit</button>
                  </div>
                </form>
              </div>
            </div>
    
            <div className="modal-footer d-block text-center py-sm-5">
              <small className="text-cap mb-4">Trusted by the world's best teams</small>
              <div className="w-85 mx-auto">
                <div className="row justify-content-between">
                  <div className="col">
                    <img className="img-fluid" src="./assets/svg/brands/gitlab-gray.svg" alt="Logo"/>
                  </div>
    
                  <div className="col">
                    <img className="img-fluid" src="./assets/svg/brands/fitbit-gray.svg" alt="Logo"/>
                  </div>
    
                  <div className="col">
                    <img className="img-fluid" src="./assets/svg/brands/flow-xo-gray.svg" alt="Logo"/>
                  </div>
    
                  <div className="col">
                    <img className="img-fluid" src="./assets/svg/brands/layar-gray.svg" alt="Logo"/>
                  </div>
    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <a 
        className="js-go-to go-to position-fixed animated hs-go-to-prevent-event fadeOutDown goTo" 
        href="javascript:;" 
        data-hs-go-to-options="{
          &quot;offsetTop&quot;: 700,
          &quot;position&quot;: {
            &quot;init&quot;: {
              &quot;right&quot;: &quot;2rem&quot;
            },
            &quot;show&quot;: {
              &quot;bottom&quot;: &quot;2rem&quot;
            },
            &quot;hide&quot;: {
              &quot;bottom&quot;: &quot;-2rem&quot;
            }
          }
        }">
        <i className="bi-chevron-up"></i>
      </a>
  </body>
  );
}

export default App;
