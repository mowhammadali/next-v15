import { describe , it , expect  } from "vitest"
import { render, screen } from '@testing-library/react';
import Wallet from "@/app/user/wallet/page";

describe("wallet" , function () {
    it("should render wallet" , () => {
        render(<Wallet />);
        expect(screen.getByText(/wallet/i)).toBeInTheDocument();
    })
})