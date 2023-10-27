import { createContext, useState } from "react";

export const DataContext= createContext(null);

const DataProvider = ({children}) => {

    const [account,SetAccount] = useState('');
    return(
        <DataContext.Provider value={{
            account,
            SetAccount
        }}
        > 

        {children}
        </DataContext.Provider>

    )

}

export default DataProvider;