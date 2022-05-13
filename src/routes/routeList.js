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
    component: DashboardScreen
  },
  // Doctors
  {
    name: "doctorList",
    path: '/doctors',
    component: DoctorList
  },
  {
    name: "doctorNew",
    path: '/doctors/new',
    component: DoctorNew
  },
  {
    name: "doctorEdit",
    path: '/doctors/edit/:doctorDni',
    component: DoctorEdit
  },
  {
    name: "doctorShow",
    path: '/doctors/:doctorDni',
    component: DoctorShow
  },
  // Patients
  {
    name: "patientList",
    path: '/patients',
    component: PatientList
  },
  {
    name: "patientNew",
    path: '/patients/new',
    component: PatientNew
  },
  {
    name: "patientEdit",
    path: '/patients/edit/:patientDni',
    component: PatientEdit
  },
  {
    name: "patientShow",
    path: '/patients/:patientDni',
    component: PatientShow
  }
]

export default routeList;