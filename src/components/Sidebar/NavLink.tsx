import { ElementType } from "react";
import {
    Icon,
    Link,
    LinkProps as ChakraLinkProps,
    Text,
} from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
    title: string;
    icon: ElementType;
}

export function NavLink({
    title,
    icon,
    ...remainingPropsFromLinkElement
}: NavLinkProps) {
    return (
        <Link
            display="flex"
            alignItems="center"
            {...remainingPropsFromLinkElement}
        >
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">
                {title}
            </Text>
        </Link>
    );
}
