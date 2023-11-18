'use client'

import { siteConfig } from "@/config/site"

import { docsSidebarItem } from "@/types/sidebar"

import parse from "html-react-parser"
import { notFound } from "next/navigation"
import { useEffect } from "react"

export default function DocsSubjectPage({ params }: { params: { subject: string, title: string } }) {

  const foundSubject = siteConfig.docsSidebarContent.find(obj => obj.title == decodeURI(params.subject))
  const foundObject: { title: string; doc?: string } | undefined = foundSubject?.content?.find(obj => obj.title == decodeURI(params.title))

  return (
    <>
      {foundObject?.doc ? parse(foundObject?.doc) : notFound()}
    </>
  );
}
