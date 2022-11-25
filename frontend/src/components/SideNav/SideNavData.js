import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
// import * as GiIcons from 'react-icons/gi';

export const SideNavData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDropDownFill />,
        iconOpen: <RiIcons.RiArrowDropUpFill />
    },
    {
        title: "Patients",
        path: "#",
        icon: <AiIcons.AiOutlineUser />,
        iconClosed: <RiIcons.RiArrowDropDownFill />,
        iconOpen: <RiIcons.RiArrowDropUpFill />,
        subNav: [
            {
                title: "Add Patients",
                path: "/addpatient",
                icon: <AiIcons.AiOutlineUserAdd />,
            },
            {
                title: "Manage Patients",
                // path: "/tablepatient",
                path: "/managepatient",
                icon: <AiIcons.AiOutlineUserSwitch />,
            }
        ]

    }, 
    // {
    //     title: "Doctors",
    //     path: "#",
    //     icon: <FaIcons.FaStethoscope />,
    //     iconClosed: <RiIcons.RiArrowDropDownFill />,
    //     iconOpen: <RiIcons.RiArrowDropUpFill />,
    //     subNav: [
    //         {
    //             title: "Add Doctor",
    //             path: "/adddoctor",
    //             icon: <GiIcons.GiMedicines />,
    //         },
    //         {
    //             title: "Manage Doctor",
    //             path: "/managedoctor",
    //             icon: <FaIcons.FaHandHoldingMedical />,
    //         }
    //     ]

    // },
    {
        title: "Reports",
        icon: <FiIcons.FiFile />,
        iconClosed: <RiIcons.RiArrowDropDownFill />,
        iconOpen: <RiIcons.RiArrowDropUpFill />,
        subNav: [
            {
                title: "Add Report",
                path: "/tablepatient",
                icon: <FiIcons.FiFilePlus />,
            },
            {
                title: "Manage Report",
                path: "/report",
                icon: <FiIcons.FiFileText />,
            }
        ]
    },
    {
        title: "Search",
        // path: "/patientRecord",
        icon: <FaIcons.FaSearch />,
        iconClosed: <RiIcons.RiArrowDropDownFill />,
        iconOpen: <RiIcons.RiArrowDropUpFill />
    }

]