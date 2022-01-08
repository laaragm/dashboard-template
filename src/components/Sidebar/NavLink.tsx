import { ElementType } from "react";
import Link from "next/link";
import {
    Icon,
    Link as ChakraLink,
    LinkProps as ChakraLinkProps,
    Text,
} from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
    title: string;
    href: string;
    icon: ElementType;
}

export function NavLink({
    title,
    href,
    icon,
    ...remainingPropsFromLinkElement
}: NavLinkProps) {
    return (
        <Link href={href} passHref>
            <ChakraLink
                display="flex"
                alignItems="center"
                {...remainingPropsFromLinkElement}
            >
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                    {title}
                </Text>
            </ChakraLink>
        </Link>
    );
}
