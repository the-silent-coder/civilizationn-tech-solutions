export interface NavigationItem {
    label: string;
    href: string;
    external?: boolean;
}

export const NAV_ITEMS: NavigationItem[] = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Articles",
        href: "#articles",
    },
    {
        label: "Testimonials",
        href: "#testimonials",
    },
    {
        label: "Payments",
        href: "/payments",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];