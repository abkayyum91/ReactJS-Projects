import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Pagination from './Pagination';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default class NewsArea extends Component {
    static defaultProps = {
        title: "Trending News on Daily News",
        pageSize: 9,
        country: "in",
        category: "general"
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        pageSize: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
    }

    capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            articles: [],
            loading: false,
            totalResults: 0
        };
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Daily News`;
    }

    updateNews = async () => {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5f936cf151f4f318fa30ed6bfc9ab74&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(40);
        let parseData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    };

    async componentDidMount() {
        this.updateNews();
    }
    handleNextPage = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    handlePrevPage = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1});
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5f936cf151f4f318fa30ed6bfc9ab74&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    };


    render() {
        return (
            <>
                <div className="container my-3">
                    <h2>{this.props.title}</h2>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length} //This is important field to render the next data
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        {!this.state.loading && <div className="row mx-0">
                            {
                                this.state.articles.map((element) => {
                                    return <NewsItem key={element.url} title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} publishedAt={element.publishedAt} source={element.source.name} author={element.author} />
                                })
                            }
                        </div>}
                    </InfiniteScroll>
                </div>
                {!this.state.loading && <Pagination page={this.state.page} pageSize={this.props.pageSize} totalResults={this.state.totalResults} next={this.handleNextPage} prev={this.handlePrevPage} />}
            </>
        )
    }
}
