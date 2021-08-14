export enum DockboxActions {
  CREATE = "dockbox/create",
  CREATE_SUCCESS = "dockbox/create_success",
  CREATE_ERROR = "dockbox/create_error",
  GET = "dockbox/get",
}

export const createDockbox = (payload: { url: string }) => ({
  type: DockboxActions.CREATE,
  payload,
});
export const createDockboxSuccess = (payload: { message: string }) => ({
  type: DockboxActions.CREATE_SUCCESS,
  payload,
});
export const createDockboxError = (payload: { message: string }) => ({
  type: DockboxActions.CREATE_ERROR,
  payload,
});
