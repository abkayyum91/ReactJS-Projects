import React from 'react'

const NewsItem = (props) => {
    const mystl = {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        left: '0'
    }

    // Destructuring of props
    let { title, urlToImage, description, publishedAt, url, source, author } = props;

    return (
        <div className="col-md-4 my-2">
            <div className="card">
                <div style={mystl}><span className="badge rounded bg-danger"> {source}</span></div>
                <img src={urlToImage ? urlToImage : "https://www.aljazeera.com/wp-content/uploads/2020/09/breaking-news@2x.png?resize=1200%2C630"} className="card-img-top" alt="articles thumbnails" style={{ height: '180px' }} />
                <div className="card-body">
                    <h5 className="card-title">{title ? title.slice(0, 45) : ""}..</h5>
                    <p className="card-text">{description ? description.slice(0, 70) : ""}..</p>
                    <p className="card-text"><small className="text-muted">by {author ? author : "unknown"} | {new Date(publishedAt).toLocaleString()}</small></p>
                </div>
                <div className="read-more text-end p-2">
                    <a className="text-decoration-none" target="_blank" rel="noreferrer" href={url}><button className="btn btn-sm btn-secondary">Read more..</button></a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;
