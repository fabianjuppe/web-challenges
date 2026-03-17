import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
    useRouter() {
        return { push: jest.fn() };
    },
}));

test("renders two input fields and a button", () => {
    render(<GameForm />);

    const inputGame = screen.getByLabelText(/Name of game/i);
    expect(inputGame).toBeInTheDocument();

    const inputPlayer = screen.getByLabelText(
        /Player names, separated by comma/i,
    );
    expect(inputPlayer).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Create game/i });
    expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
    render(<GameForm />);

    const form = screen.getByRole("form", { name: /Create a new game/i });
    expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();

    render(<GameForm onCreateGame={handleSubmit} />);

    const inputGame = screen.getByLabelText(/Name of game/i);
    expect(inputGame).toBeInTheDocument();

    const inputPlayer = screen.getByLabelText(
        /Player names, separated by comma/i,
    );
    expect(inputPlayer).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Create game/i });
    expect(button).toBeInTheDocument();

    await user.type(inputGame, "Game");
    await user.type(inputPlayer, "Player");
    await user.click(button);

    expect(handleSubmit).toHaveBeenCalledWith({
        nameOfGame: "Game",
        playerNames: ["Player"],
    });
});

test("does not submit form if one input field is left empty", async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();

    render(<GameForm onCreateGame={handleSubmit} />);

    const inputGame = screen.getByLabelText(/Name of game/i);
    expect(inputGame).toBeInTheDocument();

    const inputPlayer = screen.getByLabelText(
        /Player names, separated by comma/i,
    );
    expect(inputPlayer).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Create game/i });
    expect(button).toBeInTheDocument();

    await user.type(inputPlayer, "Player");
    await user.click(button);

    expect(handleSubmit).not.toHaveBeenCalled();
});
