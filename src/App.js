import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import FadeIn from "react-fade-in";
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

    window.onload = function () {
        document.getElementById("nextButton").style.display = "none";
    };

    function InitialGeneratedRecipe() {
        const Recipe = data;
        const RandomRecipe = Recipe[Math.floor(Math.random() * Recipe.length)];
        document.getElementById("RecipeName").innerHTML = RandomRecipe.Name;
        document.getElementById("RecipeLink").innerHTML = "<a href='" + RandomRecipe.Link + "' target='_blank';>Recipe Link</a>";
        document.getElementById("RecipeImage").innerHTML = "<img src='" + RandomRecipe.Image + "' class='recipeImage'/>";
        document.getElementById("BigButton").style.display = "none";
        document.getElementById("nextButton").style.display = "flex";
    }

    function GenerateRecipe() {
        const Recipe = data;
        const RandomRecipe = Recipe[Math.floor(Math.random() * Recipe.length)];
        document.getElementById("RecipeName").innerHTML = RandomRecipe.Name;
        document.getElementById("RecipeLink").innerHTML = "<a href='" + RandomRecipe.Link + "' target='_blank';>Recipe Link</a>";
        document.getElementById("RecipeImage").innerHTML = "<img src='" + RandomRecipe.Image + "' class='recipeImage'/>";
    }

    return (
        <div className="container">
            <div className="header">
                <h1 className="title">Random Recipe Generator</h1>
            </div>
            <div className="main">
                <FadeIn>
                    <div onClick={InitialGeneratedRecipe} className="buttonBig" id="BigButton">
                        <h2>Click Here</h2>
                    </div>
                </FadeIn>
                <h3 id="RecipeName" className="recipeName"></h3>
                <p id="RecipeLink" className="recipeLink"></p>
                <div id="RecipeImage"></div>
            </div>
            <div className="footer">
                <div id="nextButton" onClick={GenerateRecipe} className="buttonSmall">
                    <h3>Next</h3>
                </div>
            </div>
        </div>
    );
}
export default App;
