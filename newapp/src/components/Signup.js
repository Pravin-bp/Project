import React from 'react'

export default function Signup() {
  return (
    <div data-cy="mutation-sensor" style={{"border": "3px solid gray",
    "width": "509.33334px",
    "marginLeft": "350px"}}>
    <div data-cy="signup-panel" class="sc-AxgMl mXdik fade-in-enter-done">
    <div data-cy="signup-panel-title" class="sc-AxgMl drXva">
    <h3 class="sc-fzqyvX kJWwZs kite-js-Typography ">
    Sign up</h3></div>
    <div class="sc-AxgMl iWplGZ"><div spacing="XL" class="sc-AxhUy jtMJCi">
    <div class="sc-AxgMl jElHNM"></div>
    <div class="sc-AxhCb jIcqRC"><form data-cy="email-signup-form">
    <div spacing="XL" class="sc-AxhUy iIozRy">
    <div class="sc-AxhCb jIcqRC"><div class="sc-AxgMl daSMuo">
    <span class="sc-fznZeY dzZFTs">First name</span></div>
    <div class="sc-fznLxA jgYloo">
    <input id="firstName" name="firstName" placeholder="First name" data-cy="signup-firstName" class="sc-AxmLO iksYDU sc-qZtCU bnePEP" defaultValue=""/>
    </div></div>
    <div class="sc-AxhCb jIcqRC"><div class="sc-AxgMl daSMuo">
    <span class="sc-fznZeY dzZFTs">Last name</span></div>
    <div class="sc-fznLxA jgYloo"><input id="lastName" name="lastName" placeholder="Last name" data-cy="signup-lastName" class="sc-AxmLO iksYDU sc-qZtCU bnePEP" defaultValue=""/></div></div>
    <div class="sc-AxhCb jIcqRC"><div class="sc-AxgMl daSMuo">
    <span class="sc-fznZeY dzZFTs">Email</span></div><div class="sc-fznLxA jgYloo">
    <input id="email" name="email" placeholder="Email" type="email" data-cy="signup-email" class="sc-AxmLO iksYDU sc-qZtCU bnePEP" defaultValue=""/></div></div>
    <div class="sc-AxhCb jIcqRC">
    <div class="sc-AxgMl daSMuo"><span class="sc-fznZeY dzZFTs">Password</span></div>
    <div class="sc-fznLxA jgYloo"><input id="password" name="password" placeholder="Password" type="password" data-cy="signup-password" class="sc-AxmLO iksYDU sc-qZtCU bnePEP" defaultValue=""/>
    </div></div>
    <div class="sc-AxhCb jIcqRC"><div class="sc-AxgMl daSMuo">
    <span class="sc-fznZeY dzZFTs">Confirm Password</span></div>
    <div class="sc-fznLxA jgYloo"><input id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" type="password" data-cy="signup-confirmPassword" class="sc-AxmLO iksYDU sc-qZtCU bnePEP" defaultValue=""/>
    </div></div>
    <div class="sc-AxhCb jIcqRC">
    <button radius="S" data-cy="signin-button" data-element-name="universal-login-signin-email-button" type="submit" color="primary" class="sc-fzoiQi hsJTpM">
    <div class="sc-fznWqX clGFVP">
    <div class="sc-AxgMl gfGIVK">
    <span class="sc-fznZeY dAxUxB">Sign in</span>
    </div></div></button></div></div>
    <div data-cy="footer-link-container" class="sc-AxgMl bOirrJ"><a href="/auth" data-cy="signup-email" data-element-name="universal-login-signup-link" class="sc-fzoyTs qPKjW">
    <span class="sc-fznZeY dzZFTs">Sign In</span>
    </a>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}