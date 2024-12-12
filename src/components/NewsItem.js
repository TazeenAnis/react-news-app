import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, desc, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className='my-2'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" height={150} alt="..." />
                    <div className="card-body">
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left: '90%', zIndex: '1'}}>
                            {source}
                        </span>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <p className='card-text'><small>By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_new' className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
