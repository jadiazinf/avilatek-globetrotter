export interface ISupabaseModel<T, U> {
  mapFromServerToClient(payload: U): T;
  mapFromClientToServer(payload: T): U;
}
