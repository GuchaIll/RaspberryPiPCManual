
"use client";
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'turn-js';

// jquery-turn.d.ts (or any other suitable name)
declare interface JQuery {
    turn(options?: any): void;
}

const FlipBookComponent: React.FC = () => {
    useEffect(() => {
        $("#flipbook").turn({
            width: 400,
            height: 300,
            autoCenter: true
        });
    }, []);

    return (
        <div id="flipbook">
            <div className="hard"> Turn.js </div>
            <div className="hard">HI</div>
            <div> Page 1 </div>
            <div> Page 2 </div>
            <div> Page 3 </div>
            <div> Page 4 </div>
            <div className="hard">BYW</div>
            <div className="hard">ENd</div>

            
        </div>
        
    );
};

export default FlipBookComponent;