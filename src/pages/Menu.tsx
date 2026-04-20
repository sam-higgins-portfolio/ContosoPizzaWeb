import PizzaTable from "../components/PizzaTable";
import { usePizzas } from "../hooks/usePizzas";

export default function Menu() {
    const { pizzas, error } = usePizzas();

    if (error) return <p>{error}</p>

    return (
        <>
            <PizzaTable pizzas={pizzas}/>
        </>
    )
}