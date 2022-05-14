import { useState } from 'react'
import { Banner } from './components/Banner'
import { Nav } from './components/Nav'
import { Row } from './components/Row'
import categories, { getMovies } from './services/api'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      

      <Nav />
      <Banner />
      {categories.map((category) => {
        
        return <Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge}/>;

      } )}

    </div>
  )
}


