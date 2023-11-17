import { siteConfig } from "@/config/site"

import parse from "html-react-parser"

export default function DocsSubjectPage({ params }: { params: { subject: string } }) {

    const foundObject = siteConfig.docsSidebarContent.find(obj => obj.title == decodeURI(params.subject))

    return (
        <>
            {foundObject?.doc ? parse(foundObject?.doc) : null}
        </>
    )
}