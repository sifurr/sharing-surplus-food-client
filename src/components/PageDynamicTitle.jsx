import { Helmet } from "react-helmet";

const PageDynamicTitle = ({ pageTitle }) => {
    return (
        <Helmet>
            <title> Food Sharing | {pageTitle}</title>
        </Helmet>
    );
};

export default PageDynamicTitle;