"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, RefreshCw } from "lucide-react"
import Link from "next/link"

type Card = {
  id: string
  color: string
  value: string
  isWild?: boolean
}

type Player = {
  id: number
  name: string
  cards: Card[]
  isComputer: boolean
}

export default function PythonUnoGame() {
  const [gameStarted, setGameStarted] = useState(false)
  const [players, setPlayers] = useState<Player[]>([])
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [discardPile, setDiscardPile] = useState<Card[]>([])
  const [drawPile, setDrawPile] = useState<Card[]>([])
  const [gameDirection, setGameDirection] = useState(1) // 1 for clockwise, -1 for counter-clockwise
  const [winner, setWinner] = useState<Player | null>(null)
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  const [colorSelectOpen, setColorSelectOpen] = useState(false)
  const [gameMessage, setGameMessage] = useState("")

  const colors = ["red", "blue", "green", "yellow"]
  const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Skip", "Reverse", "Draw Two"]
  const wildCards = ["Wild", "Wild Draw Four"]

  useEffect(() => {
    if (gameStarted && players[currentPlayer]?.isComputer) {
      setTimeout(playComputerTurn, 1500)
    }
  }, [currentPlayer, gameStarted])

  const initializeGame = () => {
    // Create a deck of cards
    const deck: Card[] = []

    // Add regular cards
    colors.forEach((color) => {
      values.forEach((value) => {
        const card: Card = { id: `${color}-${value}-1`, color, value }
        deck.push(card)

        // Add a second copy of each card except 0
        if (value !== "0") {
          const cardCopy: Card = { id: `${color}-${value}-2`, color, value }
          deck.push(cardCopy)
        }
      })
    })

    // Add wild cards
    wildCards.forEach((value) => {
      for (let i = 0; i < 4; i++) {
        const wildCard: Card = { id: `wild-${value}-${i}`, color: "black", value, isWild: true }
        deck.push(wildCard)
      }
    })

    // Shuffle the deck
    const shuffledDeck = shuffleArray([...deck])

    // Create players
    const newPlayers: Player[] = [
      { id: 0, name: "You", cards: [], isComputer: false },
      { id: 1, name: "Computer 1", cards: [], isComputer: true },
      { id: 2, name: "Computer 2", cards: [], isComputer: true },
      { id: 3, name: "Computer 3", cards: [], isComputer: true },
    ]

    // Deal 7 cards to each player
    newPlayers.forEach((player) => {
      for (let i = 0; i < 7; i++) {
        if (shuffledDeck.length > 0) {
          const card = shuffledDeck.pop()!
          player.cards.push(card)
        }
      }
    })

    // Set up discard pile with one card
    const firstCard = shuffledDeck.pop()!
    // If the first card is a wild card, give it a random color
    if (firstCard.isWild) {
      firstCard.color = colors[Math.floor(Math.random() * colors.length)]
    }

    setPlayers(newPlayers)
    setDrawPile(shuffledDeck)
    setDiscardPile([firstCard])
    setCurrentPlayer(0)
    setGameDirection(1)
    setWinner(null)
    setGameStarted(true)
    setGameMessage(`Game started! Top card is ${firstCard.color} ${firstCard.value}`)
  }

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const drawCard = (playerId: number) => {
    if (drawPile.length === 0) {
      // Reshuffle discard pile if draw pile is empty
      const topCard = discardPile[discardPile.length - 1]
      const newDrawPile = shuffleArray(discardPile.slice(0, -1))
      setDrawPile(newDrawPile)
      setDiscardPile([topCard])
    }

    if (drawPile.length > 0) {
      const card = drawPile[0]
      const newDrawPile = drawPile.slice(1)

      const newPlayers = [...players]
      newPlayers[playerId].cards.push(card)

      setDrawPile(newDrawPile)
      setPlayers(newPlayers)

      return card
    }

    return null
  }

  const canPlayCard = (card: Card): boolean => {
    const topCard = discardPile[discardPile.length - 1]

    // Wild cards can always be played
    if (card.isWild) return true

    // Match color or value
    return card.color === topCard.color || card.value === topCard.value
  }

  const playCard = (card: Card, newColor?: string) => {
    // Remove card from player's hand
    const playerIndex = currentPlayer
    const newPlayers = [...players]
    const playerCards = newPlayers[playerIndex].cards
    const cardIndex = playerCards.findIndex((c) => c.id === card.id)

    if (cardIndex !== -1) {
      playerCards.splice(cardIndex, 1)

      // Add card to discard pile
      const playedCard = { ...card }
      if (playedCard.isWild && newColor) {
        playedCard.color = newColor
      }

      setDiscardPile([...discardPile, playedCard])
      setPlayers(newPlayers)

      // Check for winner
      if (playerCards.length === 0) {
        setWinner(players[playerIndex])
        setGameMessage(`${players[playerIndex].name} wins!`)
        return
      }

      // Handle special cards
      handleSpecialCard(playedCard)
    }
  }

  const handleSpecialCard = (card: Card) => {
    let nextPlayer = (currentPlayer + gameDirection) % players.length
    if (nextPlayer < 0) nextPlayer += players.length
    let message = `${players[currentPlayer].name} played ${card.color} ${card.value}`

    switch (card.value) {
      case "Skip":
        nextPlayer = (nextPlayer + gameDirection) % players.length
        if (nextPlayer < 0) nextPlayer += players.length
        message += `. ${players[nextPlayer].name}'s turn is skipped!`
        break

      case "Reverse":
        setGameDirection(gameDirection * -1)
        nextPlayer = (currentPlayer - gameDirection) % players.length
        if (nextPlayer < 0) nextPlayer += players.length
        message += ". Direction reversed!"
        break

      case "Draw Two":
        const targetPlayer = nextPlayer
        drawCard(targetPlayer)
        drawCard(targetPlayer)
        message += `. ${players[targetPlayer].name} draws 2 cards!`
        break

      case "Wild Draw Four":
        const wildTargetPlayer = nextPlayer
        drawCard(wildTargetPlayer)
        drawCard(wildTargetPlayer)
        drawCard(wildTargetPlayer)
        drawCard(wildTargetPlayer)
        message += `. ${players[wildTargetPlayer].name} draws 4 cards!`
        break

      case "Wild":
        message += `. Color changed to ${card.color}!`
        break
    }

    setGameMessage(message)
    setCurrentPlayer(nextPlayer)
  }

  const handleCardClick = (card: Card) => {
    if (winner) return

    if (canPlayCard(card)) {
      if (card.isWild) {
        setSelectedCard(card)
        setColorSelectOpen(true)
      } else {
        playCard(card)
      }
    } else {
      setGameMessage("You can't play that card!")
    }
  }

  const handleColorSelect = (color: string) => {
    if (selectedCard) {
      playCard(selectedCard, color)
      setSelectedCard(null)
      setColorSelectOpen(false)
    }
  }

  const handleDrawCard = () => {
    if (winner) return

    const drawnCard = drawCard(currentPlayer)
    if (drawnCard) {
      setGameMessage(`You drew a ${drawnCard.color} ${drawnCard.value}`)

      // Check if the drawn card can be played
      if (canPlayCard(drawnCard)) {
        // For simplicity, we'll automatically play wild cards with a random color
        if (drawnCard.isWild) {
          setTimeout(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            playCard(drawnCard, randomColor)
          }, 1000)
        } else {
          // For non-wild cards, give the player the option to play it
          setGameMessage(`You drew a ${drawnCard.color} ${drawnCard.value}. You can play it!`)
        }
      } else {
        // Move to next player
        const nextPlayer = (currentPlayer + gameDirection) % players.length
        setCurrentPlayer(nextPlayer < 0 ? nextPlayer + players.length : nextPlayer)
      }
    }
  }

  const playComputerTurn = () => {
    if (winner) return

    const computer = players[currentPlayer]
    const playableCards = computer.cards.filter(canPlayCard)

    if (playableCards.length > 0) {
      // Choose a random playable card
      const cardToPlay = playableCards[Math.floor(Math.random() * playableCards.length)]

      // If it's a wild card, choose a random color
      if (cardToPlay.isWild) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        playCard(cardToPlay, randomColor)
      } else {
        playCard(cardToPlay)
      }
    } else {
      // Draw a card
      const drawnCard = drawCard(currentPlayer)
      if (drawnCard) {
        setGameMessage(`${computer.name} drew a card`)

        // Check if the drawn card can be played
        if (canPlayCard(drawnCard)) {
          setTimeout(() => {
            // If it's a wild card, choose a random color
            if (drawnCard.isWild) {
              const randomColor = colors[Math.floor(Math.random() * colors.length)]
              playCard(drawnCard, randomColor)
            } else {
              playCard(drawnCard)
            }
          }, 500)
        } else {
          // Move to next player
          const nextPlayer = (currentPlayer + gameDirection) % players.length
          setCurrentPlayer(nextPlayer < 0 ? nextPlayer + players.length : nextPlayer)
        }
      }
    }
  }

  const getCardStyle = (card: Card) => {
    let backgroundColor = card.color
    if (card.isWild) backgroundColor = "black"

    return {
      backgroundColor,
      color: ["red", "yellow"].includes(card.color) ? "black" : "white",
    }
  }

  return (
    <div className="min-h-screen bg-green-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-black p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/#passion-projects" className="mr-4 hover:text-primary">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">UNO Delight</h1>
        </div>
        <button
          className="px-4 py-2 bg-primary text-black rounded-md flex items-center hover:bg-primary/80"
          onClick={initializeGame}
        >
          <RefreshCw size={16} className="mr-2" /> New Game
        </button>
      </header>

      {!gameStarted ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-2xl mb-6">Welcome to UNO Delight!</h2>
          <button
            className="px-6 py-3 bg-primary text-black rounded-md text-lg font-medium hover:bg-primary/80"
            onClick={initializeGame}
          >
            Start Game
          </button>
        </div>
      ) : (
        <div className="flex-1 flex flex-col p-4">
          {/* Game message */}
          <div className="bg-black/50 p-3 rounded-md mb-4 text-center">{gameMessage}</div>

          {/* Game board */}
          <div className="flex-1 flex flex-col">
            {/* Computer players */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {players.slice(1).map((player) => (
                <div
                  key={player.id}
                  className={`bg-black/30 p-3 rounded-md ${currentPlayer === player.id ? "ring-2 ring-primary" : ""}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span>{player.name}</span>
                    <span className="bg-primary text-black px-2 py-1 rounded-md text-sm">
                      {player.cards.length} cards
                    </span>
                  </div>
                  <div className="flex justify-center">
                    {player.cards.slice(0, 5).map((_, index) => (
                      <div
                        key={index}
                        className="w-8 h-12 bg-black border border-white/20 rounded-md -ml-4 first:ml-0"
                      />
                    ))}
                    {player.cards.length > 5 && (
                      <div className="ml-1 flex items-center">
                        <span>+{player.cards.length - 5}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Middle section with discard and draw piles */}
            <div className="flex justify-center items-center space-x-16 mb-8">
              {/* Draw pile */}
              <div className="text-center">
                <div
                  className="w-24 h-36 bg-black border-2 border-white/50 rounded-md mb-2 flex items-center justify-center cursor-pointer hover:border-primary"
                  onClick={handleDrawCard}
                >
                  <span className="font-bold text-lg">UNO</span>
                </div>
                <div className="text-sm">Draw Pile ({drawPile.length})</div>
              </div>

              {/* Discard pile */}
              <div className="text-center">
                {discardPile.length > 0 && (
                  <>
                    <div
                      className="w-24 h-36 rounded-md mb-2 flex flex-col items-center justify-center font-bold"
                      style={getCardStyle(discardPile[discardPile.length - 1])}
                    >
                      <span className="text-2xl">{discardPile[discardPile.length - 1].value}</span>
                    </div>
                    <div className="text-sm">Discard Pile</div>
                  </>
                )}
              </div>
            </div>

            {/* Player's hand */}
            <div className={`bg-black/30 p-4 rounded-md ${currentPlayer === 0 ? "ring-2 ring-primary" : ""}`}>
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-medium">Your Hand</span>
                {currentPlayer === 0 && !winner && (
                  <span className="bg-primary text-black px-3 py-1 rounded-full text-sm">Your Turn</span>
                )}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {players[0]?.cards.map((card) => (
                  <div
                    key={card.id}
                    className={`w-20 h-32 rounded-md flex flex-col items-center justify-center font-bold cursor-pointer transform hover:-translate-y-2 transition-transform ${
                      currentPlayer === 0 && canPlayCard(card) ? "ring-2 ring-primary" : ""
                    }`}
                    style={getCardStyle(card)}
                    onClick={() => (currentPlayer === 0 ? handleCardClick(card) : null)}
                  >
                    <span className="text-xl">{card.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Color selection modal */}
          {colorSelectOpen && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-10">
              <div className="bg-gray-800 p-6 rounded-lg w-80">
                <h3 className="text-lg font-medium mb-4">Select a color:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className="p-3 rounded-md text-black font-medium capitalize"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorSelect(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Winner modal */}
          {winner && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-10">
              <div className="bg-gray-800 p-6 rounded-lg w-80 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {winner.name === "You" ? "You Win! 🎉" : `${winner.name} Wins!`}
                </h3>
                <p className="mb-6">Game Over</p>
                <button
                  className="px-6 py-3 bg-primary text-black rounded-md font-medium hover:bg-primary/80"
                  onClick={initializeGame}
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

