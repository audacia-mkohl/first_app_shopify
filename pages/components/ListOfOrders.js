import React from "react";
import { GET_ORDER } from "../Graphql/Queries";
import { useQuery } from 'react-apollo'

function ListOfOrder() {
    const { data } = useQuery(GET_ORDER);

    return(
        <div>
            <p>this is a test !!! </p>
        </div>
    );
}

export default ListOfOrder;

