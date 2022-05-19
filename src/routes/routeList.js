import DashboardScreen from "../pages/DashboardScreen";

import {
  DoctorEdit,
  DoctorNew,
  DoctorShow,
  DoctorList,
} from "./../pages/DoctorScreens"

import {
  PatientEdit,
  PatientNew,
  PatientShow,
  PatientList,
} from "./../pages/PatientScreens"

const routeList = [
  {
    name: "dashboard",
    path: '/dashboard',
    element: <DashboardScreen />
  },
  // Doctors
  {
    name: "doctorList",
    path: '/doctors',
    element: <DoctorList />
  },
  {
    name: "doctorNew",
    path: '/doctors/new',
    element: <DoctorNew />
  },
  {
    name: "doctorEdit",
    path: '/doctors/edit/:doctorDni',
    element: <DoctorEdit />
  },
  {
    name: "doctorShow",
    path: '/doctors/:doctorDni',
    element: <DoctorShow />
  },
  // Patients
  {
    name: "patientList",
    path: '/patients',
    element: <PatientList />
  },
  {
    name: "patientNew",
    path: '/patients/new',
    element: <PatientNew />
  },
  {
    name: "patientEdit",
    path: '/patients/edit/:patientDni',
    element: <PatientEdit />
  },
  {
    name: "patientShow",
    path: '/patients/:patientDni',
    element: <PatientShow />
  }
]

export default routeList;