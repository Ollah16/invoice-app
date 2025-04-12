import { fireEvent, render, screen } from "@testing-library/react"
import InvoiceContactSection from "../components/desktop/InvoiceContactSection"
import { AppProvider } from "../context/AppContext"
import { handleInputValidation } from "../utils/validateInputs";

describe("Input Field", () => {
    describe("Contact Inputs", () => {
        beforeEach(() => {
            render(
                <AppProvider>
                    <InvoiceContactSection />
                </AppProvider>)
        })

        test("Whoisfrom input returns error message on blur if empty", () => {
            const inputField = screen.getByLabelText("whoisfrom");
            fireEvent.blur(inputField);
            expect(screen.getByText("Please enter the name of who the invoice is from.")).toBeInTheDocument()
        })

        test("Whoisfrom input shows no error when a value is entered", () => {
            const inputField = screen.getByLabelText("whoisfrom");
            fireEvent.change(inputField, { target: { value: "hello world" } });
            expect(inputField.value).toBe("hello world")
            expect(screen.queryByText("Please enter the name of who the invoice is from.")).not.toBeInTheDocument()
        })

        test("Reciever Title input displays error with no value on blur", () => {
            const inputField = screen.getByLabelText("reciever title");
            fireEvent.blur(inputField);
            expect(screen.getByText("Please enter receiver title")).toBeInTheDocument();
        })

        test("Receiver title Input displays no error with a value entered", () => {
            const inputField = screen.getByLabelText("receiver title");
            fireEvent.change(inputField, { target: { value: "Hello world" } });
            expect(inputField.value).toBe("Hello world")
            expect(screen.queryByText("Please enter receiver title")).not.toBeInTheDocument()
        })

        test("Receiver input displays error on blur with no value input", () => {
            const inputField = screen.getByLabelText("receiver");
            fireEvent.blur(inputField);
            expect(screen.getByText("Please enter receiver information")).toBeInTheDocument();
        })

        test("Receiver input displays no error with input value", () => {
            const inputField = screen.getByLabelText("receiver");
            fireEvent.change(inputField, { target: { value: "Hello world" } });
            expect(inputField.value).toBe("Hello world");
            expect(screen.queryByText("Please enter receiver information")).not.toBeInTheDocument();
        })
    });

    describe("Utility function helper", () => {
        test("Validate inputs should return empty string without field name or value", () => {
            const inputField = handleInputValidation();
            expect(inputField).toBe("")
        })

        test("Who is from input returns error on empty", () => {
            const inputError = handleInputValidation("WHOISFROM", "");
            expect(inputError).toBe("Please enter the name of who the invoice is from.")
        })

        test("Who is from input returns empty string when there is a value", () => {
            const inputError = handleInputValidation("WHOISFROM", "Hello world");
            expect(inputError).toBeUndefined()
        })

        test("Receiver title input return error on empty", () => {
            const inputError = handleInputValidation("BILL_TITLE", "");
            expect(inputError).toBe("Please enter a title")
        })

        test("Receiver title input returns empty string without a value", () => {
            const inputError = handleInputValidation("BILL_TITLE", "Hello world");
            expect(inputError).toBeUndefined();
        })
        test("Receiver input return error on empty", () => {
            const inputError = handleInputValidation("BILL", "");
            expect(inputError).toBe("Please enter receiver information")
        })

        test("Receiver input returns empty string without a value", () => {
            const inputError = handleInputValidation("BILL", "Hello world");
            expect(inputError).toBeUndefined();
        })
    })
})