'use client';

import { Metadata } from "next"
import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Error 404"
}

function goBack() {
    history.go(-1)
}

export default function Loading() {
   return (
        <>
            <div className="bg-background flex items-center justify-center h-screen">
                <section className="containe">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-6xl font-extrabold leading-tight tracking-tighter md:text-9xl font-KBO-Dia-Gothic_bold">
                            404
                        </h1>
                        <p className="font-SUITE-regular text-center">
                            <p className="text-4xl text-slate-500 md:6xl">
                                No Page Found
                            </p>
                            <p className="text-lg text-slate-300 md:xl">
                                The page your looking for does not exist. Please check the url or the realseNote to check out the problem.
                            </p>
                        </p>
                    </div>
                    <div className="flex gap-4 mt-2 justify-center font-TheJamsil5Bold">
                        <Link
                            href="/"
                            rel="noreferrer"
                            className={buttonVariants()}
                        >
                            Go to home
                        </Link>
                        <Button
                            variant={ "outline" }
                            rel="noreferrer"
                            onClick={goBack}
                        >
                            Go back to recent page
                        </Button>
                    </div>
                </section>
            </div>
        </>
    )
}
