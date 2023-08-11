import { useEffect } from "react";

import useRouter from "../../hooks/useRouter";

export default function Navigate({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router?.replace(to);
  }, [router, to]);
  return null;
}
