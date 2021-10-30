import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const NewsArea = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() => {
        document.title = `Daily News - ${capitalizeFirstLetter(props.category)}`;
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            <div className="container my-3">
                <h2>{props.title}</h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>
                    <div className="row mx-0">
                        {
                            articles.map((element) => {
                                return <NewsItem key={element.url} title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} publishedAt={element.publishedAt} source={element.source.name} author={element.author} />
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

export default NewsArea;

NewsArea.defaultProps = {
    title: "Trending News on Daily News",
    pageSize: 9,
    country: "in",
    category: "general"
}

NewsArea.propTypes = {
    title: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}