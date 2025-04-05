import dynamic from "next/dynamic"

const PythonSurfGame = dynamic(() => import("./PythonSurfGameClient"), {
  ssr: false,
})

export default function Page() {
  return <PythonSurfGame />
}
