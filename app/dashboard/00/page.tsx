import fuseAPI from "fuse.js"

export default function Dashboard00() {

  const data = ["React", "Next.js", "Deno", "Bun", "Mojo", "엄랭"]

  const fuse = new fuseAPI(data)

  const result = fuse.search("et")

  return (
    <>
        {JSON.stringify(result)}
    </>
  )
}