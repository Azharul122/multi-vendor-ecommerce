import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Title from '../../../components/ui/Title'
import MainContainer from '../../../components/user/containers/MainContainer'
import { featuredProducts, siteNews } from '../../../constance'
import { News, Product } from '../../../types'
import ProductsCard from '../../../components/ui/ProductsCard'
import NewsCard from '../../../components/user/NewsCard/NewsCard'

interface searchProps {
  query: string
}

const Search = () => {

  const location = useLocation()
  const query = new URLSearchParams(location.search).get("query")
  // const query=location.state
  const [searchProducts, setSerachProducts] = useState<Product[]>([])
  const [searchNews, setSearchNews] = useState<News[]>([])


  useEffect(() => {
    if (query) {

      const searchProductsFilter = featuredProducts.filter(product => product.name.includes(query) || product.tags.includes(query) || product.description.includes(query) || product.category.includes(query))
      setSerachProducts(searchProductsFilter)

      const searchNews = siteNews.filter(news => news.author == query || news.category.includes(query) || news.description.includes(query) || news.tags.includes(query) || news.description.includes(query))
      setSearchNews(searchNews)
    }
  }, [searchProducts,searchNews])





  return (
    <div className='py-5'>

      <MainContainer>
        <Title title={`Search result for "${query}"`} />
        <div className="pt-4 grid gap-3 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {
            searchProducts.length > 0 ? (
              searchProducts.map(product => (
                <ProductsCard product={product} />
              ))
            ) : (<div className="">
              No products found
            </div>)

          }
        </div>

        {/* News */}
        <div className="py-7">
        <Title title={`Recommended News`} />
        <div className="pt-4 grid gap-3 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {
            searchNews.length > 0 ? (
              searchNews.map(news => (
                // <ProductsCard product={product} />
                <NewsCard news={news}/>
              ))
            ) : (<div className="">
              No News found
            </div>)

          }
        </div>
        </div>

      </MainContainer>

    </div>
  )
}

export default Search