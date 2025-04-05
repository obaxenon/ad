"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, Send, User, Bot, Settings, X } from "lucide-react"
import Link from "next/link"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

type ChatbotSettings = {
  botName: string
  primaryColor: string
  responseDelay: number
  knowledgeBase: "ecommerce" | "tech-support"
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState<ChatbotSettings>({
    botName: "ShopAssist AI",
    primaryColor: "#ffd700",
    responseDelay: 1000,
    knowledgeBase: "ecommerce",
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initial greeting
  useEffect(() => {
    const initialGreeting = {
      id: "greeting",
      content: `Hi there! I'm ${settings.botName}. How can I help you today?`,
      sender: "bot" as const,
      timestamp: new Date(),
    }
    setMessages([initialGreeting])
  }, [settings.botName])

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot typing
    setIsTyping(true)

    // Generate bot response after delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue, settings.knowledgeBase)
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, settings.responseDelay)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const generateBotResponse = (userInput: string, knowledgeBase: string): string => {
    const input = userInput.toLowerCase()

    // eCommerce responses
    if (knowledgeBase === "ecommerce") {
      if (input.includes("shipping") || input.includes("delivery")) {
        return "We offer free shipping on all orders over $50. Standard delivery takes 3-5 business days, while express shipping takes 1-2 business days for an additional fee."
      } else if (input.includes("return") || input.includes("refund")) {
        return "Our return policy allows you to return items within 30 days of delivery for a full refund. Please make sure the items are in their original condition with tags attached."
      } else if (input.includes("discount") || input.includes("coupon") || input.includes("promo")) {
        return "You can use the code WELCOME10 for 10% off your first order! We also run seasonal promotions, so make sure to subscribe to our newsletter."
      } else if (input.includes("size") || input.includes("fit")) {
        return "We recommend checking our size guide on each product page. If you're between sizes, we generally recommend sizing up for a more comfortable fit."
      } else if (input.includes("payment") || input.includes("pay")) {
        return "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted."
      }
    }

    // Tech support responses
    if (knowledgeBase === "tech-support") {
      if (input.includes("password") || input.includes("login")) {
        return "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password."
      } else if (input.includes("install") || input.includes("download")) {
        return "You can download our software from your account dashboard. After downloading, run the installer and follow the on-screen instructions. If you encounter any issues, try running the installer as administrator."
      } else if (input.includes("error") || input.includes("bug")) {
        return "I'm sorry to hear you're experiencing an issue. Could you please provide the exact error message or a screenshot? This will help us diagnose the problem more effectively."
      } else if (input.includes("upgrade") || input.includes("update")) {
        return "To upgrade your software, go to Settings > About > Check for Updates. Make sure to back up your data before upgrading to the latest version."
      } else if (input.includes("slow") || input.includes("performance")) {
        return "If you're experiencing slow performance, try clearing your cache, closing unnecessary applications, and ensuring your device meets our minimum system requirements."
      }
    }

    // General responses
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return `Hello! How can I assist you today?`
    } else if (input.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?"
    } else if (input.includes("bye") || input.includes("goodbye")) {
      return "Thank you for chatting with us! Feel free to come back if you have any more questions."
    } else if (input.includes("help")) {
      return `I'm here to help! You can ask me about ${
        knowledgeBase === "ecommerce"
          ? "products, shipping, returns, payments, and more."
          : "installation, troubleshooting, updates, and technical issues."
      }`
    }

    return `I'm not sure I understand. Could you please rephrase your question? I'm here to help with ${
      knowledgeBase === "ecommerce" ? "shopping-related" : "technical"
    } inquiries.`
  }

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header
        className="p-4 flex justify-between items-center shadow-md"
        style={{ backgroundColor: settings.primaryColor, color: "#000" }}
      >
        <div className="flex items-center">
          <Link href="/#passion-projects" className="mr-4 hover:text-white">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">AI Customer Support Chatbot</h1>
        </div>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 rounded-full hover:bg-black/10"
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>
      </header>

      <div className="flex-1 flex">
        {/* Main chat area */}
        <div className="flex-1 flex flex-col bg-white max-w-4xl mx-auto w-full shadow-lg">
          {/* Chat header */}
          <div
            className="p-4 flex items-center border-b"
            style={{ backgroundColor: settings.primaryColor, color: "#000" }}
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <Bot size={20} />
            </div>
            <div>
              <h2 className="font-medium">{settings.botName}</h2>
              <p className="text-xs opacity-75">Online | Typically replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : `rounded-bl-none ${
                          settings.primaryColor === "#ffd700"
                            ? "bg-yellow-100 text-gray-800"
                            : "bg-gray-200 text-gray-800"
                        }`
                  }`}
                >
                  <div className="flex items-start">
                    {message.sender === "bot" && (
                      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center mr-2 mt-1">
                        <Bot size={14} />
                      </div>
                    )}
                    <div>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className="text-xs opacity-75 mt-1 text-right">{formatTime(message.timestamp)}</p>
                    </div>
                    {message.sender === "user" && (
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center ml-2 mt-1">
                        <User size={14} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start mb-4">
                <div
                  className={`rounded-lg p-3 rounded-bl-none ${
                    settings.primaryColor === "#ffd700" ? "bg-yellow-100 text-gray-800" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                      <Bot size={14} />
                    </div>
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                        style={{ animationDelay: "0s" }}
                      />
                      <div
                        className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-4 border-t">
            <div className="flex items-center">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 border rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={1}
                style={{ maxHeight: "120px" }}
              />
              <button
                onClick={handleSendMessage}
                className="p-3 rounded-r-lg"
                style={{ backgroundColor: settings.primaryColor }}
                disabled={inputValue.trim() === ""}
              >
                <Send size={20} className="text-black" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by AI | This is a demo chatbot for demonstration purposes
            </p>
          </div>
        </div>

        {/* Settings panel */}
        {showSettings && (
          <div className="w-80 bg-white border-l shadow-lg p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Chatbot Settings</h3>
              <button onClick={() => setShowSettings(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bot Name</label>
                <input
                  type="text"
                  value={settings.botName}
                  onChange={(e) => setSettings({ ...settings, botName: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                <div className="flex space-x-2">
                  {["#ffd700", "#3b82f6", "#10b981", "#f97316", "#8b5cf6"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSettings({ ...settings, primaryColor: color })}
                      className={`w-8 h-8 rounded-full ${
                        settings.primaryColor === color ? "ring-2 ring-offset-2 ring-gray-500" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select ${color} as primary color`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Response Delay (ms)</label>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="500"
                  value={settings.responseDelay}
                  onChange={(e) => setSettings({ ...settings, responseDelay: Number(e.target.value) })}
                  className="w-full"
                />
                <div className="text-sm text-gray-500 text-center">{settings.responseDelay}ms</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Knowledge Base</label>
                <select
                  value={settings.knowledgeBase}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      knowledgeBase: e.target.value as "ecommerce" | "tech-support",
                    })
                  }
                  className="w-full border rounded p-2"
                >
                  <option value="ecommerce">eCommerce Support</option>
                  <option value="tech-support">Technical Support</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    // Clear chat and restart with new settings
                    setMessages([])
                    setTimeout(() => {
                      setMessages([
                        {
                          id: "greeting-new",
                          content: `Hi there! I'm ${settings.botName}. How can I help you today?`,
                          sender: "bot",
                          timestamp: new Date(),
                        },
                      ])
                    }, 100)
                  }}
                  className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700"
                >
                  Reset Chat
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

