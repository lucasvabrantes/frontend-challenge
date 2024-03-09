import FormPage from "./pages/FormPage";
import { GlobalStyle } from "./styles/global";
import { ReactQueryDevtools } from "react-query/devtools";

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <FormPage />
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    );
};
