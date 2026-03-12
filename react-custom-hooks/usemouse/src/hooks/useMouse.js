import { useEffect, useState } from "react";

export default function useMouse() {
    const [position, setPosition] = useState([0, 0]);

    useEffect(() => {
        document.body.addEventListener("mousemove", (event) => {
            setPosition([event.clientX, event.clientY]);
        });
    }, []);

    return [position[0], position[1]];
}
