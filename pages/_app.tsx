import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { PostProvider } from "../context/PostContext";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <PostProvider>
          <Component {...pageProps} />
        </PostProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};

export default App;
