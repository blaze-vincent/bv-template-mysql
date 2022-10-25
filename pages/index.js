export default function Home() {
  return (
    <button
      onClick={e => {
        fetch('/api/test').then(res => {
          return res.json()
        }).then(json => {
          console.log(json)
        })
      }}
    >test</button>
  )
}
