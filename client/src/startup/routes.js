import VueRouter from 'vue-router';


import EditorPage from '/src/components/Editor/EditorPage';
import ReportsMain from '/src/components/ReportMenu/ReportsMain';
import ReportViewerMain from '/src/components/ReportViewer/ReportViewerMain';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: ReportsMain,
        props: route => {
            return {folderId: route.query.f};
        }
    },
    {
        path: '/editor/:reportId?',
        name: "Editor",
        component: EditorPage
    },
    {
        path: '/report/:reportId?',
        name: "ReportViewer",
        component: ReportViewerMain
    }
];

const router = new VueRouter({routes});

export default router;