import { useParams } from 'react-router-dom'

const CategoryPage = () => {
  const { categoryName } = useParams()

  console.log({ CategoryPage: categoryName })

  return <div>CategoryPage</div>
}

export default CategoryPage
