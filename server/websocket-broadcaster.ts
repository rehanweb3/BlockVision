import { WebSocketServer, WebSocket } from "ws";

let wss: WebSocketServer | null = null;

export function setWebSocketServer(server: WebSocketServer) {
  wss = server;
}

export function getWebSocketServer(): WebSocketServer | null {
  return wss;
}

export function broadcastToClients(message: any) {
  if (!wss) {
    console.warn("WebSocket server not initialized, cannot broadcast");
    return;
  }

  const messageStr = JSON.stringify(message);
  let clientCount = 0;

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(messageStr);
      clientCount++;
    }
  });

  if (clientCount > 0) {
    console.log(`Broadcasted ${message.type} to ${clientCount} clients`);
  }
}

export function broadcastNewBlock(block: {
  blockNumber: number;
  hash: string;
  miner: string;
  timestamp: number;
  transactionCount: number;
  gasUsed: string;
  gasLimit: string;
}) {
  broadcastToClients({
    type: "newBlock",
    data: block,
  });
}

export function broadcastNewTransaction(transaction: {
  txHash: string;
  blockNumber: number;
  fromAddress: string;
  toAddress: string | null;
  value: string;
  status: number;
}) {
  broadcastToClients({
    type: "newTransaction",
    data: transaction,
  });
}

export function broadcastContractVerified(address: string) {
  broadcastToClients({
    type: "contractVerified",
    address,
  });
}

export function broadcastTokenDeployed(data: {
  address: string;
  name: string;
  symbol: string;
  deployer: string;
}) {
  broadcastToClients({
    type: "token_deployed",
    data,
  });
}

export function broadcastLogoStatusChanged(tokenAddress: string, status: string) {
  broadcastToClients({
    type: "logoStatusChanged",
    tokenAddress,
    status,
  });
}

export function broadcastLogoSubmitted(tokenAddress: string) {
  broadcastToClients({
    type: "logoSubmitted",
    tokenAddress,
  });
}
