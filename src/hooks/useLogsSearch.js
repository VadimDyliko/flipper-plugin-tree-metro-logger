import { useCallback, useState } from 'react';

export default function useLogsSearch() {
    const [searchKeywords, setSearchKeywords] = useState([]);

    const searchKeywordsHandler = useCallback(({ target }) => {
        setSearchKeywords(target.value);
    }, []);

    return [searchKeywords, searchKeywordsHandler];
}
