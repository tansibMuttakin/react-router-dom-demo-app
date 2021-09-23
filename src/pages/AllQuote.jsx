import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {id:'q1',author:'Max',text:'Learning React is great!'},
    {id:'q2',author:'Millian',text:'Learning React is fun!'},
]

function AllQuote() {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuote
