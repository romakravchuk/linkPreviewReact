const lambdaUrl =
    'https://qtgl0vayek.execute-api.eu-central-1.amazonaws.com/stage/lambdalinkpreview-dev-linkPreview';

const setUpdLinks = (link) => {
    if (link.includes('http')) return link;
    return `http://${link}`;
};

const handleTextareaValue = (value) => {
    const regToFindUrl = /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi;
    return value.match(regToFindUrl) || [];
};

export { lambdaUrl, setUpdLinks, handleTextareaValue };
