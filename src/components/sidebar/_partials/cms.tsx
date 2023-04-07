import { ActivityCurved, ChatCurved, DocumentCurved, ImageCurved, InfoCircleCurved, PaperCurved, TwoUsersCurved } from '../../../assets/icon-sidebar';

export const useCms = () => {
    const menu = [
        {
            name: 'User Management',
            icon: <TwoUsersCurved />,
            url: '/admin'
        },
        {
            name: 'Ranking Management',
            icon: <ActivityCurved />,
            url: '/ranking-management'
        },
        {
            name: 'Transaction Management',
            icon: <PaperCurved />,
            url: '/transaction-management'
        },
        {
            name: 'Go Buzz',
            icon: <ChatCurved />,
            url: '/chat'
        },
        {
            name: 'Report',
            icon: <DocumentCurved />,
            url: '/report-management'
        },
        {
            name: 'Violation Report',
            icon: <InfoCircleCurved />,
            url: '/violation-management'
        },
        {
            name: 'Banner Setting',
            icon: <ImageCurved />,
            url: '/banner-settings'
        },
    ]

    return (
        menu
    )
}