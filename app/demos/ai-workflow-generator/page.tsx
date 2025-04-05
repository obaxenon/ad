"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, X, Save, Play, Settings, Database, MessageSquare, Mail } from "lucide-react"
import Link from "next/link"

export default function AIWorkflowGenerator() {
  const [nodes, setNodes] = useState<any[]>([])
  const [connections, setConnections] = useState<any[]>([])
  const [draggingNode, setDraggingNode] = useState<number | null>(null)
  const [draggingOffset, setDraggingOffset] = useState({ x: 0, y: 0 })
  const [creatingConnection, setCreatingConnection] = useState<any>(null)
  const [showNodeMenu, setShowNodeMenu] = useState(false)
  const [nodeMenuPosition, setNodeMenuPosition] = useState({ x: 0, y: 0 })
  const [workflowName, setWorkflowName] = useState("My AI Workflow")
  const [isRunning, setIsRunning] = useState(false)
  const [logs, setLogs] = useState<string[]>([])

  const nodeTypes = [
    { type: "trigger", name: "Trigger", icon: <Mail size={20} /> },
    { type: "ai-process", name: "AI Process", icon: <Settings size={20} /> },
    { type: "database", name: "Database", icon: <Database size={20} /> },
    { type: "message", name: "Message", icon: <MessageSquare size={20} /> },
  ]

  const handleAddNode = (type: string) => {
    const newNode = {
      id: Date.now(),
      type,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} ${nodes.length + 1}`,
      x: nodeMenuPosition.x,
      y: nodeMenuPosition.y,
      inputs: type !== "trigger" ? [{ id: `in-${Date.now()}`, name: "Input" }] : [],
      outputs: type !== "message" ? [{ id: `out-${Date.now()}`, name: "Output" }] : [],
    }

    setNodes([...nodes, newNode])
    setShowNodeMenu(false)
  }

  const handleNodeMouseDown = (e: React.MouseEvent, nodeId: number) => {
    const node = nodes.find((n) => n.id === nodeId)
    if (!node) return

    setDraggingNode(nodeId)
    setDraggingOffset({
      x: e.clientX - node.x,
      y: e.clientY - node.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingNode !== null) {
      const newNodes = nodes.map((node) => {
        if (node.id === draggingNode) {
          return {
            ...node,
            x: e.clientX - draggingOffset.x,
            y: e.clientY - draggingOffset.y,
          }
        }
        return node
      })
      setNodes(newNodes)
    }

    if (creatingConnection) {
      const updatedConnection = {
        ...creatingConnection,
        endX: e.clientX,
        endY: e.clientY,
      }
      setCreatingConnection(updatedConnection)
    }
  }

  const handleMouseUp = () => {
    setDraggingNode(null)
    setCreatingConnection(null)
  }

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setNodeMenuPosition({ x: e.clientX, y: e.clientY })
      setShowNodeMenu(true)
    }
  }

  const handleOutputClick = (e: React.MouseEvent, nodeId: number, outputId: string) => {
    e.stopPropagation()
    const node = nodes.find((n) => n.id === nodeId)
    if (!node) return

    setCreatingConnection({
      id: Date.now(),
      sourceNodeId: nodeId,
      sourceOutputId: outputId,
      startX: node.x + 150, // Assuming node width is 150px
      startY: node.y + 30, // Approximate position of output
      endX: e.clientX,
      endY: e.clientY,
    })
  }

  const handleInputClick = (e: React.MouseEvent, nodeId: number, inputId: string) => {
    e.stopPropagation()

    if (creatingConnection) {
      const newConnection = {
        id: Date.now(),
        sourceNodeId: creatingConnection.sourceNodeId,
        sourceOutputId: creatingConnection.sourceOutputId,
        targetNodeId: nodeId,
        targetInputId: inputId,
      }

      setConnections([...connections, newConnection])
      setCreatingConnection(null)
    }
  }

  const handleDeleteNode = (nodeId: number) => {
    setNodes(nodes.filter((node) => node.id !== nodeId))
    setConnections(connections.filter((conn) => conn.sourceNodeId !== nodeId && conn.targetNodeId !== nodeId))
  }

  const runWorkflow = () => {
    setIsRunning(true)
    setLogs([])

    // Find trigger nodes to start the workflow
    const triggerNodes = nodes.filter((node) => node.type === "trigger")

    if (triggerNodes.length === 0) {
      setLogs([...logs, "Error: No trigger node found in workflow"])
      setIsRunning(false)
      return
    }

    // Simulate workflow execution
    const currentLogs = []
    currentLogs.push("Starting workflow execution...")

    // Process each trigger node
    triggerNodes.forEach((trigger) => {
      currentLogs.push(`Executing trigger: ${trigger.name}`)

      // Find connections from this trigger
      const outgoingConnections = connections.filter((conn) => conn.sourceNodeId === trigger.id)

      // Process connected nodes
      processConnections(trigger, outgoingConnections, currentLogs)
    })

    currentLogs.push("Workflow execution completed")
    setLogs(currentLogs)

    setTimeout(() => {
      setIsRunning(false)
    }, 2000)
  }

  const processConnections = (sourceNode: any, outgoingConnections: any[], currentLogs: string[]) => {
    outgoingConnections.forEach((connection) => {
      const targetNode = nodes.find((node) => node.id === connection.targetNodeId)

      if (targetNode) {
        currentLogs.push(`Processing node: ${targetNode.name}`)

        // Simulate different node type behaviors
        switch (targetNode.type) {
          case "ai-process":
            currentLogs.push(`AI is analyzing data...`)
            currentLogs.push(`AI process completed successfully`)
            break
          case "database":
            currentLogs.push(`Querying database...`)
            currentLogs.push(`Data retrieved successfully`)
            break
          case "message":
            currentLogs.push(`Sending message...`)
            currentLogs.push(`Message delivered successfully`)
            break
        }

        // Find connections from this node
        const nextConnections = connections.filter((conn) => conn.sourceNodeId === targetNode.id)

        // Continue processing the workflow
        processConnections(targetNode, nextConnections, currentLogs)
      }
    })

    setLogs(currentLogs)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-black p-4 border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/#passion-projects" className="mr-4 hover:text-primary">
            <ArrowLeft size={20} />
          </Link>
          <input
            type="text"
            value={workflowName}
            onChange={(e) => setWorkflowName(e.target.value)}
            className="bg-transparent border-b border-gray-700 px-2 py-1 text-xl font-semibold focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex space-x-3">
          <button
            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center"
            onClick={() => setNodes([])}
          >
            <X size={16} className="mr-1" /> Clear
          </button>
          <button
            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center"
            onClick={() => alert("Workflow saved!")}
          >
            <Save size={16} className="mr-1" /> Save
          </button>
          <button
            className={`px-3 py-1 rounded-md flex items-center ${
              isRunning ? "bg-red-700 hover:bg-red-600" : "bg-primary hover:bg-primary/80 text-black"
            }`}
            onClick={runWorkflow}
            disabled={isRunning}
          >
            <Play size={16} className="mr-1" /> {isRunning ? "Running..." : "Run"}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Canvas */}
        <div
          className="flex-1 relative overflow-auto"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={handleCanvasClick}
        >
          <div className="absolute inset-0 grid grid-cols-[repeat(50,20px)] grid-rows-[repeat(50,20px)] text-gray-800">
            {Array.from({ length: 50 }).map((_, rowIndex) =>
              Array.from({ length: 50 }).map((_, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="border-[0.5px] border-gray-800/20" />
              )),
            )}
          </div>

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute bg-gray-800 rounded-md shadow-lg border border-gray-700 w-[200px]"
              style={{ left: node.x, top: node.y }}
              onMouseDown={(e) => handleNodeMouseDown(e, node.id)}
            >
              <div
                className={`p-2 rounded-t-md font-medium flex justify-between items-center ${
                  node.type === "trigger"
                    ? "bg-blue-900"
                    : node.type === "ai-process"
                      ? "bg-purple-900"
                      : node.type === "database"
                        ? "bg-green-900"
                        : "bg-red-900"
                }`}
              >
                <div className="flex items-center">
                  {node.type === "trigger" ? (
                    <Mail size={16} className="mr-2" />
                  ) : node.type === "ai-process" ? (
                    <Settings size={16} className="mr-2" />
                  ) : node.type === "database" ? (
                    <Database size={16} className="mr-2" />
                  ) : (
                    <MessageSquare size={16} className="mr-2" />
                  )}
                  {node.name}
                </div>
                <button className="text-gray-400 hover:text-white" onClick={() => handleDeleteNode(node.id)}>
                  <X size={14} />
                </button>
              </div>

              <div className="p-3">
                {/* Inputs */}
                {node.inputs.length > 0 && (
                  <div className="mb-3">
                    <div className="text-xs text-gray-400 mb-1">Inputs</div>
                    {node.inputs.map((input: any) => (
                      <div key={input.id} className="flex items-center mb-1">
                        <div
                          className="w-3 h-3 rounded-full bg-blue-500 mr-2 cursor-pointer"
                          onClick={(e) => handleInputClick(e, node.id, input.id)}
                        />
                        <div className="text-sm">{input.name}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Outputs */}
                {node.outputs.length > 0 && (
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Outputs</div>
                    {node.outputs.map((output: any) => (
                      <div key={output.id} className="flex items-center justify-between mb-1">
                        <div className="text-sm">{output.name}</div>
                        <div
                          className="w-3 h-3 rounded-full bg-green-500 ml-2 cursor-pointer"
                          onClick={(e) => handleOutputClick(e, node.id, output.id)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Connections */}
          <svg className="absolute inset-0 pointer-events-none">
            {connections.map((connection) => {
              const sourceNode = nodes.find((n) => n.id === connection.sourceNodeId)
              const targetNode = nodes.find((n) => n.id === connection.targetNodeId)

              if (!sourceNode || !targetNode) return null

              const startX = sourceNode.x + 200 // Right side of source node
              const startY = sourceNode.y + 50 // Approximate position of output
              const endX = targetNode.x // Left side of target node
              const endY = targetNode.y + 50 // Approximate position of input

              // Calculate control points for the curve
              const controlPointX1 = startX + 50
              const controlPointX2 = endX - 50

              return (
                <path
                  key={connection.id}
                  d={`M ${startX} ${startY} C ${controlPointX1} ${startY}, ${controlPointX2} ${endY}, ${endX} ${endY}`}
                  stroke="#FFD700"
                  strokeWidth="2"
                  fill="none"
                />
              )
            })}

            {/* Creating connection line */}
            {creatingConnection && (
              <path
                d={`M ${creatingConnection.startX} ${creatingConnection.startY} C ${creatingConnection.startX + 50} ${creatingConnection.startY}, ${creatingConnection.endX - 50} ${creatingConnection.endY}, ${creatingConnection.endX} ${creatingConnection.endY}`}
                stroke="#FFD700"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            )}
          </svg>

          {/* Node menu */}
          {showNodeMenu && (
            <div
              className="absolute bg-gray-800 rounded-md shadow-lg border border-gray-700 w-[200px] z-10"
              style={{ left: nodeMenuPosition.x, top: nodeMenuPosition.y }}
            >
              <div className="p-2 border-b border-gray-700 flex justify-between items-center">
                <span className="font-medium">Add Node</span>
                <button className="text-gray-400 hover:text-white" onClick={() => setShowNodeMenu(false)}>
                  <X size={14} />
                </button>
              </div>
              <div className="p-1">
                {nodeTypes.map((nodeType) => (
                  <button
                    key={nodeType.type}
                    className="w-full text-left p-2 hover:bg-gray-700 rounded flex items-center"
                    onClick={() => handleAddNode(nodeType.type)}
                  >
                    <span className="mr-2">{nodeType.icon}</span>
                    {nodeType.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Logs panel */}
        <div className="w-80 bg-black border-l border-gray-800 flex flex-col">
          <div className="p-3 border-b border-gray-800 font-medium">Execution Logs</div>
          <div className="flex-1 overflow-auto p-3">
            {logs.length === 0 ? (
              <div className="text-gray-500 text-sm">Run the workflow to see execution logs</div>
            ) : (
              <div className="space-y-2">
                {logs.map((log, index) => (
                  <div key={index} className="text-sm">
                    <span className="text-gray-400">[{new Date().toLocaleTimeString()}]</span> {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

