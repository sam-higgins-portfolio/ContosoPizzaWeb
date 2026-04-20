import { AsCurrency } from "../utils/formatting"

import "../components/PizzaTable.css"

import type { Pizza } from "../types/Pizza"

type Props = {
    pizzas: Pizza[];
};

export default function PizzaTable({ pizzas }: Props) {
    return (
        <div className="pizza-table">
            <table>
                <thead>
                    <tr>
                        <th className="left-align">Name</th>
                        <th className="left-align">Price</th>
                        <th>Gluten?</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas.map((pizza) => (
                        <tr key={pizza.id}>
                            <td className="left-align">{pizza.name} Pizza</td>
                            <td className="left-align">{AsCurrency("en-GB", "GBP", pizza.price)}</td>
                            <td>{pizza.isGlutenFree ? "✔️" : "❌"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}