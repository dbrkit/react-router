import React from "react";
import useRouterContext from "../../hooks/useRouterContext";

export type LinkPropsType<T> = {
  locale?: string;
} & T;

/**
 * Link component that handle route translations
 */
export const Link = <T extends {}>({
  locale,
  ...props
}: React.PropsWithChildren<LinkPropsType<T>>) => {
  const { router, components } = useRouterContext();

  if (!components?.Link) return null;

  const { Link } = components;

  return <Link locale={locale || router?.locale} {...props} />;
};

export default Link;
