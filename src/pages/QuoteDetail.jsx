import React from 'react'
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighLightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id:'q1',author:'Max',text:'Learning React is great!'},
    {id:'q2',author:'Millian',text:'Learning React is fun!'},
]

function QuoteDetail() {
    const match = useRouteMatch();
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote=>quote.id===params.quoteId);
    if(!quote){
        return(<p>No Quote Found !</p>);
    }
    return (
        <div>
            <h1>Quote detail page</h1>
            <HighLightedQuote text={quote.text} author={quote.author}/>
            <Route path={`${match.path}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </div>
    )
}

export default QuoteDetail
