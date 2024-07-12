import GameCard from "../GameCard/GameCard";

type GameRowType = {
  label?: string,
  games: {
    title: string,
    imageData: {
      source: string,
      alt: string,
    }
  }[],
  maxCardCount: number,
}

const GameRow = ({ label, games, maxCardCount }: GameRowType) => {
  return (
    <div className='max-w-full mx-8 mb-8'>
      {label && <span className='text-2xl'>{label}</span>}
      <div className='relative max-w-full h-56'>
        <div
          className='
            relative
            w-full
            h-full
            flex
            flex-row
            flex-nowrap
            gap-8
            mt-4
          '
        >
          {games.slice(0, maxCardCount).map(game => (
            <GameCard imageData={game.imageData} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameRow;