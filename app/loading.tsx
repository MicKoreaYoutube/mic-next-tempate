import { Metadata } from "next"

export const metadata: Metadata = {
    title: "loading..."
  }

export default function Loading() {
    return (
        <div className="bg-background">
            <section className="container">
                <h1 className="text-3xl text-center">loading...</h1>
            </section>
        </div>
    )
}
