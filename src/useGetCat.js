import { useState } from 'react';
export const useGetCat = (initialVal = false) => {
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState((prev) => !prev);
    }
    return [state, toggle];
}