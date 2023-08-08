import { useContext } from "react";
import { RouterContext } from "../RouterProvider";

export default function useRouter() {
  return useContext(RouterContext).useRouter();
}
