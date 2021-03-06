import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { MdNoFood } from "react-icons/md"

function Searched() {
    const [searchedRecipe, setSearchedRecipe] = useState([]);

    let params = useParams();
    const getSearched = async (name) => {

        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        )
        const recipes = await data.json();
        setSearchedRecipe(recipes.results)
    }

    useEffect(() => {
        getSearched(params.type);
    }, [params.type]);

    return (
        <Grid>
            {searchedRecipe.length === 0 && (
                <Zero>
                    <MdNoFood></MdNoFood>
                    <h4> No Results Found</h4>
                </Zero>
            )}
            {searchedRecipe.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
}

const Grid = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fit, minmax(12rem,1fr));
    grid-gap:2rem;
`

const Card = styled.div`
    img{
        width:100%;
        border-radius:2rem;
    }

    a{
        text-decoration:none;
    }

    h4{
        text-align:center;
        padding : 1rem;
    }
`

const Zero = styled.div`
    display: flex;
    margin: 5rem;
    justify-content: center;
    align-items:center;
    svg{
        margin :0 15px;
        font-size : 2rem;
    }
`

export default Searched;