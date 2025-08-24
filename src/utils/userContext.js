import {createContext} from "react";

const userContext =createContext(
    {
        loggedInUser:"always smile",
    }
);
export default userContext;