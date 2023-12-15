import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../firebase-config";

export const signUpWithEmailPassword = async (
  email?: string,
  password?: string
) => {
  if (!email || !password)
    return Promise.reject("Email or password can't be empty");

  try {
    const user = await createUserWithEmailAndPassword(
      authentication,
      email,
      password
    );
    if (!user) return Promise.reject("Can't register user");
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};
