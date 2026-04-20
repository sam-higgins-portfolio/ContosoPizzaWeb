import type { Pizza } from "../types/Pizza";

const API_URL = import.meta.env.VITE_PIZZA_API

export async function getPizzas(): Promise<Pizza[]> {
    const response = await fetch(`${API_URL}/pizza`);

    if (!response.ok) {
    throw new Error(`Failed to fetch Pizzas: ${response.status}`);
    }

    return response.json();
}