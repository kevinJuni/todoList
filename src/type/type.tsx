export interface AddInputType {
    label:string,
    value:string|null,
    setValue:React.Dispatch<React.SetStateAction<string | null>>
}

export interface AddDatePickerType {
    value:string|null,
    setValue:React.Dispatch<React.SetStateAction<string|null>>
}

export interface AddTimePickerType {
    value:string|null,
    setValue:React.Dispatch<React.SetStateAction<string|null>>
}

export interface AddTextareaType {
    label:string,
    value:string | number | string[] | undefined,
    setValue:React.Dispatch<React.SetStateAction<string | number | string[] | undefined>>
}

export interface ItemType {
    title:string | null,
    content:string | number | string[] | undefined,
    date: string | null,
    time: string | null,
}
