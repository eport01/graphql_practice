import React from 'react';
import ReactDOM from 'react-dom/client';
// import './tailwind.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';


const httpLink = createHttpLink({ 
  uri: 'http://localhost:3000' 
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
)

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

