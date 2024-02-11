import React from "react"

type SquareProps = {
    index: number
    player?: string
    onClick(event: any): void
}


function Square({ index, player, onClick }: SquareProps) {
    const scale = player ? "scale-100" : "scale-0"
    const textColor = player === "X" ? "text-yellow-400" : "text-fuchsia-400"
    const hoverStyle = "transition duration-500 hover:scale-105 transform"
    return (
        <>
            <div
                data-cell-index={index}
                className={`h-36 border-solid border-4 shadow-xl border-gray-400 font-display
          text-7xl text-center flex justify-center items-center cursor-pointer 
          ${hoverStyle}`}
                {...{ onClick }}>
                <span data-cell-index={index} className={`transform transition-all duration-150 ease-out ${scale} ${textColor}`}>{player}</span></div>
        </>
    )
}

export default Square