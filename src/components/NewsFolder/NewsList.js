import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {NewsItem} from "./NewsItem"
import './newsItem.css'

export const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=263b3cfd452241f5bc2fa0a615d54952`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div className='all__news'>
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}
