import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    const onChange = jest.fn();

    render(
        <Input
            labelText="Name"
            placeholder="Name"
            name="Name"
            value="Name"
            onChange={onChange}
            required
        />,
    );

    const input = screen.getByLabelText("Name");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Name");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "Name");
    expect(input).toHaveAttribute("id", "Name");
    expect(input).toHaveAttribute("value", "Name");
    expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();

    render(
        <Input
            labelText="Name"
            placeholder="Name"
            name="Name"
            value="Name"
            onChange={onChange}
            required
        />,
    );

    const input = screen.getByLabelText("Name");

    expect(input).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(0);
    await user.type(input, "Name");
    expect(onChange).toHaveBeenCalledTimes(4);
});
