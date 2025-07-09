import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';
import {GithubInfo} from "fumadocs-ui/components/github-info";
import Discord from "@/app/Discord";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <>
                <Image className="size-10 dark:hidden" src={`${process.env.BASE_PATH}/logo-light.png`} alt="Koala Log Logo" width={40} height={40} />
                <Image className="size-10 hidden dark:inline" src={`${process.env.BASE_PATH}/logo.png`} alt="Koala Log Logo" width={40} height={40} />

                <span>Koala Log</span>
            </>
        ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
        {
            type: 'custom',
            children: (
                <GithubInfo owner="Koala-Log" repo="Koala-Log" className="lg:-mx-2"/>
            ),
        },
        {
            text: "Discord",
            url: "https://discord.gg/XunReBq5",
            icon: <Discord/>,
            type: 'icon'
        }
    ],
    // githubUrl: "https://github.com/Koala-Log/Docs"
};
