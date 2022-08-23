import React from "react";
import "./styles.scss";

const LOADING = require("../../Assets/animations/loading.json");
const LOADING_GUY = require("../../Assets/animations/loading-guy.json");

const Loading: React.FC = () => {
    return (
        <div className="loadingWrapper">
            <div className="loadingContent">
                <div className="contentInfo">
                    <h2>
                        Carregando sua dashboard {""}
                        <span role="img" aria-label="Blink">
                            😉
                        </span>
                    </h2>

                </div>

                <h3>Aguarde um instante</h3>
            </div>
        </div>
    );
};
export default Loading;