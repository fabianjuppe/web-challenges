import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    const onDecreasePlayerScore = jest.fn();
    const onIncreasePlayerScore = jest.fn();

    render(
        <Player
            name="Name"
            score={0}
            onDecreasePlayerScore={onDecreasePlayerScore}
            onIncreasePlayerScore={onIncreasePlayerScore}
        />,
    );

    const playerName = screen.getByText("Name");
    expect(playerName).toBeInTheDocument();

    const playerScore = screen.getByText(0);
    expect(playerScore).toBeInTheDocument();

    const buttonDecrease = screen.getByRole("button", {
        name: "Decrease Score",
    });
    expect(buttonDecrease).toBeInTheDocument();

    const buttonIncrease = screen.getByRole("button", {
        name: "Increase Score",
    });
    expect(buttonIncrease).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {
    const onDecreasePlayerScore = jest.fn();
    const onIncreasePlayerScore = jest.fn();
    const user = userEvent.setup();

    render(
        <Player
            name="Name"
            score={0}
            onDecreasePlayerScore={onDecreasePlayerScore}
            onIncreasePlayerScore={onIncreasePlayerScore}
        />,
    );

    const playerName = screen.getByText("Name");
    expect(playerName).toBeInTheDocument();

    const playerScore = screen.getByText(0);
    expect(playerScore).toBeInTheDocument();

    const buttonDecrease = screen.getByRole("button", {
        name: "Decrease Score",
    });
    expect(buttonDecrease).toBeInTheDocument();
    await user.click(buttonDecrease);
    expect(onDecreasePlayerScore).toHaveBeenCalledTimes(1);

    const buttonIncrease = screen.getByRole("button", {
        name: "Increase Score",
    });
    expect(buttonIncrease).toBeInTheDocument();
    await user.click(buttonIncrease);
    expect(onIncreasePlayerScore).toHaveBeenCalledTimes(1);
});
