export type LoginRequest = {
    email: string;
    password: string;
  };
  
  export type CreatePetsPayload = {
    name: string;
    theme: string;
  };
  
  export type UpdatePetsPayload = {
    id: string;
    name?: string; 
    typesIds?: string[];
    petsIds?: string[];
  };
  
  export type UserPayload = {
    name: string;
    email: string;
    password: string;
    cpf: string;
  };