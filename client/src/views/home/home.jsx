import { useEffect } from "react"
import BestRating from "./componentesHome/BestRating"
import MoreDownloads from "./componentesHome/MoreDownloads"
import News from "./componentesHome/news"
import { getGames } from "../../redux/actions"
import {useDispatch,useSelector}from 'react-redux'
import './HomeStyle.css'
import call from '../img/callofduty.jpg'


const Home = () => {
   const dispatch=useDispatch()
  const game = useSelector((state)=>state.games)
   useEffect(()=>{
    dispatch(getGames())
   },[])
   const gameNews = game.slice(0,4)
   const gameMoreDowloads=game.slice(4,8)
   const gameBestRating=game.slice(6,10)

  return (
    <div className="conteinerHome">
<div>
  <img className="callofduty" src={call} alt="call of duty" />
</div>

      <div className="News">
      <h2>News</h2>
      <div className="card_news">
     {
       gameNews.map((gam)=>{
        return(
          <News
          keys={gam.id}
          name={gam.name}
          price={gam.price}
          image={gam.image}
          />
          )
        })
      }
      </div>
      </div>

      <div className="More">
     <h2>More Dowloads</h2>
     <div className="cards_more">
    {
      gameMoreDowloads.map((GMD)=>{
        return(
          <MoreDownloads 
          key={GMD.id}
          name={GMD.name}
          price={GMD.price}
          image={GMD.image}
          />
          )
      })
    }
     </div>
          </div>

          <div className="Rating">
     <h2>Best Rating</h2>
     <div className="cards_rating">
    {
      gameBestRating.map((GBR)=>{
        return(
          <BestRating 
          keys={GBR.id}
          name={GBR.name}
          price={GBR.price}
            image={GBR.image}
          />
        )
      })
    }
     </div>
          </div>
    </div>
  )
}

export default Home