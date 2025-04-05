// app/demos/python-surf-game/page.tsx
"use client"

import { useEffect, useRef } from "react"

export default function PythonSurfGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const surfboard = new Image()
    surfboard.src = "/images/surfboard.png"

    let surfboardX = canvas.width / 2 - 25
    let surfboardY = canvas.height - 60
    let velocityY = 0
    let gravity = 0.5
    let jump = -10
    let keys: { [key: string]: boolean } = {}

    function drawSurfboard() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(surfboard, surfboardX, surfboardY, 50, 50)
      }
    }

    function updateGame() {
      if (keys["ArrowLeft"]) {
        surfboardX -= 5
      }
      if (keys["ArrowRight"]) {
        surfboardX += 5
      }
      if (keys[" "] && surfboardY === canvas.height - 60) {
        velocityY = jump
      }

      velocityY += gravity
      surfboardY += velocityY

      if (surfboardY > canvas.height - 60) {
        surfboardY = canvas.height - 60
        velocityY = 0
      }

      drawSurfboard()
      requestAnimationFrame(updateGame)
    }

    function handleKeyDown(e: KeyboardEvent) {
      keys[e.key] = true
    }

    function handleKeyUp(e: KeyboardEvent) {
      keys[e.key] = false
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    surfboard.onload = () => {
      updateGame()
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <canvas ref={canvasRef} width={800} height={400} className="border" />
    </div>
  )
}
