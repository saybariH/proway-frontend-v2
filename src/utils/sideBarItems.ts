import dashboardIcon from "@assets/icons/dashboard-icon.svg"
import projectIcon from "@assets/icons/project-icon.svg"
import reportIcon from "@assets/icons/report-icon.svg"
import clientsIcon from "@assets/icons/client-icon.svg"
import feedbackIcon from "@assets/icons/feedback-icon.svg"
import suportIcon from "@assets/icons/support-icon.svg"
import settingsIcon from "@assets/icons/settings-icon.svg"


export const topSideBarItems = [
    {
        id: 1,
        title: "Dashboard",
        icon: dashboardIcon,
        link: "/",
    },
    {
        id: 2,
        title: "Projects",
        icon: projectIcon,
        link: "/projects",
    },
    {
        id: 3,
        title: "Clients",
        icon: projectIcon,
        link: "/clients",
    },
    {
        id: 4,
        title: "Reports",
        icon: reportIcon,
        link: "/reports",
    },
];

export const bottomSideBarItems = [
    {
        id: 5,
        title: "Support",
        icon: suportIcon,
        link: "/support",
    },
    {
        id: 6,
        title: "Feedback",
        icon: feedbackIcon,
        link: "/feedback",
    },
    {
        id: 6,
        title: "Settings",
        icon: settingsIcon,
        link: "/settings",
    },
];