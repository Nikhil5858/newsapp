import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          source: {
            id: "cbs-news",
            name: "CBS News",
          },
          author: "Meredith Gordon",
          title:
            "How to watch today's Clemson vs. Alabama men's NCAA March Madness Elite 8 game: Livestream options, more",
          description:
            "Find out how and when to watch the Clemson Tigers vs. Alabama Crimson Tide men's NCAA March Madness Elite 8 game.",
          url: "https://www.cbsnews.com/essentials/how-to-watch-todays-clemson-vs-alabama-mens-ncaa-march-madness-elite-8-game-livestream-options-more/",
          urlToImage:
            "https://assets1.cbsnewsstatic.com/hub/i/r/2024/03/29/371c820d-0b65-4609-a36e-7badf7ab6c74/thumbnail/1200x630/0c41ba755bf18ab02f3ba91477f85dd8/gettyimages-2121459685-1.jpg?v=3d62f4cc0092e6eb151a9685301ed284",
          publishedAt: "2024-03-30T07:46:13+00:00",
          content:
            "Grant Nelson #2, Aaron Estrada #55 and Mark Sears #1of the Alabama Crimson Tide celebrate after defeating the North Carolina Tar Heels during the second half in the Sweet 16 round of the NCAA Men's B… [+10040 chars]",
        },
        {
          source: {
            id: "cbs-news",
            name: "CBS News",
          },
          author: "Meredith Gordon",
          title:
            "See Caitlin Clark play: How to watch today's Iowa vs. Colorado women's NCAA March Madness Sweet 16 game",
          description:
            "Caitlin Clark is headed to the Sweet 16. Find out when and how to watch the Iowa Hawkeyes' March Madness game today.",
          url: "https://www.cbsnews.com/essentials/see-caitlin-clark-play-how-to-watch-todays-iowa-vs-colorado-womens-ncaa-march-madness-sweet-16-game/",
          urlToImage:
            "https://assets1.cbsnewsstatic.com/hub/i/r/2024/03/28/4c73c6f0-cf9a-4a5a-a958-a2dd48f27a56/thumbnail/1200x630/483936e6cf5692720daa83c2d8e05d8d/gettyimages-2105339624-1.jpg?v=3d62f4cc0092e6eb151a9685301ed284",
          publishedAt: "2024-03-30T07:33:00+00:00",
          content:
            "Guard Caitlin Clark #22 of the Iowa Hawkeyes celebrates after drawing a foul late in the second half against the West Virginia Mountaineers during their second round match-up in the 2024 NCAA Divisio… [+9435 chars]",
        },
        {
          source: {
            id: "cbs-news",
            name: "CBS News",
          },
          author: "Meredith Gordon",
          title:
            "How to watch today's Illinois vs. UConn men's NCAA March Madness Elite 8 game: Livestream options, more",
          description:
            "Track UConn and Illinois' Elite 8 NCAA March Madness game with everything you need to know to watch today's game.",
          url: "https://www.cbsnews.com/essentials/how-to-watch-todays-illinois-vs-uconn-mens-ncaa-march-madness-elite-8-game-livestream-options-more/",
          urlToImage:
            "https://assets1.cbsnewsstatic.com/hub/i/r/2024/03/29/19985511-cb98-4335-b31b-59c241f9f073/thumbnail/1200x630/b87ee39d01c98188b7a0a78058ae47e7/gettyimages-2105080975-1.jpg?v=3d62f4cc0092e6eb151a9685301ed284",
          publishedAt: "2024-03-30T07:22:36+00:00",
          content:
            "Hassan Diarra #10 of the Connecticut Huskies reacts during the second half of the game against the Stetson Hatters during the first round of the NCAA Men's Basketball Tournament at Barclays Center on… [+10161 chars]",
        },
        {
          source: {
            id: "cbs-news",
            name: "CBS News",
          },
          author: "Meredith Gordon",
          title:
            "See Angel Reese play: How to watch today's LSU vs. UCLA women's NCAA March Madness Sweet 16 game",
          description:
            "Saturday plans locked in: Find out how and when to watch the LSU vs. UCLA women's March Madness Sweet 16 showdown.",
          url: "https://www.cbsnews.com/essentials/see-angel-reese-play-how-to-watch-todays-lsu-vs-ucla-womens-ncaa-march-madness-sweet-16-game/",
          urlToImage:
            "https://assets1.cbsnewsstatic.com/hub/i/r/2024/03/29/19985511-cb98-4335-b31b-59c241f9f073/thumbnail/1200x630/b87ee39d01c98188b7a0a78058ae47e7/gettyimages-2105080975-1.jpg?v=3d62f4cc0092e6eb151a9685301ed284",
          publishedAt: "2024-03-30T07:07:32+00:00",
          content:
            "Aneesah Morrow #24, Angel Reese #10, Flau'jae Johnson #4, and Hailey Van Lith #11 of the LSU Lady Tigers stand on the court against the South Carolina Gamecocks in the fourth quarter during the champ… [+10385 chars]",
        },
        {
          source: {
            id: "espn",
            name: "ESPN",
          },
          author: "Adam Teicher",
          title:
            "Houston falls to Duke after losing Jamal Shead in Sweet 16 of NCAA tournament - ESPN",
          description:
            'Houston coach Kelvin Sampson said Friday\'s Sweet 16 game against Duke would have been "a totally different story" had star Jamal Shead not left with a first-half ankle injury.',
          url: "https://www.espn.com/mens-college-basketball/story/_/id/39837385/houston-falls-duke-losing-jamal-shead-sweet-16-ncaa-tournament",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0330%2Fr1311784_1296x729_16%2D9.jpg",
          publishedAt: "2024-03-30T05:57:00Z",
          content:
            "DALLAS - Kelvin Sampson said there is no player in the country more valuable to his team than Jamal Shead is to Houston. Shead is the Big 12 player of the year, a first-team All-American and Houston'… [+2225 chars]",
        },
        {
          source: {
            id: "the-wall-street-journal",
            name: "The Wall Street Journal",
          },
          author: "Sarah Krouse, Sarah E. Needleman",
          title:
            "Hollywood Finds Fresh Characters And New Worlds in Videogames",
          description:
            "Studios seek the wisdom of die-hard gaming fans. ‘Every design now is vetted within an inch of its life.’",
          url: "https://www.wsj.com/arts-culture/television/hollywood-finds-fresh-characters-and-new-worlds-in-videogames-7358864a?mod=hp_lead_pos6",
          urlToImage: "https://images.wsj.net/im-935630/social",
          publishedAt: "2024-03-30T03:00:00Z",
          content:
            "Sonics teeth were creepy. The hedgehogs fur needed smoothing. His eyes were too small. And where were his signature white gloves? \r\nThe scathing social-media reaction to the first Sonic movie trailer… [+290 chars]",
        },
        {
          source: {
            id: "espn",
            name: "ESPN",
          },
          author: "Michael Voepel",
          title:
            "Raven Johnson's clutch 3 lifts South Carolina past Indiana in NCAA tournament - ESPN",
          description:
            "South Carolina coach Dawn Staley said she always had faith in Raven Johnson, whose late 3-pointer helped the Gamecocks survive a huge rally by No. 4 seed Indiana on Friday in the Sweet 16.",
          url: "https://www.espn.com/womens-college-basketball/story/_/id/39835966/raven-johnson-clutch-3-lifts-south-carolina-indiana-ncaa-tournament",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0330%2Fr1311725_1296x729_16%2D9.jpg",
          publishedAt: "2024-03-30T02:01:48Z",
          content:
            "ALBANY, N.Y. -- It appeared Friday as if South Carolina's women's basketball team might suffer a shocking end to an undefeated season in the NCAA tournament for the second year in a row.\r\nBut Dawn St… [+3438 chars]",
        },
        {
          source: {
            id: "techradar",
            name: "TechRadar",
          },
          author: "Marc McLaren",
          title:
            "Quordle today – hints and answers for Saturday, March 30 (game #796)",
          description:
            "Our clues will help you solve Quordle today and keep that streak going",
          url: "https://www.techradar.com/computing/websites-apps/quordle-today-answers-clues-30-march-2024",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/4XP9iNbdvkijJyZnzx3WoL-1200-80.jpg",
          publishedAt: "2024-03-30T00:15:00Z",
          content:
            "Quordle needs to be approached in a different way to Wordle. With four puzzles to solve in nine guesses, you can't blindly throw letters at it and expect to win - you'll stand a far better chance if … [+1813 chars]",
        },
        {
          source: {
            id: "entertainment-weekly",
            name: "Entertainment Weekly",
          },
          author: "https://www.facebook.com/entertainmentweekly",
          title:
            "'Game of Thrones' showrunners share their favorite character death",
          description:
            "'Game of Thrones' showrunners David Benioff and D.B. Weiss share their favorite character death on the show and the 'old-fashioned joys' of killing a 'really bad guy.'",
          url: "https://ew.com/game-of-thrones-showrunners-share-favorite-death-8622357",
          urlToImage:
            "https://ew.com/thmb/cHwP4XpsF98UavRwKFyBTtrr_8o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sophie-Turner-Battle-Of-The-Bastards-032924-e203c592eab94587808b2c78c38b1906.jpg",
          publishedAt: "2024-03-29T19:37:19.97747Z",
          content:
            "Whether it's Game of Thrones or 3 Body Problem, David Benioff and D.B. Weiss are not shy about killing off characters in their shows. \r\nAppearing on a new episode of the Happy Sad Confused podcast, t… [+1974 chars]",
        },
      ],
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h3>News App</h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mb-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  imageUrl={element.urlToImage}
                  description={element.description.slice(0,90)}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
