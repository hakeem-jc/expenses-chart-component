import './styles.css';
import { Bar } from '../Bar';

export const Chart = () => {
    return (
        <section className="chart">
            <h1 className="chart__title">Spending - Last 7 days</h1>
            <div className="chart__bars">
                <Bar day='Mon'/>
            </div>
            <div className="chart__summary">
                <h5 className="chart__text">Total this month</h5>
                <div className="chart__summary-flex">
                    <div className="chart__summary-flex-left">
                        <h1 className="chart__number">$478.33</h1>
                    </div>
                    <div className="chart__summary-flex-right">
                        <h3 className="chart__number-change">+2.4%</h3>
                        <h5 className="chart__text">from last month</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}