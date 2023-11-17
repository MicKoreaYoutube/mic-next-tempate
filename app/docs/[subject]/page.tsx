export default function DocsSubjectPage({ params }: { params: { subject: string } }) {
    return <div>My Post: {params.subject}</div>
}