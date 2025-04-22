import React,{useState,useEffect} from 'react'

function DataFetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        setData(data);
        setLoading(false); //jese hi false hoga setLoading <ul></ul> run hojayega
      });
   },[]);
   // it will run only on first render


  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ):(
        <ul>
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher
