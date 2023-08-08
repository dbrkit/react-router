import { useContext } from "react";
import { RouterContext } from "../RouterProvider";

export default function useRouterContext() {
  return useContext(RouterContext);
}
