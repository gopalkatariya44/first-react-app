import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const Home = () => {
    const { data, isLoading, isError, refetch } = useQuery(["cat"], async () => {
        const res = await Axios.get("https://catfact.ninja/fact");
        return res.data;
    });

    if (isError) {
        return <p>Somthing went wrong</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <p>{data?.fact}</p>
            <button onClick={refetch}>Update Fact</button>
        </div>
    )
};