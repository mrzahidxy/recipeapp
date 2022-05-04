import style from "./recipe.module.css";

const Recipe = ({ label, calories, dish, image, ingredients }) => {

    return (
        <div className={style.container}>
            <div className={style.recipe}>
                <p className={style.title}>{label}
                    <span style={{ fontSize: "12px" }}> ({dish})</span></p>
                <p >Cal: {calories} </p>
                <p className={style.title}>Recipe</p>
                <div className={style.info}>
                    <ol>
                        {ingredients.map(ingredient => (
                            <li> {ingredient.text} </li>
                        ))} </ol>
                </div>

            </div>
            <div>
                <img src={image} className={style.image} alt="none" />
            </div>
        </div>

    );
}

export default Recipe;