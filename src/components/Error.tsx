import React from "react";

interface ErrorProps {
    error: string
}

export function Error({error}: ErrorProps) {
    return (
        <p className='text-center text-8xl text-red-800 content-center'>{ error }</p>
    )
}