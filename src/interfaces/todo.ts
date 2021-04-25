/**
 * @Todo {interface}
 * type of todo
 */

export interface Todo  {
    id:string;
    task:string;
    isCompleted:boolean
}

/**
 * @TodoProps {interface}
 * type of todo that will be pass as a props
 */
export interface TodoProps{
    todo:Todo;
}
