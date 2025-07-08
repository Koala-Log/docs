'use client';
import {RootProvider} from 'fumadocs-ui/provider';
// your custom dialog
import SearchDialog from '@/components/search';
import type {ReactNode} from 'react';
import {Banner} from "fumadocs-ui/components/banner";
import Link from "next/link";

export function Provider({children}: { children: ReactNode }) {
    return (
        <>
            // customise colors
            <Banner
                id="hello-world"
                variant="rainbow"
                rainbowColors={[
                    'rgba(34,197,94, 0.5)',
                    'rgba(16,185,129, 0.5)',
                    'transparent',
                    'rgba(52,211,153, 0.5)',
                    'transparent',
                    'rgba(34,197,94, 0.5)',
                    'transparent',
                ]}
            >
                Koala Log just released! If you haven't
                already,&nbsp;
                    <span className="prose">
                        <Link className="link prose" href="/main">
                            try it now
                        </Link>
                    </span>
                .
            </Banner>
            <RootProvider search={{SearchDialog}}>{children}</RootProvider>
        </>
    )

}