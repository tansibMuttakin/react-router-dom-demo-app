import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom';
function NewQuote() {
    const history = useHistory();
    const addQuoteHandler=(quoteData)=>{
        console.log(quoteData);
        history.push('/quotes');
    }
    return (
        <div>
            <h1>New quote page</h1>
            <QuoteForm onAddQuote={addQuoteHandler}/>
        </div>
    )
}

export default NewQuote
