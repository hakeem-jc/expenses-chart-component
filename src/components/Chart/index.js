import './styles.css';

export const Chart = () => {
    return (
        <section className="chart">
            <h1 className="chart__title"></h1>
            <div className="chart__bars">
                
            </div>
            <div className="chart__summary">
                <h2 className="chart__text">Total this month</h2>
                <div className="chart__summary-flex">
                    <div className="chart__summary-flex-left">
                        <h1 className="chart__number">$478.33</h1>
                    </div>
                    <div className="chart__summary-flex-right">
                        <h3 className="chart__number-change">+2.4%</h3>
                        <h3 className="chart__text">from last month</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}