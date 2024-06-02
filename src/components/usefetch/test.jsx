import useFetch from "./fetch"

export default function UseFetchHook(){
 const { data, error, pending } = useFetch('https://dummyjson.com/products', {})

 console.log(data, error, pending)

 return (
  <div>
   <h1>Use Fetch Hook</h1>
   {
    pending ? <h3>Data pending! Please wait!</h3> : null
   }
   {
    data && data.products && data.products.length ?
    data.products.map((item) => (
    <p key={item.key}>{item.title}</p>)) 
    : null
   }
  </div>
 )
}