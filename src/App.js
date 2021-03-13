import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import "./App.css";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "1wf_6Dok_yo5qJt6InaVF6UVisDTeh7J-BOi2dxOaBEo",
            simpleSheet: true,
        })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
    }, []);

    function InitialGeneratedRecipe() {
        const Recipe = data;
        const RandomRecipe = Recipe[Math.floor(Math.random() * Recipe.length)];
        document.getElementById("RecipeName").innerHTML = RandomRecipe.Name;
        document.getElementById("RecipeLink").innerHTML = "<a href='" + RandomRecipe.Link + "' target='_blank';>Recipe Link</a>";
        document.getElementById("RecipeImage").innerHTML = "<img src='" + RandomRecipe.Image + "' class='recipeImage'/>";
        document.getElementById("BigButton").style.display = "none";
        document.getElementById("test").style.display = "flex";
    }

    function GenerateRecipe() {
        const Recipe = data;
        const RandomRecipe = Recipe[Math.floor(Math.random() * Recipe.length)];
        document.getElementById("RecipeName").innerHTML = RandomRecipe.Name;
        document.getElementById("RecipeLink").innerHTML = "<a href='" + RandomRecipe.Link + "' target='_blank';>Recipe Link</a>";
        document.getElementById("RecipeImage").innerHTML = "<img src='" + RandomRecipe.Image + "' class='recipeImage'/>";
    }

    window.onload = function () {
        console.log("testing");
        document.getElementById("test").style.display = "none";
    };

    return (
        <div className="container">
            <h1 className="title">Random Recipe Generator</h1>
            <div onClick={InitialGeneratedRecipe} className="buttonBig" id="BigButton">
                <h2>Click Here</h2>
            </div>
            <h3 id="RecipeName"></h3>
            <p id="RecipeLink"></p>
            <div id="RecipeImage"></div>
            <div id="test" onClick={GenerateRecipe} className="buttonSmall">
                <h3>Next</h3>
            </div>
        </div>
    );
}
export default App;
