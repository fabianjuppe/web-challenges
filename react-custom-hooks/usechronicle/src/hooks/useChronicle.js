import { useState } from "react";

export default function useChronicle(initialValue) {
    const [timeline, setTimeline] = useState([initialValue]);

    function setState(value) {
        setTimeline([...timeline, value]);
    }

    function resetState() {
        if (timeline.length >= 2) {
            setTimeline(timeline.slice(0, -1));
        }
    }

    const currentValue = timeline.at(-1);

    return [currentValue, setState, resetState];
}
