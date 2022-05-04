import React, {useEffect, useState} from "react";

const ServerRequestExample = () => {
    const [ serverData, setServerData ] = useState(null); // Redux, Mobx, this.state
    const [ dataFetchError, setDataFetchError] = useState(null);
    const [ isFetching, setIsFetching] = useState(null);

    useEffect(() => {
        getServerData().then(({data}) => {
            setServerData(data);
        }).catch(() => {
            setDataFetchError("Error on server side. BLAME CANADA!");
            //dispatch({type: "setGlobalError", payload: "Error text"});
        })
    }, []);//componentDidMount() {}

    const handleFormSubmit = () => {
        setIsFetching(true);
        sendData().then().catch().finally(() => {
            setIsFetching(false);
        })
    }

    if (!serverData) return (
        <div className={"spinner"}>

        </div>
    )

    if (!dataFetchError) return (
        <div>
            {}
        </div>
    )

    return (
        <div>
            {serverData}
        </div>
    )

    return (
            <div>
                {serverData ?
                    <div>
                        {serverData}
                    </div>
                    :
                    <div className={"spinner"}>

                    </div>
                }
            </div>
        )
}