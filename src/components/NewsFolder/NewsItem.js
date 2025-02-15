import React from 'react'
import './newsItem.css' 

export const NewsItem = ({ title, description, urlToImage, publishedAt }) => {
    return (
        <div className="news">
            <img className='news-img' src={urlToImage} alt={urlToImage} />
            <h1 className="new__title">{title}</h1>
            <span className="news__des">{description}</span>
        </div>
        
    
    )
}
