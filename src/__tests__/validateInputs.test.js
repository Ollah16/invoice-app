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

        test("Whoisfrom input shows no error when a test is entered", () => {
            const inputField = screen.getByLabelText("whoisfrom");
            fireEvent.change(inputField, { target: { value: "hello world" } });
            expect(inputField.value).toBe("hello world")
            expect(screen.queryByText("Please enter the name of who the invoice is from.")).not.toBeInTheDocument()
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
    })
})