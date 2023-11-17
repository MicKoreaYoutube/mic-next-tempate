'use client'

import { usePathname } from "next/navigation"

export default function DocsSubjectPage({ params }: { params: { subject: string } }) {

    const pathName = usePathname()

    return <div>My Post: {params.subject} {decodeURI(pathName)}</div>
}