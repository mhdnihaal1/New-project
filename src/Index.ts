import { httpServer } from "./InfrastructureLayer/config/app";
import { connectDB } from "./InfrastructureLayer/config/connect-DBs";

const PORT = process.env.MYPORT || 3000;

const startServer = async (): Promise<void> => {
  await connectDB();
  const app = httpServer;
  app.listen( process.env.MYPORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
  