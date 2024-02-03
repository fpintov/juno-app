import { Routes } from "@angular/router";

export const content: Routes = [
    {
        path: 'dashboard',
        data: {
            title: "Dashboard",
            breadcrumb: "Dashboard",
        },
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DahboardModule),
    },
    {
        path: 'widgets',
        data: {
            title: "Widgets",
            breadcrumb: "Widgets",
        },
        loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule),
    },
    {
        path: 'page-layout',
        data: {
            title: "Page Layout",
            breadcrumb: "Page Layout",
        },
        loadChildren: () => import('../../components/page-layout/page-layout.module').then(m => m.PageLayoutModule),
    },
    {
        path: 'project',
        data: {
            title: "Widgets",
            breadcrumb: "Project",
        },
        loadChildren: () => import('../../components/project/project.module').then(m => m.ProjectModule),
    },
    {
        path: 'file-manager',
        data: {
            title: "Widgets",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/file-manager/file-manager.module').then(m => m.FileManagerModule),
    },
    {
        path: 'ecommerce',
        data: {
            title: "ECommerce",
            breadcrumb: "ECommerce",
        },
        loadChildren: () => import('../../components/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
    },
    {
        path: 'letter-box',
        data: {
            title: "Email",
            breadcrumb: "Email",
        },
        loadChildren: () => import('../../components/letter-box/letter-box.module').then(m => m.LetterBoxModule),
    },
    {
        path: 'invoice',
        data: {
            title: "Ecommerce",
            breadcrumb: "Ecommerce",
        },
        loadChildren: () => import('../../components/invoice/invoice.module').then(m => m.InvoiceModule),
    },
    {
        path: 'chat',
        data: {
            title: "Chat",
            breadcrumb: "Chat",
        },
        loadChildren: () => import('../../components/chat/chat.module').then(m => m.ChatModule),
    },
    {
        path: 'user',
        data: {
            title: "Users",
            breadcrumb: "Users",
        },
        loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    },
    {
        path: 'bookmarks',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/bookmarks/bookmarks.module').then(m => m.BookmarksModule),
    },
    {
        path: 'contacts',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/contacts/contacts.module').then(m => m.ContactsModule),
    },
    {
        path: 'tasks',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/tasks/tasks.module').then(m => m.TasksModule),
    },
    {
        path: 'calender',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/calendar/calendars.module').then(m => m.CalendarsModule),
    },
    {
        path: 'social-app',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/social-app/social-app.module').then(m => m.SocialAppModule),
    },
    {
        path: 'todo',
        data: {
            title: "To-Do",
            breadcrumb: "To-Do",
        },
        loadChildren: () => import('../../components/to-do/to-do.module').then(m => m.ToDoModule),
    },
    {
        path: 'search-result',
        data: {
            title: "Search Pages",
            breadcrumb: "Search Pages",
        },
        loadChildren: () => import('../../components/search-result/search-result.module').then(m => m.SearchResultModule),
    },
    {
        path: 'form-controls',
        data: {
            title: "Form Controls",
            breadcrumb: "Form Controls",
        },
        loadChildren: () => import('../../components/forms/form-controls/form-controls.module').then(m => m.FormControlsModule),
    },
    {
        path: 'form-widgets',
        data: {
            title: "Form Widgets",
            breadcrumb: "Form Widgets",
        },
        loadChildren: () => import('../../components/forms/form-widgets/form-widgets.module').then(m => m.FormWidgetsModule),
    },
    {
        path: 'table',
        data: {
            title: "Tables",
            breadcrumb: "Tables",
        },
        loadChildren: () => import('../../components/table/table.module').then(m => m.TableModule),
    },
    {
        path: 'ui-kits',
        data: {
            title: "Ui Kits",
            breadcrumb: "Ui Kits",
        },
        loadChildren: () => import('../../components/ui-kits/ui-kits.module').then(m => m.UiKitsModule),
    },
    {
        path: 'bonus-ui',
        data: {
            title: "Bonus Ui",
            breadcrumb: "Bonus Ui",
        },
        loadChildren: () => import('../../components/bonus-ui/bonus-ui.module').then(m => m.BonusUiModule),
    },
    {
        path: 'icons',
        data: {
            title: "Icons",
            breadcrumb: "Icons",
        },
        loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule),
    },
    {
        path: 'buttons',
        data: {
            title: "Buttons",
            breadcrumb: "Buttons",
        },
        loadChildren: () => import('../../components/buttons/buttons.module').then(m => m.ButtonsModule),
    },
    {
        path: 'chart',
        data: {
            title: "Charts",
            breadcrumb: "Charts",
        },
        loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartsModule),
    },
    {
        path: 'sample-page',
        data: {
            title: "Pages",
            breadcrumb: "Pages",
        },
        loadChildren: () => import('../../components/sample-page/sample-page.module').then(m => m.SamplePageModule),
    },
    {
        path: 'gallary',
        data: {
            title: "Gallery",
            breadcrumb: "Gallery",
        },
        loadChildren: () => import('../../components/gallery/gallary.module').then(m => m.GallaryModule),
    },
    {
        path: 'blog',
        data: {
            title: "Blog",
            breadcrumb: "Blog",
        },
        loadChildren: () => import('../../components/blog/blog.module').then(m => m.BlogModule),
    }, 
    {
        path: 'faq',
        data: {
            title: "FAQ",
            breadcrumb: "FAQ",
        },
        loadChildren: () => import('../../components/faq/faq.module').then(m => m.FaqModule),
    },
    {
        path: 'job',
        data: {
            title: "Job Search",
            breadcrumb: "Job Search",
        },
        loadChildren: () => import('../../components/job-search/job-search.module').then(m => m.JobSearchModule),
    },
    {
        path: 'learning',
        data: {
            title: "Learning",
            breadcrumb: "Learning",
        },
        loadChildren: () => import('../../components/learning/learning.module').then(m => m.LearningModule),
    },
    {
        path: 'maps',
        data: {
            title: "Maps",
            breadcrumb: "Maps",
        },
        loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule),
    },
    {
        path: 'editors',
        data: {
            title: "Editors",
            breadcrumb: "Editors",
        },
        loadChildren: () => import('../../components/editors/editors.module').then(m => m.EditorsModule),
    },
    {
        path: 'knowledgebase',
        data: {
            title: "Knowledgebase",
            breadcrumb: "Knowledgebase",
        },
        loadChildren: () => import('../../components/knowledgebase/knowledgebase.module').then(m => m.KnowledgebaseModule),
    },
    {
        path: 'support-ticket',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/support-tickit/support-tickit.module').then(m => m.SupportTickitModule),
    },
]


