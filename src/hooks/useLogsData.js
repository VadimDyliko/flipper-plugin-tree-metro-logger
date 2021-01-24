import { METRO_LOGS_ENDPOINT } from '../constants';
import { useCallback, useEffect, useState } from 'react';

export default function useLogsData() {
    const _ws = new WebSocket(METRO_LOGS_ENDPOINT);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        _ws.onmessage = evt => {
            const message = JSON.parse(evt.data);
            try {
                const data = message.data.map(item => {
                    try {
                        return JSON.parse(item);
                    } catch (e) {
                        return item;
                    }
                });
                setLogs(prev => [
                    ...prev,
                    {
                        method: message.level,
                        data,
                    },
                ]);
            } catch (e) {
                console.log(e);
            }
        };
    }, []);

    const clearLogsHandler = useCallback(() => {
        setLogs([]);
    }, []);

    return [logs, clearLogsHandler];
}
