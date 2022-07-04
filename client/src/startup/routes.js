import VueRouter from 'vue-router';


import EditorPage from '/src/components/CodeEditor/EditorPage';
import ReportsMain from '/src/components/ReportMenu/ReportsMain';
import ReportViewerMain from '/src/components/ReportViewer/ReportViewerMain';
import EditMain from '/src/components/EditReport/EditMain';

import services from '/src/services';

// async function getRootFolder(){
//     let rootFolder;
//     await services.Folders.getRoot()
//         .then(res => {
//             rootFolder = res.data.id;
//         })
//         .catch(e => {
//             console.log(e);
//         })
//     return rootFolder;
// }


const routes = [
    {
        path: '/',
        redirect: `/reports`
    },
    {
        path: '/reports',
        name: 'Home',
        component: ReportsMain,
        props: route => {
            return {folderId: route.query.f};
        }
    },
    {
        path: '/editor/:id?',
        name: "Editor",
        component: EditorPage,
        props: true
    },
    {
        path: '/report/:id?',
        name: "ReportViewer",
        component: ReportViewerMain,
        props: true
    },
    {
        path: '/edit/:id',
        name: "EditReport",
        component: EditMain,
        props:true
    }
];

const router = new VueRouter({routes});

export default router;