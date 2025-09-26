import { Container } from "inversify";
import TYPES from "./src/types";
import { WalletRepository } from "./src/repositories/wallet/wallet-repository";
import { WalletRepositoryImpl } from "./src/repositories/wallet/wallet-repository-impl";
import { WalletController } from "./src/controllers/wallet/wallet-controller";

const container = new Container();

container.bind<WalletRepository>(TYPES.WalletRepository).to(WalletRepositoryImpl).inSingletonScope();
container.bind<WalletController>(WalletController).toSelf();

export default container;

