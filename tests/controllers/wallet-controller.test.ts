
import { WalletController } from "../../src/controllers/wallet/wallet-controller";

describe("WalletController debug", () => {
    let mockRepo: any;
    let controller: WalletController;
    let req: any;
    let res: any;

    beforeEach(() => {
        mockRepo = {
            getBalance: jest.fn(),
            cashIn: jest.fn(),
            debit: jest.fn(),
        };

        req = {};
        res = {
            json: jest.fn().mockReturnThis(),
            status: jest.fn().mockReturnThis(),
        };

        controller = new WalletController(mockRepo);

    });

    it("balanceInquiry should call repo.getBalance and res.json", () => {
        mockRepo.getBalance.mockReturnValue(1000);

        controller.balanceInquiry(req, res);

        expect(mockRepo.getBalance).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({ balance: 1000 });
    });

    it("cashIn should call repo.cashIn and return updated balance", () => {
        req.body = { amount: 500 };
        mockRepo.cashIn.mockReturnValue(1500);

        controller.cashIn(req, res);

        expect(mockRepo.cashIn).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Cash in successful",
            balance: 1500,
        });
    });

    it("debit should call repo.debit and return updated balance", () => {
        req.body = { amount: 200 };
        mockRepo.debit.mockReturnValue(800);

        controller.debit(req, res);

        expect(mockRepo.debit).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            "balance": 800,
            "message": "Transaction successful",
        });
    });
});
