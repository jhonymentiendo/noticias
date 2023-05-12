import axios from "axios";
import { Fragment,useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";


function App() {

  const [categoria, setcategoria] = useState('');
  const [noticias, setnoticias] = useState({})

  const consultarapi = async (cat)=>{
    let apykey = '8054742990b84866a6da7f907180b748';
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${cat}/us.json`;//https://newsapi.org/v2/top-headlines?country=mx&category=${cat}&apiKey=${apykey}`;
    const api = await axios.get(url);
    console.log('URL',url);
    console.log('noticias',api.data.articles);
    setnoticias(api.data.articles);
    /*const API_KEY = 'e3a81167ed35345700e32b3600999b91';
    const uri = 'https://gnews.io/api/v4/top-headlines?';
    const countrySelected = `country=us`;
    const categorySelected = `topic=${cat}`;
    const apiKey = `token=${API_KEY}`;
    const url = `${uri}${categorySelected}&${countrySelected}&${apiKey}`;
    const api = await axios.get(url);
    console.log('URL',url);
    console.log('noticias',api.data.articles);
    setnoticias(api.data.articles);*/
  }

  useEffect(() => {
    if(categoria.trim()===''){

    }else{
      consultarapi(categoria)
    }
    
  }, [categoria])

  return (
    <Fragment>
      <Header titulo={`Buscador de Noticias`}></Header>
        <Formulario
          setcategoria={setcategoria}
        />
      <ListadoNoticias noticias= {noticias}></ListadoNoticias>
    </Fragment>
  );
}

export default App;
