'only server'

import type { QueryParams } from "@sanity/client";
// import { draftMode } from "next/headers";
import { client } from "./client";

const DEFAULT_PARAMS = {} as QueryParams;

export async function sanityFetch<QueryResponse>({
    query,
    params = DEFAULT_PARAMS
}: {
    query: string;
    params?: QueryParams;
}): Promise<QueryResponse> {

    return client
        .fetch<QueryResponse>(query, params, {
            // cache: "no-store",
            // ...(isDraftMode && {
            //     token: token,
            //     perspective: "previewDrafts",
            // }),

            next: { revalidate: 0 }

            // next: {
            //     tags,
            // },
        });
}