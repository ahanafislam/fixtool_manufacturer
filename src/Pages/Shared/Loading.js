import React, {useState} from 'react';
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
    const override = {
        display: "block",
        margin: "25px auto",
    };

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#fab915");

    return (
        <div className="sweet-loading">
            <HashLoader color={color} loading={loading} css={override} size={100} />
      </div>
    );
};

export default Loading;