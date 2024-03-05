export default function ConditionList({ children, title, value }) {
    return (
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>{title}</span>
            <div className="inline-flex space-x-4">
                <p>{value}</p>
                {children}
            </div>
        </li>
    );
}
