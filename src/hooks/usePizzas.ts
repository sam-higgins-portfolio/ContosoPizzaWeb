import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import { getPizzas } from "../api/PizzaApi";

export function usePizzas() {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPizzas() {
            try {
                const menu = await getPizzas();
                setPizzas(menu)
                setError(null)
            } catch (err) {
                setError(`${err}`);
            }
        }
    
        fetchPizzas();
    }, []);

    return { pizzas, error };
}