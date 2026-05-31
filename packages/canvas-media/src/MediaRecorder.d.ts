declare function MediaRecorder(props: any): React.JSX.Element;
declare namespace MediaRecorder {
    namespace propTypes {
        export let onSave: import("prop-types").Validator<(...args: any[]) => any>;
        export let errorMessage: import("prop-types").Validator<string>;
        export { object as MediaCaptureStrings };
    }
}
export default MediaRecorder;
import React from 'react';
import { object } from 'prop-types';
