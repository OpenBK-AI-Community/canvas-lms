declare function LoadingIndicator({ translatedTitle, size }: {
    translatedTitle: any;
    size: any;
}): React.JSX.Element;
declare namespace LoadingIndicator {
    namespace propTypes {
        let translatedTitle: import("prop-types").Validator<string>;
        let size: import("prop-types").Requireable<string>;
    }
    namespace defaultProps {
        let size_1: string;
        export { size_1 as size };
    }
}
export default LoadingIndicator;
import React from 'react';
