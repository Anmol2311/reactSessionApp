import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export default function Counter() {
    return (
        <div className="text-center mt-4">
            <div className="mt-3">
                <ClickCounter />
            </div>
            <div className="mt-3">
                <HoverCounter />
            </div>
        </div>
    )
}
