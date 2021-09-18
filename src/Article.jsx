import { useEffect, useState } from "react"

const Article = ({articles}) => {
  const [articleData, setArticleData] = useState([])
  useEffect(() => {
    setArticleData(articles)
  }, [articleData])
  return (
    <div className="table-container">
        <div><h1>Title</h1></div>
        <div><h1>Upvotes</h1></div>
        <div><h1>Date</h1></div>
        {articleData.map((article, index) => (
          <>
            <div>{article.title}</div>
            <div>{article.upvotes}</div>
            <div>{article.date}</div>
          </>
        ))}
      </div>
  )
}

export default Article
