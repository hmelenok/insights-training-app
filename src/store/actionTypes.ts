// ACTION TYPES
export enum ActionTypes {
  RESET_APP_NAME = 'RESET_APP_NAME',
  SET_APP_NAME = 'SET_APP_NAME',
}

/**
 * Map of types
 * with ActionTypes as key and appropriate payload type as value
 *
 * Note: If action only have type without payload simply put undefined
 */
export type ActionsPayload = {
  [ActionTypes.RESET_APP_NAME]: undefined;
  [ActionTypes.SET_APP_NAME]: string;
};

export type ActionMap<M extends Record<string, any>> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

/**
 *  Enum of all possible redux actions defined in ActionTypes and ActionsPayload
 *
 *  Example:
 *  {
 *      type: 'RESET_SEARCH_VALUE'
 *  } |
 *  {
 *      type: 'SET_SEARCH_VALUE',
 *      payload: string
 *  }
 */
export type AppAction = ActionMap<ActionsPayload>[keyof typeof ActionTypes];

/**
 * Factory for creating redux actions
 *
 * @param {string} actionName - Redux action type
 * @param args - payload of action if
 *
 *
 * @example
 * createAction(ActionTypes.SET_SEARCH_VALUE, 'somevalue')
 * createAction(ActionTypes.RESET_SEARCH_VALUE)
 * createAction(ActionTypes.ACTION_WITH_OBJECT, { key: value })
 */
export const createAction = <Key extends keyof ActionsPayload>(
  actionName: Key,
  ...args: ActionsPayload[Key] extends undefined ? [] : [ActionsPayload[Key]]
): ActionsPayload[Key] extends undefined
  ? {type: Key}
  : {payload: ActionsPayload[Key]; type: Key} =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  args.length > 0 ? {type: actionName, payload: args[0]} : {type: actionName};
