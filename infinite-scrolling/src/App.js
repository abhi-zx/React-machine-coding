import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchProduct = async () => {
    setLoading(true);

    // Fetching data based on skip (page - 1) * 20 and limit 20
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
    const data = await res.json();
    console.log(data.products);
    setProducts((prev) => [...prev, ...data.products]);

    setLoading(false);
  };

  useEffect(() => {
    // console.log("inside fetchProduct.....")
    fetchProduct();
  }, [page]);

  const handleScroll = () => {
    // console.log("scroll.....")
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    console.log("scrollTop.....",scrollTop)
    console.log("clientHeight.....",clientHeight)
    console.log("scrollHeight.....",scrollHeight)

    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // console.log("inside handlescroll.....")
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div className="App">
      <h1>Infinite Scrolling</h1>
      <div>
        {products.map((item) => (
          <h4 key={item.id}>{item.title}</h4>
        ))}
        {loading && <p>Loading....</p>}
      </div>
    </div>
  );
}

export default App;
