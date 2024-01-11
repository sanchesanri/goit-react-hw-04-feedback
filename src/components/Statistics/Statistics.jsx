

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <li><p>Good: {good}</p></li>
            <li><p>Neutral: {neutral}</p></li>
            <li><p>Bad: {bad}</p></li>
            <li><p>Total: {total()}</p></li>
            <li><p>Positive feedback: {positivePercentage()}%</p></li>
        </>
    )
} 