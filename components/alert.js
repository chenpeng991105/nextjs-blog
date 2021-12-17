import cn from "classnames";

export default function Alert({children, type}) {
    return (
        <div className={cn({
            ['text-blue-500']: type === 'blue',
            ['text-indigo-500']: type === 'indigo'
        })}>
            {children}
        </div>
    )
}
