import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Desktop } from "@/pages/Desktop";
import {Txn} from "@/pages/transactions"
import {Blocks} from "@/pages/blocks"
import {TxnDetails} from "@/pages/TransactionDetails"
import {TopAccounts} from "@/pages/top-accounts"
import {Tokens} from "@/pages/tokens"
import {TokenDetails} from "@/pages/token-details"
import {TopContracts} from "@/pages/top-contracts"
import {ContractDetails} from "@/pages/contract-details"
function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Desktop} />
      <Route path="/txn" component={Txn} />
      <Route path="/blocks" component={Blocks} />
      <Route path="/txn-details" component={TxnDetails} />
      <Route path="/top-accounts" component={TopAccounts} />
      <Route path="/tokens" component={Tokens} />
      <Route path="/token-details" component={TokenDetails} />
      <Route path="/top-contracts" component={TopContracts} />
      <Route path="/contract-details" component={ContractDetails} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
