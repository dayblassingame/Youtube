import React from "react";

export default function App(){

    return(
        <div>
            <header>
                <icon id='menu'></icon>
                <img id="logo" />
                <input id='search'/>
            </header>
            <nav>
                <ul>
                </ul>
                <footer/>
            </nav>
            <main>
                <div id='filters'>
                    <ul>
                    </ul>
                </div>
                <div id='video list'>
                    <div id="videoComponent">
                        <img src='' />
                        <span>
                            <p id='title'><b></b></p>
                            <icon id='videoOptions'/>
                        </span>
                        <p id='channel name'></p>
                    </div>
                </div>
            </main>
        </div>
    )
}