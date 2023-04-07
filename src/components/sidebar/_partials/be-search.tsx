import { ChatCurved, HomeCurved, LeafCurved, PaperCurved } from '../../../assets/icon-sidebar';

export const useBeesearch = () => {
    const menu = [{
        name: 'Dashboard',
        icon: <HomeCurved />,
        url: '/'
    },
    {
        name: 'Garden',
        icon: <LeafCurved sx={{ fontSize: 32, marginRight: '-8px', marginTop: '4px' }} />,
        url: '/garden'
    },
    {
        name: 'Transaction',
        icon: <PaperCurved />,
        url: '/transaction'
    },
    {
        name: 'Go Buzz',
        icon: <ChatCurved />,
        url: '/chat'
    }]

    return (
        menu
    )
}