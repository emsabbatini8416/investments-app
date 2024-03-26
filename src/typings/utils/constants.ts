export type PayloadListBase = Record<string, object | undefined>

export type Keyof<T extends object> = Extract<keyof T, string>

export type PayloadStack<Params extends object | undefined = object | undefined> = Readonly<Params>

export type Payload<
  ParamList extends PayloadListBase,
  ActionType extends keyof ParamList = Keyof<ParamList>
> = PayloadStack<ParamList[ActionType]>

export type PayloadAction<ActionType extends PayloadListBase> = {
  type: keyof ActionType
  payload?: Payload<ActionType>
}