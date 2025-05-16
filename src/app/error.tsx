"use client";
import React from "react";

const Error = ({
    error,
}: {
    error: Error;
    reset: () => void;
}): React.ReactNode => {
    return (
        <div>
            <h1>{error?.message}</h1>
        </div>
    );
};

export default Error;
