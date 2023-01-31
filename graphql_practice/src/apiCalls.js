const getData = () => {
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query {
      users {
        id
        name 
        email 
      }
    }
      `
    })
  })
  .then(response => response.json())
} 

export default getData