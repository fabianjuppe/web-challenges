import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export default function QuickActions({
    lights,
    activeLightsCount,
    onTurnAllLightsOff,
    onTurnAllLightsOn,
}) {
    return (
        <StyledQuickActions>
            <Button
                type="button"
                onClick={onTurnAllLightsOff}
                disabled={activeLightsCount === 0}
            >
                Turn all lights off
            </Button>
            <Button
                type="button"
                onClick={onTurnAllLightsOn}
                disabled={activeLightsCount === lights.length}
            >
                Turn all lights on
            </Button>
        </StyledQuickActions>
    );
}
