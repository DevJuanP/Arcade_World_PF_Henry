import BestRating from "./componentesHome/BestRating"
import MoreDownloads from "./componentesHome/MoreDownloads"
import News from "./componentesHome/news"

const Home = () => {
  return (
    <div>
      <h2>News</h2>
      <div>
     <News />
      </div>
     <h2>More Dowloads</h2>
     <div>
     <MoreDownloads />
     </div>
     <h2>Best Rating</h2>
     <div>
     <BestRating />
     </div>
    </div>
  )
}

export default Home