import { useEffect } from "react";

import useRouter from "../../hooks/useRouter";

export default function Navigate({ to }: { to: string }) {
  const router = useRouter();
  console.log({ router });
  useEffect(() => {
    router?.push(to);
  }, [router, to]);
  return null;
}
