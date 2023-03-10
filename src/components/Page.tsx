import React from 'react';
import {DataStateType} from "./Data/DataState";
import {useParams} from "react-router-dom";
import {Error404} from "./pages/Error404";

export const Page = (props: DataStateType) => {
    const params = useParams()
    const index = Number(params.id)
    return (
        <>
            {
                index < props.pages.length
                    ?
                    <>
                        <div>{props.pages[index].heading}</div>
                        <div>{props.pages[index].about}</div>
                    </>
                    : <Error404/>
            }
        </>
    );
};

