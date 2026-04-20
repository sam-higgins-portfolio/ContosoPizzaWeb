export function AsCurrency(locale: string, currency: string, amount: number){
    return amount.toLocaleString(locale, {
        style: "currency",
        currency: `${currency}`
    })
}