import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import API from '../../utils/API';
import {
  SearchElements,
  Input,
  Button,
  ProductsList,
  Product,
  SearchSuggestions,
  SuggestionsList,
  Suggestion,
} from './style';

export default function Search() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadProducts() {
    if (query.length === 0) {
      setProducts([]);
      setSuggestions([]);

      return setIsLoading(false);
    } else if (query.length < 3) {
      const infoMessage =
        'Por favor, informe um nome com três ou mais caracteres.';
      toast.info(infoMessage, { toastId: infoMessage });

      return setIsLoading(false);
    }

    try {
      const response = await API.get('/', {
        params: {
          content: query,
          source: 'nanook',
        },
      });

      setProducts(response.data.products);

      const suggestionsData = response.data.suggestions.map((el) => el.term);
      setSuggestions(suggestionsData);

      if (response.data.products.length === 0) {
        const warnMessage = 'Nenhum produto foi encontrado.';
        toast.warn(warnMessage, { toastId: warnMessage });
      }
    } catch (error) {
      const errorMessage = 'Ops! Houve algum problema...';
      toast.error(errorMessage, { toastId: errorMessage });
    }

    setIsLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, [isLoading]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsLoading(true);
    }
  };

  const handleClick = (e) => {
    if (e.target.tagName === 'LI') {
      setQuery(e.target.textContent);
    }

    setIsLoading(true);
  };

  return (
    <>
      <SearchElements>
        <Input
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Busque aqui! :)"
          value={query}
        />
        <Button onClick={handleClick}>Buscar</Button>
      </SearchElements>

      {!isLoading ? (
        <>
          <ProductsList>
            {products.map(({ id, name }) => (
              <Product key={id}>
                <p>{name}</p>
              </Product>
            ))}
          </ProductsList>

          <SearchSuggestions>
            {suggestions.length !== 0 && <h2>Sugestões de busca:</h2>}
            <SuggestionsList>
              {suggestions.map((suggestion) => (
                <Suggestion key={suggestion} onClick={handleClick}>
                  {suggestion}
                </Suggestion>
              ))}
            </SuggestionsList>
          </SearchSuggestions>
        </>
      ) : (
        <Loader
          type="Oval"
          color="#42597f"
          height={100}
          width={100}
          style={{ margin: '50px auto' }}
        />
      )}
    </>
  );
}
