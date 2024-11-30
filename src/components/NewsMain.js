import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsMain extends Component {
    // news = [
    //     {
    //         "source": {
    //             "id": "der-tagesspiegel",
    //             "name": "Der Tagesspiegel"
    //         },
    //         "author": "Der Tagesspiegel",
    //         "title": "„Viele haben das fest eingerechnet“: Paus fordert Zustimmung von Union und FDP zur Kindergeld-Erhöhung",
    //         "description": "Die Pläne der Familienministerin sehen eine Aufstockung von fünf Euro ab 1. Januar vor. Doch seit dem Ampel-Aus muss die Grünen-Politikerin neue Mehrheiten beschaffen. Die Zeit dafür wird knapp.",
    //         "url": "https://www.tagesspiegel.de/politik/viele-haben-das-fest-eingerechnet-paus-fordert-zustimmung-von-union-und-fdp-zur-kindergeld-erhohung-12775460.html",
    //         "urlToImage": "https://www.tagesspiegel.de/images/12663512/alternates/BASE_16_9_W1400/1732685732000/session-of-the-german-lower-house-of-parliament-bundestag-in-berlin.jpeg",
    //         "publishedAt": "2024-11-27T05:48:24+00:00",
    //         "content": "Bundesfamilienministerin Lisa Paus (Grüne) hat Union und FDP aufgefordert, einer Kindergeld-Erhöhung zum Jahreswechsel im Bundestag rasch zuzustimmen. \r\nDie Tagesspiegel-App Aktuelle Nachrichten, Hin… [+1496 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "al-jazeera-english",
    //             "name": "Al Jazeera English"
    //         },
    //         "author": "Al Jazeera",
    //         "title": "US stock market surges to record high despite Trump’s tariff threats",
    //         "description": "The S&P 500 rises 0.57 percent after US president-elect’s tariff announcements roil European and Asian markets.",
    //         "url": "https://www.aljazeera.com/economy/2024/11/27/us-stock-market-surges-to-record-high-despite-trumps-tariff-threats",
    //         "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/AP24331473820936-1732670768.jpg?resize=1920%2C1440",
    //         "publishedAt": "2024-11-27T02:27:35Z",
    //         "content": "US stocks have hit record highs despite United States President-elect Donald Trumps pledge to impose sweeping tariffs that threaten to upend international trade.\r\nThe S&amp;P 500, which measures the … [+1538 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "recode",
    //             "name": "Recode"
    //         },
    //         "author": "Nicole Narea",
    //         "title": "Why is GameStop stock surging again?",
    //         "description": "Why are GameStop, AMC, and BlackBerry stocks surging again? Ask Roaring Kitty.",
    //         "url": "https://www.vox.com/business-and-finance/2024/5/14/24156725/meme-stocks-gamestop-reddit-amc-blackberry-wallstreetbets",
    //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/bNRxjIXIJ1AI8FrLhADmrXc7b3I=/0x0:4000x2094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25447983/1746649757.jpg",
    //         "publishedAt": "2024-05-14T20:20:00Z",
    //         "content": "A roaring kitty, a legion of Redditors, and failing companies that are suddenly, inexplicably highly valued are making it feel like 2021 all over again. \r\nGameStop was one of the first memestocks sto… [+3656 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "fortune",
    //             "name": "Fortune"
    //         },
    //         "author": "Kevin Kelleher",
    //         "title": "Buybacks vs dividends? In market downturns, the rules may change",
    //         "description": "CFOs can return profits to shareholders with dividends and buybacks. Here's how they may fare during a stock market selloff or recession.",
    //         "url": "https://fortune.com/2022/06/01/buybacks-vs-dividends-stock-market-downturns-recession-cfo-daily-newsletter/",
    //         "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/GettyImages-1310316502.jpg?resize=1200,600",
    //         "publishedAt": "2022-06-01T10:15:00Z",
    //         "content": "Skip to Content"
    //     },
    //     {
    //         "source": {
    //             "id": "recode",
    //             "name": "Recode"
    //         },
    //         "author": "Emily Stewart",
    //         "title": "How Reddit and WallStreetBets blew up GameStop’s stock",
    //         "description": "A bunch of Redditors made GameStop’s stock soar, much to the chagrin of the hedge funds attempting to short it.",
    //         "url": "https://www.vox.com/the-goods/22249458/gamestop-stock-wallstreetbets-reddit-citron",
    //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/W4sv0GKA_my9XSRbvFr58w52ABo=/0x0:4000x2094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22259374/1229817489.jpg",
    //         "publishedAt": "2021-01-25T23:30:00Z",
    //         "content": "Editors note, May 13, 2024, 2:35 pm ET: On May 12, 2024, Keith Gill, a.k.a. Roaring Kitty, returned to social media, with a post on X indicating his possible reentry to the investing space, and set o… [+17939 chars]"
    //     }
    // ]

    constructor() {
        super()
        this.state = {
            // topNews: this.news
            topNews: [],
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c825930dbb5e461a94571612886bf0e6&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({ topNews: parsedData.articles, totalNews: parsedData.totalResults })
    }

    prevNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c825930dbb5e461a94571612886bf0e6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({ topNews: parsedData.articles, page: this.state.page - 1 })
    }

    nextNews = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalNews / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c825930dbb5e461a94571612886bf0e6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            let parsedData = await data.json()
            // console.log(parsedData);
            this.setState({ topNews: parsedData.articles, page: this.state.page + 1 })
        }
    }

    render() {
        return (
            <div className='container my-4'>
                <h2>Headlines</h2>
                <div className='row'>
                    {this.state.topNews.map((data) => {
                        return <div className='col-4' key={data.url}>
                            <NewsItem title={data.title ? data.title.slice(0, 40) : ""} desc={data.description ? data.description.slice(0, 80) : ""} imageUrl={data.urlToImage} newsUrl={data.urlToImage} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between mt-4'>
                    <button type='button' disabled={this.state.page <= 1} className='btn btn-primary' onClick={this.prevNews}>Previous</button>
                    <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalNews / this.props.pageSize)} className='btn btn-primary' onClick={this.nextNews}>Next</button>
                </div>
            </div>
        )
    }
}

export default NewsMain
