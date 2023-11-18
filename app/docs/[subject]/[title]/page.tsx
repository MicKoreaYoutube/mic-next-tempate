import { siteConfig } from "@/config/site";

import parse from "html-react-parser";
import { notFound } from "next/navigation";

export default function DocsSubjectPage({ params }: { params: { subject: string, title: string } }) {
    const foundSubjectObject = siteConfig.docsSidebarContent.find(obj => obj.title == decodeURI(params.subject));
    const foundObject = foundSubjectObject?.content?.find(obj => obj.title == decodeURI(params.title));

    return (
        <>
            {foundObject?.doc ? parse(foundObject?.doc) : notFound()}
        </>
    );
}
