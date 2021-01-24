import { Layout, styled } from 'flipper-plugin';
import chromeTheme from '../constants/chromeTheme';

const TopBar = styled(Layout.Container)({
    flexDirection: 'row',
    backgroundColor: chromeTheme.dark.BASE_BACKGROUND_COLOR,
});

export default TopBar;
