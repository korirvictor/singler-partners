import { Link as RouterLink, LinkProps } from "react-router-dom";
import { usePageTransition } from "./TransitionProvider";
import { useCallback } from "react";

interface TransitionLinkProps extends Omit<LinkProps, "onClick"> {
  onClick?: () => void;
}

const TransitionLink = ({ to, onClick, children, ...props }: TransitionLinkProps) => {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onClick?.();
      if (typeof to === "string") {
        navigateWithTransition(to);
      }
    },
    [to, navigateWithTransition, onClick]
  );

  return (
    <RouterLink to={to} onClick={handleClick} {...props}>
      {children}
    </RouterLink>
  );
};

export default TransitionLink;
