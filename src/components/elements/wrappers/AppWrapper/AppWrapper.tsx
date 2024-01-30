"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";
import NavBar from "../../navbar/NavBar";

type Props = {
  children: ReactNode;
};
const AppWrapper = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        {children}
      </QueryClientProvider>
    </Provider>
  );
};

export default AppWrapper;
