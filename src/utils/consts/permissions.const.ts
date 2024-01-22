export const SYSTEM_PERMISSIONS = [
  "SystemView",
  "SystemConfigure",
  "SystemDelete",
  "SystemEdit",
];
export const ADMIN_PERMISSIONS = [
  "AdminView",
  "AdminCreate",
  "AdminDelete",
  "AdminEdit",
];
export const RESIDENT_PERMISSIONS = [
  "ViewUser",
  "CreateUser",
  "DeleteUser",
  "UpdateUser",
];

export const ALL_PERMISSIONS = [
  ...SYSTEM_PERMISSIONS,
  ...ADMIN_PERMISSIONS,
  ...RESIDENT_PERMISSIONS,
];
