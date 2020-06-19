import React, { createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const pageVariants = {
        in: {
            opacity: 0,
        },
        done: {
            opacity: 1,
        },
        out: {
            opacity: 0,
        }
    }


    return (
        <DataContext.Provider value={{ pageVariants }}>
            {children}
        </DataContext.Provider>
    )
}