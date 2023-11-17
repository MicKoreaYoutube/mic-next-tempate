'use client'

import { usePathname } from "next/navigation"

export default function DocsSubjectPage({ params }: { params: { subject: string, title: string } }) {

    const pathName = usePathname()

    return <div>My Post: {params.subject}/{params.title} {decodeURI(pathName)}</div>
}