import React, { useEffect, useState } from "react";

import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

const SignUpForm = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        headerText="My Custom Sign Up Text"
        slot="sign-up"
      ></AmplifySignUp>
    </AmplifyAuthenticator>
  );
};

export default SignUpForm;
