export interface NavigationProps {
  navigation: any;
  route?: any;
}

export interface AuthorizedUserForm {
  firstName: string;
  lastName: string;
  idNumber: string;
  phoneNumber: string;
  email: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  idNumber?: string;
  phoneNumber?: string;
  email?: string;
}

export type RootStackParamList = {
  Lobby: undefined;
  AddUser: undefined;
  Success: undefined;
};