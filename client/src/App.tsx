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
function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Desktop} />
      <Route path="/txn" component={Txn} />
      <Route path="/blocks" component={Blocks} />
      <Route path="/txn-details" component={TxnDetails} />
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
