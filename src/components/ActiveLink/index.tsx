import { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({
    shouldMatchExactHref = false,
    children,
    ...remainingLinkProps
}: ActiveLinkProps) {
    const { asPath } = useRouter();
    let isActive = false;

    if (
        shouldMatchExactHref &&
        (asPath === remainingLinkProps.href || asPath === remainingLinkProps.as)
    ) {
        isActive = true;
    }

    if (
        !shouldMatchExactHref &&
        (asPath.startsWith(String(remainingLinkProps.href)) ||
            asPath.startsWith(String(remainingLinkProps.as)))
    ) {
        isActive = true;
    }

    return (
        <Link {...remainingLinkProps}>
            {cloneElement(children, {
                color: isActive ? "pink.400" : "gray.50",
            })}
        </Link>
    );
}
