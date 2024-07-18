export interface CtaLinks {
    title: string;
    link: string;
    isExternal: boolean;
}

export type MenuItem = {
    title: string;
    path: string;
};

export type SocialLinks = {
    icon: string | StaticImageData;
    link: string;
}