import { useQuery } from "@tanstack/react-query"
import Axios from "axios"

export const Cat = () => {
    const { data: catData } = useQuery(['cat'], async () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => {
            console.log(res.data);
            return res.data;
        });
    });
    return (
        <div>
            <h1>Fact: {catData?.fact}</h1>
        </div>
    );
};