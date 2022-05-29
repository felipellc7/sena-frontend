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

import {
  SpecialtyEdit,
  SpecialtyNew,
  SpecialtyList,
} from "./../pages/SpecialtyScreens"

import {
  ConsultingRoomEdit,
  ConsultingRoomNew,
  ConsultingRoomList,
} from "./../pages/ConsultingRoomScreens"

import {
  ScheduleEdit,
  ScheduleNew,
  ScheduleShow,
  ScheduleList,
} from "./../pages/ScheduleScreens"

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
  },
  // Specialties
  {
    name: "specialtyList",
    path: '/specialties',
    component: SpecialtyList
  },
  {
    name: "specialtyNew",
    path: '/specialties/new',
    component: SpecialtyNew
  },
  {
    name: "specialtyEdit",
    path: '/specialties/edit/:specialtyId',
    component: SpecialtyEdit
  },
  // Consulting Rooms
  {
    name: "consultingRoomList",
    path: '/consulting_rooms',
    component: ConsultingRoomList
  },
  {
    name: "consultingRoomNew",
    path: '/consulting_rooms/new',
    component: ConsultingRoomNew
  },
  {
    name: "consultingRoomEdit",
    path: '/consulting_rooms/edit/:consultingRoomId',
    component: ConsultingRoomEdit
  },
  // Schedules
  {
    name: "scheduleList",
    path: '/schedules',
    component: ScheduleList
  },
  {
    name: "scheduleNew",
    path: '/schedules/new',
    component: ScheduleNew
  },
  {
    name: "scheduleEdit",
    path: '/schedules/edit/:scheduleId',
    component: ScheduleEdit
  },
  {
    name: "scheduleShow",
    path: '/schedules/:scheduleId',
    component: ScheduleShow
  },
]

export default routeList;