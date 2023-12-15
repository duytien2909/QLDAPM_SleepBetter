import React from "react";
import { useAppSelector } from "../../redux/store";

type AuthProviderProps = {
  authComponent: () => JSX.Element;
  unAuthComponent: () => JSX.Element;
};

export default function AuthProvider({
  authComponent: AuthComponent,
  unAuthComponent: UnAuthComponent,
}: AuthProviderProps) {
  const {
    data: { user },
  } = useAppSelector((state) => state.authentication);

  return <>{user ? <AuthComponent /> : <UnAuthComponent />}</>;
}
