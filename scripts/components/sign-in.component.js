function signincode() {
    return `
    
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-body">
            <div class="container">
                <div class="row modal-content-container">
                    
                    <div class="logo-div d-flex justify-content-between mb-3">
                        <div class="col-4">
                            <img src="../images/Kayak_Logo.svg" class="img-fluid" alt="Kayak Logo">
                        </div>
                        <div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div class="login-div-homepage row ">
                        <div class="login-desktop col-12 mb-4">
                            <img src="../images/login-desktop.svg" class="img-fluid" alt="Desktop">
                        </div>
                        <div class="content-signin col-12">
                            <h5 class="fw-bold">Sign in and save</h5>
                            <p>Track prices, organise travel plans and access member-only deals with your KAYAK account.</p>
                        </div>
                        <div class="email-login col-12 mb-3">
                            <button type="button" class="btn btn-light col-12 border border-dark" onclick="switchToLogin()">Continue with email</button>
                        </div>
                        <div class="d-flex col-12 justify-content-between">
                            <div class="hr-line p-1">
                                <hr>
                            </div>
                            <div class="p-1">or</div>
                            <div class="hr-line p-1">
                                <hr>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="border rounded">
                                <img id="modal_booking_logo" src="../images/Booking.Com-logo.png" alt="Booking.com Logo" class="img-fluid p-2 px-5">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="border rounded">
                                <img id="modal_fb_logo" src="../images/fb logo.png" alt="Booking.com Logo" class="img-fluid p-2 px-5">
                            </div>
                        </div>
                        <div class="col-6 mt-2">
                            <div class="border rounded">
                                <img id="modal_google_logo" src="../images/google logo.png" alt="Booking.com Logo" class="img-fluid p-2 px-5">
                            </div>
                        </div>
                        <div class="col-6 mt-2">
                            <div class="border rounded">
                                <img id="modal_apple_logo" src="../images/apple-logo.png" alt="Booking.com Logo" class="img-fluid p-2 px-5">
                            </div>
                        </div>
                        <div class="col-12">
                            <small class="text-secondary">
                                By signing up you accept our terms of use and privacy policy.
                            </small>
                        </div>
                    </div>
                    <div class="login-div-signin row d-none">
                        <div class="row col-12 back-btn pointer-cursor text-info mb-3" onclick="backToHome()">
                            <div class="col-1">
                                <svg class="svg-image" role="img" style="width:inherit;height:inherit;line-height:inherit;color:inherit;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M119.238 164.801c-53.425-64.11-55.449-63.064-50-69.603l50-60l11.523 9.603L84.763 100l45.999 55.199l-11.524 9.602z"></path></svg>
                            </div>
                            Back
                        </div>
                        <div class="col-12">
                            <form>
                                <input type="email" class="form-control border border-secondary mb-2" id="loginEmail" placeholder="Email address">
                                <input type="password" class="form-control border border-secondary mb-2" id="loginPass" placeholder="Password">
                                <button type="submit" class="btn submit-btn mb-2" id="sign-in-btn" onclick="userLogin(event)">Sign in</button>
                                Don't have an account?
                                <span class="pointer-cursor text-default-color fw-bold sign-up-link" onclick="switchToSignUp()">Sign Up</span>
                            </form>
                            
                        </div>
                        
                    </div>
                    
                    <div class="login-div-signup row d-none">
                        <div class="row col-12 back-btn-sign-up pointer-cursor text-info mb-3" onclick="backToHome()">
                            <div class="col-1">
                                <svg class="svg-image" role="img" style="width:inherit;height:inherit;line-height:inherit;color:inherit;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M119.238 164.801c-53.425-64.11-55.449-63.064-50-69.603l50-60l11.523 9.603L84.763 100l45.999 55.199l-11.524 9.602z"></path></svg>
                            </div>
                            Back
                        </div>
                        <div class="col-12">
                            <form>
                                <input type="text" class="form-control border border-secondary mb-2" id="fName" placeholder="First Name">
                                <input type="text" class="form-control border border-secondary mb-2" id="lName" placeholder="Last Name">
                                <input type="text" class="form-control border border-secondary mb-2" id="phoneNumber" placeholder="Contact Number">
                                <input type="email" class="form-control border border-secondary mb-2" id="email" placeholder="Email address">
                                <input type="password" class="form-control border border-secondary mb-2" id="password" placeholder="Password">
                                <button type="submit" class="btn submit-btn mb-2" id="sign-up-btn" onclick="userSignUp(event)">Sign up</button>
                                Already have an account?
                                <span class="pointer-cursor text-default-color fw-bold sign-in-link" onclick="switchToLogin()">Login here</span>
                            </form>
                            
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
    `
}

export default signincode;