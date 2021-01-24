import React from 'react';
import Button from './components/Button';
import TopBar from './components/TopBar';
import SearchInput from './components/SearchInput';
import { METRO_OS } from './constants';
import useLogsData from './hooks/useLogsData';
import useLogsSearch from './hooks/useLogsSearch';
import LogsContent from './components/LogsContent';

export function supportsDevice(device) {
    return device.os === METRO_OS;
}

export function devicePlugin() {
    return {};
}

export function Component() {
    const [logs, clearLogsHandler] = useLogsData();
    const [searchKeywords, searchKeywordsHandler] = useLogsSearch();

    return (
        <>
            <TopBar>
                <Button label={'Clear'} onClick={clearLogsHandler} />
                <SearchInput onChange={searchKeywordsHandler} placeholder={'Search...'} />
            </TopBar>
            <LogsContent logs={logs} searchKeywords={searchKeywords} />
        </>
    );
}
