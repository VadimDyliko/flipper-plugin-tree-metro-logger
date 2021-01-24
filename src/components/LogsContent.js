import React from 'react';
import { Layout, styled } from 'flipper-plugin';
import { Console } from 'console-feed';
import chromeTheme from '../constants/chromeTheme';

const Container = styled(Layout.ScrollContainer)({
    backgroundColor: chromeTheme.dark.BASE_BACKGROUND_COLOR,
    flexDirection: 'column-reverse',
});

export default function LogsContent({ logs, searchKeywords }) {
    return (
        <Container>
            <Console
                logs={logs}
                variant={'dark'}
                style={chromeTheme.dark}
                searchKeywords={searchKeywords}
            />
        </Container>
    );
}
