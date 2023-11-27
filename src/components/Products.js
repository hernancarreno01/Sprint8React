import { useParams } from 'react-router-dom';

export default function Products({ productos }) {

  const { catId } = useParams();

  const catProductos = productos.filter(p => p.categorias_id === catId);

  return (
      <div>  
          <p>Productos de la categoría {catId}</p>
      {catProductos.map(producto => (
        <p key={producto.id}>
          {producto.nombre} - ${producto.precio} 
        </p>
      ))}
    </div>
  );

}