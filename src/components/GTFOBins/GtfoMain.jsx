import React, { useState } from "react";
import { Wrapper } from "../Dashboard/Profile/ProfileElements";
import { Data } from "./Data";
import { FunctionData } from "./Function";

export default function GtfoBin() {
    const [activeFunction, setActiveFunction] = useState("All");

    function handleActiveFunction(data) {
        setActiveFunction(data);
    }

    return (
        <Wrapper style={{ width: "60%" }}>
            <label style={{ fontSize: "48px", fontWeight: "bold", letterSpacing: "5px" }}>BinExploit</label>

            <div style={{ display: "block", width: "100%", textAlign: "center", margin: "30px" }}>
                <button
                    style={{
                        padding: "10px",
                        border: "solid 1px",
                        margin: "10px",
                        backgroundColor: activeFunction === "All" ? "#ff6b08" : "black",
                    }}
                    onClick={() => {
                        handleActiveFunction("All");
                    }}
                >
                    All
                </button>

                {Object.keys(FunctionData).map((data) => (
                    <button
                        key={data}
                        style={{
                            padding: "10px",
                            border: "solid 1px",
                            margin: "10px",
                            backgroundColor: activeFunction === data ? "#ff6b08" : "black",
                        }}
                        onClick={() => {
                            handleActiveFunction(data);
                        }}
                    >
                        {data}
                    </button>
                ))}
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: "30px",
                }}
            >
                {Object.keys(Data).map(
                    (key) =>
                        (activeFunction === "All" || Object.keys(Data[key].functions).includes(activeFunction)) && (
                            <div key={key} style={{ display: "flex", margin: "10px" }}>
                                <a
                                    style={{
                                        width: "180px",
                                        color: "white",
                                        display: "flex",
                                        alignItems: "flex-start",
                                        marginTop: "15px",
                                        textDecorationLine: "underline",
                                    }}
                                    href={"/tools/binexploits/" + key}
                                >
                                    {key}
                                </a>
                                <div style={{ display: "grid-row", width: "550px" }}>
                                    {Object.keys(Data[key].functions).map((binaryFunction) => (
                                        <button
                                            key={binaryFunction}
                                            onClick={() => {
                                                handleActiveFunction(binaryFunction);
                                            }}
                                            style={{
                                                padding: "10px",
                                                border: "solid 1px",
                                                margin: "10px",
                                                backgroundColor:
                                                    activeFunction === binaryFunction ? "#ff6b08" : "black",
                                            }}
                                        >
                                            {binaryFunction}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ),
                )}
            </div>
        </Wrapper>
    );
}