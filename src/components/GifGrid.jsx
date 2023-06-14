import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifts } from '../hooks/useFetchGifts';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifts(category);
  
  return (
    <>
      <h2>{ category }</h2>
      {
        isLoading && (
          <h2>cargando...</h2>
        )
      }
      <div className="card-grid">
        {images?.map(image => (
          <GifGridItem key={ image.id } { ...image }/>
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
