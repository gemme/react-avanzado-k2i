import '../Count.css';

interface FormatCountTimeoutProps {
    countTimeout: number;
}

export const FormatCountTimeout = (props: FormatCountTimeoutProps) => {

    return <div className='format-count-timeout' >{'Count timeout: ' + props.countTimeout}</div>
}
