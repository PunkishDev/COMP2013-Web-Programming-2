import {useState, useEffect} from "react"

export default function QuoteFetcher() {
    const URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
    const [quote, setQuote] = useState({
        text: "",
        author: "",
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchQuote(); //Callback function body that gets run on refresh
    }, [/* states that cause a refresh of the effect */]);

    const fetchQuote = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        //console.log(data);
        setQuote({text: data.quote.text, author: data.quote.author});
        setIsLoading(false);
    }
    
    return <div>
        <h1>Quote Fetcher</h1>
        {isLoading && <h2>Loading...</h2>}
        <p>{quote.text}</p>
        <p>{quote.author}</p>
        <button onClick={() => fetchQuote()}>Get new Quote</button>
    </div>
}